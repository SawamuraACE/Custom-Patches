import { useState } from "react";

// 👇 NOW USING ENV VARIABLES
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;

export function useCloudinary() {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File) => {
    // Safety Check
    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      console.error("Cloudinary keys are missing in .env.local");
      setError("Configuration Error");
      return null;
    }

    setUploading(true);
    setError(null);
    setUrl(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Upload failed");
      }

      const data = await response.json();
      setUrl(data.secure_url);
      return data.secure_url;
      
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed";
      setError(message);
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { upload, uploading, url, error };
}