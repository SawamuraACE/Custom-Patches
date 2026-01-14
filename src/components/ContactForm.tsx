"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import { Loader2, CheckCircle } from "lucide-react";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Contact Form: ${data.firstName} ${data.lastName}`,
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
        <CheckCircle className="w-16 h-16 text-green-500" />
        <h3 className="text-2xl font-bold text-brand-dark">Message Sent!</h3>
        <p className="text-gray-500">We'll get back to you within 24 hours.</p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="mt-4"
        >
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 py-4">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-brand-dark uppercase">
            First Name
          </label>
          <input
            {...register("firstName", { required: true })}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent placeholder:text-gray-400"
            placeholder="John"
          />
          {errors.firstName && (
            <span className="text-red-500 text-xs">Required</span>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-brand-dark uppercase">
            Last Name
          </label>
          <input
            {...register("lastName", { required: true })}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent placeholder:text-gray-400"
            placeholder="Doe"
          />
          {errors.lastName && (
            <span className="text-red-500 text-xs">Required</span>
          )}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-brand-dark uppercase">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent placeholder:text-gray-400"
            placeholder="john@example.com"
          />
          {errors.email && <span className="text-red-500 text-xs">Required</span>}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-brand-dark uppercase">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent placeholder:text-gray-400"
            placeholder="+1 012 3456 789"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-brand-dark uppercase">
          Message
        </label>
        <textarea
          {...register("message", { required: true })}
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent placeholder:text-gray-400 min-h-[80px] resize-none"
          placeholder="Write your message.."
        />
        {errors.message && (
          <span className="text-red-500 text-xs">Required</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-brand-dark hover:bg-brand-orange text-white px-8 py-4 h-auto text-sm font-bold uppercase rounded-md shadow-lg disabled:opacity-75 flex items-center gap-2 transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-4 w-4" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}
