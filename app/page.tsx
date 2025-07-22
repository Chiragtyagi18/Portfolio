// // app/page.tsx
// 'use client'; // This directive is necessary because of client-side interactions, hooks, and components

// import Header from "@/components/Header"; // Adjust path if your Header component is elsewhere
// import FloatingShapes from "@/components/FloatingShapes";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowRight, Download, Github, Linkedin, Mail,
//   // Existing icons for general use
//   // Importing specific icons for technologies
//   Code, Type, Server, Database, HardDrive, Atom, Palette, LayoutGrid,
//   // New icons for updated skill categories
//   SquareCode, // For Frontend/General Code
//   Box, // For Backend/Express
//   GitFork, // For Git
//    // For AWS
//   Figma, // For Figma
//   Terminal, // For VSCode (generic dev tool)
// } from "lucide-react"; // Added new icons
// import Link from "next/link";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Assuming Shadcn UI tooltip

// import React, { useState } from 'react'; // Import useState for the copy functionality

// export default function HomePage() {
//   const emailAddress = "tyagichirag009@gmail.com";
//   const [copied, setCopied] = useState(false);

//   // Function to copy email to clipboard
//   const copyToClipboard = () => {
//     // Creating a temporary input element to copy text
//     const tempInput = document.createElement('input');
//     tempInput.value = emailAddress;
//     document.body.appendChild(tempInput);
//     tempInput.select(); // Select the text in the input
//     document.execCommand('copy'); // Execute copy command
//     document.body.removeChild(tempInput); // Remove the temporary input

//     setCopied(true); // Set copied state to true
//     // Reset copied state after 2 seconds
//     setTimeout(() => setCopied(false), 2000);
//   };

//   // Define skills with their corresponding Lucide React icons, categorized
//   const skillSet = {
//     frontend: [
//       { name: 'React', icon: Atom },
//       { name: 'TypeScript', icon: Type },
//       { name: 'Next.js', icon: LayoutGrid },
//       { name: 'Tailwind CSS', icon: Palette },
//       { name: 'Vue.js', icon: LayoutGrid }, // Using LayoutGrid or another available icon
//     ],
//     backend: [
//       { name: 'Node.js', icon: Server },
//       { name: 'Python', icon: Code },
//       { name: 'Express', icon: Box }, // Using Box for Express
//       { name: 'MongoDB', icon: HardDrive },
//       { name: 'PostgreSQL', icon: Database },
//     ],
//     tools: [
//       { name: 'Git', icon: GitFork }, // Using GitFork for Git
//       // { name: 'Docker', icon: Cloud },
//       // { name: 'AWS', icon: CloudCog }, // Using CloudCog for AWS
//       { name: 'Figma', icon: Figma }, // Using Figma icon
//       { name: 'VSCode', icon: Terminal }, // Using Terminal for VSCode
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-background relative overflow-hidden">
//       <FloatingShapes />
//       {/* TooltipProvider wraps the entire content that might contain tooltips */}
//       <TooltipProvider>
//         <Header />

//         <main className="relative z-10 pt-24">
//           <div className="container mx-auto px-6 py-20">
//             <div className="max-w-4xl mx-auto text-center">
//               {/* Hero Content */}
//               <div className="space-y-8 animate-fade-in">
//                 <div className="space-y-4">
//                   <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
//                     Hi, I'm{" "}
//                     <span className="text-primary animate-pulse-slow">
//                       CHIRAG TYAGI
//                     </span>
//                   </h1>
//                   <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//                     Full Stack Developer passionate about creating beautiful, functional digital experiences
//                   </p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   {/* View My Work Button */}
//                   <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                     <Link href="/projects">
//                       View My Work
//                       <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                   </Button>

