import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  category: z.string().min(1, "Please select a patch type"),
  size: z.string().min(1, "Size is required"),
  quantity: z.string().min(1, "Quantity is required"),
  file: z.any().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;