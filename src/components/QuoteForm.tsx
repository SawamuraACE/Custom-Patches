"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { quoteSchema, type QuoteFormData } from "../lib/schema";
import { useCloudinary } from "../hooks/useCloudinary";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { cn } from "../lib/utils";

export function QuoteForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // We will configure this in the next step
  const { upload, uploading: isUploadingFile } = useCloudinary();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const file = watch("file");

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      setValue("file", acceptedFiles[0], { shouldValidate: true });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".svg", ".webp"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      let attachmentUrl = "";

      // 1. Upload file to Cloudinary (If a file exists)
      if (data.file instanceof File) {
        // NOTE: This will fail until we set up the Cloudinary Key next
        const uploadedUrl = await upload(data.file);
        if (uploadedUrl) {
          attachmentUrl = uploadedUrl;
        } else {
           console.warn("File upload failed, sending form without attachment.");
        }
      }

      // 2. Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // ✅ Using environment variable (industry standard)
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, 
          
          subject: `New Quote Request from ${data.name}`,
          from_name: "My Custom Patches Website",
          
          // Form Data
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          details: `Size: ${data.size}, Qty: ${data.quantity}`,
          
          // This allows you to click the link in the email to download the image
          attachment_link: attachmentUrl || "No file uploaded", 
          
          // Technical Message Body
          message: `
            New Quote Request:
            ------------------
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            
            Specs:
            ------
            Size: ${data.size}
            Quantity: ${data.quantity}
            
            Design File:
            ------------
            ${attachmentUrl ? attachmentUrl : "No file attached"}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl bg-green-50 p-8 text-center animate-in fade-in zoom-in-95">
        <CheckCircle className="h-12 w-12 text-green-600" />
        <h3 className="text-2xl font-bold text-green-800">Quote Received!</h3>
        <p className="text-green-700">
          We have received your details and will get back to you shortly with a custom quote.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Input placeholder="Your Name" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Input placeholder="Email Address" type="email" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="Phone (Optional)" type="tel" {...register("phone")} />
        <div className="flex gap-2">
          <div className="flex-1 space-y-2">
            <Input placeholder="Size (e.g. 3x3)" {...register("size")} />
            {errors.size && <p className="text-xs text-red-500">{errors.size.message}</p>}
          </div>
          <div className="flex-1 space-y-2">
            <Input placeholder="Qty" type="number" {...register("quantity")} />
            {errors.quantity && <p className="text-xs text-red-500">{errors.quantity.message}</p>}
          </div>
        </div>
      </div>

      {/* File Upload Area */}
      <div
        {...getRootProps()}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-colors hover:bg-gray-100",
          isDragActive && "border-brand-orange bg-brand-orange/5",
          errors.file && "border-red-500"
        )}
      >
        <input {...getInputProps()} />
        <Upload className="mb-2 h-8 w-8 text-gray-400" />
        {file ? (
          <p className="text-sm font-medium text-brand-dark">{(file as File).name}</p>
        ) : (
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Click to upload or drag & drop</p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or PDF (Max 10MB)</p>
          </div>
        )}
      </div>

      {submitError && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          {submitError}
        </div>
      )}

      <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-red text-white" disabled={isSubmitting || isUploadingFile}>
        {isSubmitting || isUploadingFile ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {isUploadingFile ? "Uploading File..." : "Sending..."}
          </>
        ) : (
          "Get Instant Quote"
        )}
      </Button>
    </form>
  );
}
