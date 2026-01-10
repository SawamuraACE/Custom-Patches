"use client";

import { useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Upload, CheckCircle } from "lucide-react";
import { useCloudinary } from "../hooks/useCloudinary";

export function SpecialRates() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { upload } = useCloudinary();

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      setSelectedFile(acceptedFiles[0]);
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    size: "",
    patchType: "Embroidered Patches",
    backing: "Iron on",
    instructions: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let attachmentUrl = "";

      // 1. Upload file to Cloudinary if selected
      if (selectedFile) {
        setIsUploadingFile(true);
        const uploadedUrl = await upload(selectedFile);
        if (uploadedUrl) {
          attachmentUrl = uploadedUrl;
          setUploadedFileUrl(uploadedUrl);
        } else {
          console.warn("File upload failed, sending form without attachment.");
        }
        setIsUploadingFile(false);
      }

      // 2. Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Special Rates Request from ${formData.name}`,
          from_name: "My Custom Patches Website",
          
          // Form Data
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          quantity: formData.quantity,
          size: formData.size,
          patch_type: formData.patchType,
          backing: formData.backing,
          instructions: formData.instructions,
          
          // Attachment Link
          attachment_link: attachmentUrl || "No file attached",
          
          message: `
            New Special Rates Request:
            ------------------
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            
            Specs:
            ------
            Size: ${formData.size}
            Quantity: ${formData.quantity}
            Patch Type: ${formData.patchType}
            Backing: ${formData.backing}
            
            Instructions:
            ${formData.instructions || "None"}
            
            Design File:
            ${attachmentUrl ? attachmentUrl : "No file attached"}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          quantity: "",
          size: "",
          patchType: "Embroidered Patches",
          backing: "Iron on",
          instructions: "",
        });
        setSelectedFile(null);
        setUploadedFileUrl(null);
        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="relative bg-white w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto">
          <div className="w-full lg:w-1/2 py-24 px-8 flex flex-col items-center justify-center text-center relative">
            <div className="relative w-[131px] h-[120px] mb-6 animate-float">
              <Image
                 src="/assets/instant-quote-envelope.png"
                 alt="Envelope"
                 fill
                 sizes="131px"
                 className="object-contain drop-shadow-xl"
               />
            </div>

            <h2 className="text-5xl font-extrabold text-brand-dark leading-tight mb-6">
              Instant Quote <br /> Available
            </h2>
            
            <p className="text-gray-500 max-w-md text-lg leading-relaxed">
              Receive your quick quote instantly for custom patches! Experience top-notch craftsmanship, swift delivery, and unbeatable pricing.
            </p>
          </div>

          <div className="w-full lg:w-1/2 bg-[#1A1A1A] p-8 md:p-16 flex flex-col justify-center text-white">
            <div className="max-w-xl mx-auto w-full">
              <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in zoom-in-95">
                <CheckCircle className="h-16 w-16 text-green-400" />
                <h3 className="text-3xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-300 text-lg">
                  We will contact you within 24 hours with special rates for your order.
                </p>
                <p className="text-gray-400 text-sm">
                  Check your email for confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white w-full overflow-hidden py-12 md:py-24">
      
      <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto">
        
        {/* LEFT SIDE: "Instant Quote Available" */}
        <div className="w-full lg:w-1/2 px-8 flex flex-col items-center justify-center text-center relative">

          {/* Envelope Icon */}
          <div className="relative w-[131px] h-[120px] mb-6 animate-float">
             <Image
                src="/assets/instant-quote-envelope.png"
                alt="Envelope"
                fill
                sizes="131px"
                className="object-contain drop-shadow-xl"
              />
          </div>

          <h2 className="text-5xl font-extrabold text-brand-dark leading-tight mb-6">
            Instant Quote <br /> Available
          </h2>
          
          <p className="text-gray-500 max-w-md text-lg leading-relaxed">
            Receive your quick quote instantly for custom patches! Experience top-notch craftsmanship, swift delivery, and unbeatable pricing.
          </p>
        </div>


        {/* RIGHT SIDE: The Dark Form */}
        <div className="w-full lg:w-1/2 bg-[#1A1A1A] p-8 md:p-16 flex flex-col justify-center text-white hide-scrollbar overflow-y-auto">
            <div className="max-w-xl mx-auto w-full">
                <div className="mb-8 text-center lg:text-left">
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-white">Unlock Special Rates</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#2A2A2A] border-transparent text-white placeholder:text-gray-400 h-12 rounded-lg" 
                      placeholder="Name"
                      required
                    />
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-[#2A2A2A] border-transparent text-white placeholder:text-gray-400 h-12 rounded-lg" 
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-[#2A2A2A] border-transparent text-white placeholder:text-gray-400 h-12 rounded-lg" 
                      placeholder="Phone Number"
                    />
                    <Input 
                      name="quantity"
                      type="number"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="bg-[#2A2A2A] border-transparent text-white placeholder:text-gray-400 h-12 rounded-lg" 
                      placeholder="Quantity"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="bg-[#2A2A2A] border-transparent text-white placeholder:text-gray-400 h-12 rounded-lg" 
                      placeholder="Size Or Placement"
                      required
                    />
                    <div className="relative">
                      <select 
                        name="patchType"
                        value={formData.patchType}
                        onChange={handleInputChange}
                        className="w-full bg-[#2A2A2A] text-white h-12 rounded-lg px-3 text-sm border-transparent focus:border-brand-orange appearance-none cursor-pointer"
                      >
                        <option>Embroidered Patches</option>
                        <option>PVC Patches</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                      <select 
                        name="backing"
                        value={formData.backing}
                        onChange={handleInputChange}
                        className="w-full bg-[#2A2A2A] text-white h-12 rounded-lg px-3 text-sm border-transparent focus:border-brand-orange appearance-none cursor-pointer"
                      >
                        <option>Iron on</option>
                        <option>Velcro</option>
                        <option>Sew on</option>
                      </select>
                  </div>

                  <textarea 
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleInputChange}
                    className="w-full bg-[#2A2A2A] border-transparent text-white placeholder:text-gray-400 rounded-lg p-4 min-h-[100px] text-sm focus:border-brand-orange focus:outline-none resize-none"
                    placeholder="Instructions (Optional)"
                  />

                  {/* Drag & Drop Area */}
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                      isDragActive 
                        ? "border-brand-orange bg-brand-orange/10" 
                        : "border-gray-600 bg-[#222] hover:bg-[#2a2a2a]"
                    }`}
                  >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                        <Upload className="h-5 w-5" />
                      </div>
                      {selectedFile ? (
                        <p className="text-white font-medium">{selectedFile.name}</p>
                      ) : (
                        <>
                          <p className="text-white font-medium">Drag & Drop Files Here</p>
                          <p className="text-gray-400 text-xs">or click to select</p>
                        </>
                      )}
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting || isUploadingFile}
                    className="w-full bg-brand-orange hover:bg-brand-red text-white h-12 font-semibold uppercase tracking-wide"
                  >
                    {isUploadingFile ? "Uploading File..." : isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
            </div>
        </div>

      </div>
    </section>
  );
}