//                   {/* Download CV Button - assuming CV is in public folder */}
//                   <Button asChild variant="outline" size="lg" className="group hover:bg-accent hover:scale-105 transition-all duration-300">
//                     {/* Replace "/your-cv-name.pdf" with the actual path to your CV file in the public directory */}
//                     <a href="/ChiragResume.pdf" download="Chirag_Tyagi_CV.pdf">
//                       <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
//                       Download Resume
//                     </a>
//                   </Button>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex justify-center space-x-6 pt-8">
//                   {/* GitHub Link */}
//                   <a href="https://github.com/Chiragtyagi18" target="_blank" rel="noopener noreferrer">
//                     <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-accent transition-all duration-200">
//                       <Github className="h-5 w-5" />
//                     </Button>
//                   </a>

//                   {/* LinkedIn Link */}
//                   <a href="https://www.linkedin.com/in/chirag-tyagi-a7202b2a4/" target="_blank" rel="noopener noreferrer">
//                     <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-accent transition-all duration-200">
//                       <Linkedin className="h-5 w-5" />
//                     </Button>
//                   </a>

//                   {/* Mail with Tooltip and Copy functionality */}
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       {/* The mailto link is still present for direct click, but hover shows copy option */}
//                       <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
//                         <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-accent transition-all duration-200">
//                           <Mail className="h-5 w-5" />
//                         </Button>
//                       </a>
//                     </TooltipTrigger>
//                     {/* Content shown inside the tooltip on hover */}
//                     <TooltipContent className="bg-popover text-popover-foreground p-2 rounded-md shadow-lg text-sm">
//                       <div className="flex flex-col items-center">
//                         <span>{emailAddress}</span>
//                         <button
//                           onClick={copyToClipboard}
//                           className="mt-2 px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
//                         >
//                           {copied ? 'Copied!' : 'Copy Email'}
//                         </button>
//                       </div>
//                     </TooltipContent>
//                   </Tooltip>
//                 </div>
//               </div>

//               {/* Skill Set Section */}
//               <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
//                 <h2 className="text-2xl font-semibold mb-8 text-foreground">My Skill Set</h2>

//                 {/* Main grid for Frontend, Backend, and Tools columns */}
//                 {/* Changed text-left to text-center and items-start to items-center for column content */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"> {/* Changed text-left to text-center */}
//                   {/* Frontend Skills Column */}
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4 text-foreground-muted text-center">Frontend</h3> {/* Changed to text-center */}
//                     <div className="flex flex-col gap-4 items-center"> {/* Changed items-start to items-center */}
//                       {skillSet.frontend.map((tech, index) => {
//                         const Icon = tech.icon;
//                         return (
//                           <div
//                             key={tech.name}
//                             className="flex items-center px-4 py-2 bg-accent/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-200 cursor-default text-accent-foreground min-w-[150px]"
//                             style={{ animationDelay: `${index * 0.1}s` }}
//                           >
//                             {Icon && <Icon className="h-4 w-4 mr-2" />}
//                             {tech.name}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Backend Skills Column */}
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4 text-foreground-muted text-center">Backend</h3> {/* Changed to text-center */}
//                     <div className="flex flex-col gap-4 items-center"> {/* Changed items-start to items-center */}
//                       {skillSet.backend.map((tech, index) => {
//                         const Icon = tech.icon;
//                         return (
//                           <div
//                             key={tech.name}
//                             className="flex items-center px-4 py-2 bg-accent/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-200 cursor-default text-accent-foreground min-w-[150px]"
//                             style={{ animationDelay: `${index * 0.1}s` }}
//                           >
//                             {Icon && <Icon className="h-4 w-4 mr-2" />}
//                             {tech.name}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Tools Skills Column */}
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4 text-foreground-muted text-center">Tools</h3> {/* Changed to text-center */}
//                     <div className="flex flex-col gap-4 items-center"> {/* Changed items-start to items-center */}
//                       {skillSet.tools.map((tech, index) => {
//                         const Icon = tech.icon;
//                         return (
//                           <div
//                             key={tech.name}
//                             className="flex items-center px-4 py-2 bg-accent/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-200 cursor-default text-accent-foreground min-w-[150px]"
//                             style={{ animationDelay: `${index * 0.1}s` }}
//                           >
//                             {Icon && <Icon className="h-4 w-4 mr-2" />}
//                             {tech.name}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Wave */}
//           <div className="absolute bottom-0 left-0 right-0">
//             <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-accent/20">
//               <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
//             </svg>
//           </div>
//         </main>

