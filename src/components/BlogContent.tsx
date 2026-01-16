"use client";

import { BlogPost } from "@/types/blog";

interface BlogContentProps {
  content: string;
  post: BlogPost;
}

export function BlogContent({ content, post }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <style jsx global>{`
        .blog-content {
          color: #374151;
          line-height: 1.8;
        }

        .blog-content h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #FF4D15;
          padding-bottom: 0.5rem;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        .blog-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .blog-content p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.8;
        }

        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
        }

        .blog-content strong {
          color: #1a1a1a;
          font-weight: 600;
        }

        .blog-content a {
          color: #FF4D15;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .blog-content a:hover {
          color: #E63D00;
        }

        .blog-content blockquote {
          border-left: 4px solid #FF4D15;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #4B5563;
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
        }

        .blog-content th {
          background-color: #1a1a1a;
          color: white;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
        }

        .blog-content td {
          border: 1px solid #E5E7EB;
          padding: 0.75rem;
        }

        .blog-content tr:nth-child(even) {
          background-color: #F9FAFB;
        }

        .blog-content .cta-box {
          background-color: #1a1a1a;
          color: white;
          padding: 2rem;
          border-radius: 1rem;
          margin: 3rem 0;
          text-align: center;
        }

        .blog-content .cta-box h3 {
          color: #FF4D15;
          margin-top: 0;
        }

        .blog-content .info-box {
          background-color: #F3F4F6;
          border-left: 4px solid #FF4D15;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin: 2rem 0;
        }

        .blog-content .highlight {
          background-color: #FEF3C7;
          padding: 0.125rem 0.5rem;
          border-radius: 0.25rem;
        }
      `}</style>
    </div>
  );
}
