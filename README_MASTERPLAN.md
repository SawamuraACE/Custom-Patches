
This is the right mindset. If we want industry-standard quality, we cannot let the AI guess. We must act as Architects and treat the AI agents (Claude/Gemini) as Junior Developers who need strict tickets.
Here is the Master Architecture Plan.
Save this text as README_MASTERPLAN.md in your project folder. You will feed this file (or specific sections of it) to your AI tools for each step.
📂 My Custom Patches - Master Architecture Plan
Role: Senior Architect
Project: My Custom Patches (Next.js Rebuild)
Status: Phase 1 (Initialization)
🚨 STRICT DEVELOPMENT RULES (For AI Agents)
No any types. STRICT TypeScript is required. Define interfaces for everything.
Next.js 15 Standards. Use app/ router. Use Server Components by default. Only use 'use client' when React hooks (state/effects) are absolutely necessary.
Performance First. No layout shifts (CLS). Optimize images. Lazy load videos.
Tailwind Best Practices. Use clsx and tailwind-merge for dynamic classes. Do not use inline styles.
Mobile First. All designs must work on iPhone SE width (320px) up to 4K screens.
🛠 Tech Stack
Framework: Next.js 15 (App Router)
Language: TypeScript
Styling: Tailwind CSS + tailwind-merge
Icons: Lucide React
Animation: Framer Motion
Forms: React Hook Form + Zod (Validation)
Backend Services:
Email: Web3Forms (Public API)
Storage: Cloudinary (Unsigned Uploads)
📅 Execution Roadmap (Step-by-Step)
Phase 1: Foundation & Configuration
Goal: Set up the project structure, fonts, colors, and utility helpers.
Step 1.1: Initialize Next.js project with strictly typed config.
Step 1.2: Configure tailwind.config.ts with Brand Colors (Orange/Red/Dark).
Step 1.3: Setup layout.tsx with Poppins font (Google Fonts optimization).
Step 1.4: Create src/lib/utils.ts (The cn helper for class merging).
Phase 2: Core UI Components (The Design System)
Goal: Build the reusable "Lego blocks" before building pages.
Step 2.1: Create Button.tsx. Needs variants: default (Gradient), outline, ghost.
Step 2.2: Create Modal.tsx (or Dialog).
Requirement: Must use backdrop-blur-md. Must handle "Click outside to close". Must be accessible (ESC key closes it).
Step 2.3: Create Input.tsx and Label.tsx that are compatible with React Hook Form.
Phase 3: The "Instant Quote" Engine (Complex Logic)
Goal: A secure, validating form that handles file uploads.
Step 3.1: Create useCloudinaryUpload hook.
Logic: Uploads file to Cloudinary unsigned preset -> Returns URL string.
Step 3.2: Create Zod Schema (schema.ts).
Validation: Name (min 2), Email (valid), Phone (optional), Size, Qty, FileUrl.
Step 3.3: Build QuoteForm.tsx.
Integrate react-dropzone for Drag & Drop.
On Submit: Upload File -> Get URL -> Send JSON to Web3Forms.
UX: Show "Uploading..." spinner.
Phase 4: The Hero & Video Reveal (Animation)
Goal: The 4-box grid. High performance.
Step 4.1: Create VideoRevealCard.tsx.
Pattern: The Facade Pattern.
State A: Show Static Icon/Image.
State B (Hover/Click): Fade in MP4 video (looping, muted).
Tech: Use Framer Motion for the fade transition.
Step 4.2: Build HeroSection.tsx.
Left side: H1 Text + CTA Button (Trigger Modal).
Right side: Grid of 4 VideoRevealCards.
Phase 5: Assembly & Polish
Step 5.1: Navbar.tsx (Sticky, Glassmorphism effect).
Step 5.2: Footer.tsx (Static links).
Step 5.3: Assemble page.tsx.
🚀 INSTRUCTIONS FOR YOU (THE USER)
Here is how we are going to build this. Run these steps one by one.
STEP 1: INITIAL SETUP (Run this now)
Prompt for your AI Agent:
code
Text
@Context: Reference the 'README_MASTERPLAN.md'.
@Task: Execute Phase 1 (Foundation & Configuration).

1. Verify folder structure: /src/components/ui, /src/lib, /src/assets.
2. Update 'tailwind.config.ts':
   - Add colors: orange: #FF4D15, red: #D9280B, dark: #1A1A1A.
   - Add backgroundImage: 'brand-gradient': 'linear-gradient(90deg, #FF4D15 0%, #D9280B 100%)'.
3. Update 'src/app/layout.tsx':
   - Import 'Poppins' from next/font/google. Variable: --font-poppins.
   - Apply to body.
4. Create 'src/lib/utils.ts':
   - Export the 'cn' function using clsx and tailwind-merge.

Generate the code for these 3 files.
My Note to You (Senior Dev):
Copy the text above inside "Prompt for your AI Agent" and paste it into your tool.
Do not move to Step 2 until you show me the output of Step 1. I want to check if the AI correctly set up the font variables and Tailwind colors, otherwise, the whole design will be broken later.
Waiting for your confirmation of Step 1 completion.