//         {/* Footer Section */}
//         <footer className="bg-background border-t border-border py-8 text-center text-muted-foreground relative z-10">
//           <div className="container mx-auto px-6">
//             <p className="text-sm">
//               &copy; {new Date().getFullYear()} Chirag Tyagi. All rights reserved.
//             </p>
//             <div className="flex justify-center space-x-4 mt-4">
//               {/* <p className="hover:text-primary transition-colors text-sm">
//                 Privacy Policy
//               </p>
//               <p className="hover:text-primary transition-colors text-sm">
//                 Terms of Service
//               </p> */}
//               {/* Add more footer links as needed */}
//             </div>
//           </div>
//         </footer>
//       </TooltipProvider> {/* Close TooltipProvider */}
//     </div>
//   );
// }
// app/page.tsx
'use client'; // This directive is necessary because of client-side interactions, hooks, and components

import Header from "@/components/Header"; // Adjust path if your Header component is elsewhere
import FloatingShapes from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Download, Github, Linkedin, Mail,
  // Existing icons for general use
  // Importing specific icons for technologies
  Code, Type, Server, Database, HardDrive, Atom, Palette, LayoutGrid,
  // New icons for updated skill categories
   // For Frontend/General Code
  Box, // For Backend/Express
  GitFork, // For Git
 // For AWS (re-added, but commented out in user's version)
  Figma, // For Figma
  Terminal, // For VSCode (generic dev tool)
} from "lucide-react"; // Added new icons
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Assuming Shadcn UI tooltip

import React, { useState} from 'react'; // Import useState and useEffect for scroll animation
import { cn } from "@/lib/utils"; // Import cn for conditional class joining
import { useScrollAnimation } from "@/hook/use-Scroll-Animation"; // Import the custom scroll animation hook

export default function HomePage() {
  const emailAddress = "tyagichirag009@gmail.com";
  const [copied, setCopied] = useState(false);

  // Hook for Hero Content animation
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Adjust margin to trigger slightly before it's fully in view
  });

  // Hook for Skill Set Section animation
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation({
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Adjust margin
  });

  // Function to copy email to clipboard
  const copyToClipboard = () => {
    // Creating a temporary input element to copy text
    const tempInput = document.createElement('input');
    tempInput.value = emailAddress;
    document.body.appendChild(tempInput);
    tempInput.select(); // Select the text in the input
    document.execCommand('copy'); // Execute copy command
    document.body.removeChild(tempInput); // Remove the temporary input

    setCopied(true); // Set copied state to true
    // Reset copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  // Define skills with their corresponding Lucide React icons, categorized
  const skillSet = {
    frontend: [
      { name: 'React', icon: Atom },
      { name: 'TypeScript', icon: Type },
      { name: 'Next.js', icon: LayoutGrid },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Vue.js', icon: LayoutGrid }, // Using LayoutGrid or another available icon
    ],
    backend: [
      { name: 'Node.js', icon: Server },
      { name: 'Python', icon: Code },
      { name: 'Express', icon: Box }, // Using Box for Express
      { name: 'MongoDB', icon: HardDrive },
      { name: 'PostgreSQL', icon: Database },
    ],
    tools: [
      { name: 'Git', icon: GitFork }, // Using GitFork for Git
      // { name: 'Docker', icon: Cloud }, // Kept commented as per user's provided code
      // { name: 'AWS', icon: CloudCog }, // Kept commented as per user's provided code
      { name: 'Figma', icon: Figma }, // Using Figma icon
      { name: 'VSCode', icon: Terminal }, // Using Terminal for VSCode
    ],
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingShapes />
      {/* TooltipProvider wraps the entire content that might contain tooltips */}
      <TooltipProvider>
        <Header />

        <main className="relative z-10 pt-24">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Hero Content - now with scroll-triggered animation */}
              <div
                ref={heroRef}
                className={cn(
                  "space-y-8 transition-all duration-700 ease-out",
                  heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-98"
                )}
              >
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Hi, I'm{" "}
                    <span className="text-primary animate-pulse-slow">
                      CHIRAG TYAGI
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Full Stack Developer passionate about creating beautiful, functional digital experiences
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* View My Work Button */}
                  <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Link href="/projects">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  {/* Download CV Button - assuming CV is in public folder */}
                  <Button asChild variant="outline" size="lg" className="group hover:bg-accent hover:scale-105 transition-all duration-300">
                    {/* Replace "/your-cv-name.pdf" with the actual path to your CV file in the public directory */}
                    <a href="/ChiragResume.pdf" download="Chirag_Tyagi_CV.pdf">
                      <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 pt-8">
                  {/* GitHub Link */}
                  <a href="https://github.com/Chiragtyagi18" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-accent transition-all duration-200">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>

                  {/* LinkedIn Link */}
                  <a href="https://www.linkedin.com/in/chirag-tyagi-a7202b2a4/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-accent transition-all duration-200">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>

                  {/* Mail with Tooltip and Copy functionality */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {/* The mailto link is still present for direct click, but hover shows copy option */}
                      <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-accent transition-all duration-200">
                          <Mail className="h-5 w-5" />
                        </Button>
                      </a>
                    </TooltipTrigger>
                    {/* Content shown inside the tooltip on hover */}
                    <TooltipContent className="bg-popover text-popover-foreground p-2 rounded-md shadow-lg text-sm">
                      <div className="flex flex-col items-center">
                        <span>{emailAddress}</span>
                        <button
                          onClick={copyToClipboard}
                          className="mt-2 px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                        >
                          {copied ? 'Copied!' : 'Copy Email'}
                        </button>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Skill Set Section - now with scroll-triggered animation */}
              <div
                ref={skillsRef}
                className={cn(
                  "mt-20 transition-all duration-700 ease-out",
                  skillsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-98"
                )}
              >
                <h2 className="text-2xl font-semibold mb-8 text-foreground">My Skill Set</h2>

                {/* Main grid for Frontend, Backend, and Tools columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {/* Frontend Skills Column */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground-muted text-center">Frontend</h3>
                    <div className="flex flex-col gap-4 items-center">
                      {skillSet.frontend.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tech.name}
                            className="flex items-center px-4 py-2 bg-accent/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-200 cursor-default text-accent-foreground min-w-[150px]"
                            style={{ animationDelay: `${index * 0.1}s` }} // Staggered delay for individual skills
                          >
                            {Icon && <Icon className="h-4 w-4 mr-2" />}
                            {tech.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Backend Skills Column */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground-muted text-center">Backend</h3>
                    <div className="flex flex-col gap-4 items-center">
                      {skillSet.backend.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tech.name}
                            className="flex items-center px-4 py-2 bg-accent/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-200 cursor-default text-accent-foreground min-w-[150px]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {Icon && <Icon className="h-4 w-4 mr-2" />}
                            {tech.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tools Skills Column */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground-muted text-center">Tools</h3>
                    <div className="flex flex-col gap-4 items-center">
                      {skillSet.tools.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tech.name}
                            className="flex items-center px-4 py-2 bg-accent/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-200 cursor-default text-accent-foreground min-w-[150px]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {Icon && <Icon className="h-4 w-4 mr-2" />}
                            {tech.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-accent/20">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
            </svg>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="bg-background border-t border-border py-8 text-center text-muted-foreground relative z-10">
          <div className="container mx-auto px-6">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Chirag Tyagi. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* <p className="hover:text-primary transition-colors text-sm">
                Privacy Policy
              </p>
              <p className="hover:text-primary transition-colors text-sm">
                Terms of Service
              </p> */}
              {/* Add more footer links as needed */}
            </div>
          </div>
        </footer>
      </TooltipProvider> {/* Close TooltipProvider */}

      {/* Embedded CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

