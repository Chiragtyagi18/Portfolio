// app/projects/page.tsx
'use client'; // This file uses client-side interactivity (animations, hooks, components)

import React from 'react';
// import { useRouter } from 'next/navigation';
import { ExternalLink, Github } from "lucide-react"; // Import all necessary Lucide icons

// UI Components (assuming these are from shadcn/ui or similar)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Utility imports
import { cn } from "@/lib/utils"; // For conditional class joining

// Custom Hook
import { useScrollAnimation} from "@/hook/use-Scroll-Animation"; // Corrected import path for the hook

// Custom Components (assuming these paths are correct)
import Header from "@/components/Header";
import FloatingShapes from "@/components/FloatingShapes";
import RotatingCube from '@/components/rotatingcube'; // Import the RotatingCube component

// --- ProjectCard Component (Integrated directly into this file) ---
interface ProjectCardProps {
  title: string;
  description: string;
  image: string; // Expecting the URL directly
  demoUrl: string;
  codeUrl: string;
  technologies: string[];
  delay?: number; // Optional delay for staggered animation
}

const ProjectCard: React.FC<ProjectCardProps> = ({ // Explicitly define as React.FC
  title,
  description,
  image,
  demoUrl,
  codeUrl,
  technologies,
  delay = 0,
}: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Adjust rootMargin as needed for when animation triggers
  });

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 transform translate-y-8 transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms' // Apply staggered delay only when visible
      }}
    >
      <Card className="group overflow-hidden bg-portfolio-surface border-border/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative overflow-hidden">
          {/* Using standard <img> tag with Tailwind classes */}
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay for hover effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-portfolio-text-primary group-hover:text-portfolio-glow transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-portfolio-text-secondary">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-3 flex-1"> {/* flex-1 to push footer to bottom */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-portfolio-glow/10 text-portfolio-glow rounded-full border border-portfolio-glow/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex gap-3 w-full">
            <Button
              variant="default" // Assuming 'default' variant is defined in your button.tsx
              size="sm"
              className="flex-1"
              onClick={() => window.open(demoUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button
              variant="outline" // Assuming 'outline' variant is defined in your button.tsx
              size="sm"
              className="flex-1"
              onClick={() => window.open(codeUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

// --- ProjectsPage Component ---
const projectsData = [
  {
    title: "AI Image Generator",
    description: "A collaborative task management tool with drag-and-drop functionality and real-time updates.",
    image: "/ai_image.png", // Use direct path for <img> tag
    demoUrl: "https://ai-image-generate-tawny.vercel.app/",
    codeUrl: "https://github.com/Chiragtyagi18/ai_image_generate",
    technologies: ["React", "Open API", "Tailwind CSS", "Schadcn UI"]
  },
  {
    title: "3D Solar System Visualizer",
    description: "A social media analytics dashboard with real-time data visualization and user engagement metrics.",
    image: "/solar.png",
    demoUrl: "https://solar-system-mauve-omega.vercel.app/",
    codeUrl: "https://github.com/Chiragtyagi18/solar_system",
    technologies: ["React", "Threejs", "TailwindCSS "]
  },
  {
    title: "TODO List",
    description: "A TODO list with edit delete and local storage saving functionality.",
    image: "/todo.png", // Use direct path for <img> tag
    demoUrl: "https://to-do-context-eta.vercel.app/",
    codeUrl: "https://github.com/Chiragtyagi18/ToDoContext",
    technologies: ["React", "Tailwind CSS", "Local Storage"]
  },
  {
    title: "B2B Website",
    description: "A B2B website where user can upload their tender details.",
    image: "/wp.png", // Use direct path for <img> tag
    demoUrl: "https://web-page-lemon-alpha.vercel.app/",
    codeUrl: "https://github.com/Chiragtyagi18/web-page",
    technologies: ["Next", "Node", "Supabase", "Tailwind CSS"]
  },
   {
    title: "Cime Prediction Frontend Design",
    description: "A user friendly frontend design for crime prediction website.",
    image: "/crime.png", // Use direct path for <img> tag
    demoUrl: "https://crime-prediction-silk.vercel.app/",
    codeUrl: "https://github.com/username/finance-tracker",
    technologies: ["React", "Chart.js", "Local Storage", "Tailwind CSS"]
  },
  {
    title: "Poki API",
    description: "An Open api practise app to fetch and show deatils.",
    image: "/poki.png", // Use direct path for <img> tag
    demoUrl: "https://pokiapi-self.vercel.app/",
    codeUrl: "https://github.com/Chiragtyagi18/pokiapi",
    technologies: ["React", "Web Audio API", "Redux", "Tailwind CSS"]
  },
  // {
  //   title: "Learning Management System",
  //   description: "An educational platform with course creation, progress tracking, and interactive learning modules.",
  //   image: "/chirag.jpg", // Use direct path for <img> tag
  //   demoUrl: "https://demo.example.com",
  //   codeUrl: "https://github.com/username/lms-platform",
  //   technologies: ["React", "TypeScript", "Supabase", "Video.js"]
  // },{
  //   title: "E-Commerce Platform",
  //   description: "A full-featured online shopping platform with cart management, user authentication, and payment integration.",
  //   image: "/chirag.jpg", // Use direct path for <img> tag
  //   demoUrl: "https://demo.example.com",
  //   codeUrl: "https://github.com/username/ecommerce",
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"]
  // },
];

const ProjectsPage = () => {
  // const router = useRouter();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px'
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* FloatingShapes as a background component - placed at the top level */}
      <FloatingShapes />
      {/* Header as your main navigation header - ensure it's fixed and has a z-index */}
      <Header />

      {/* Main content area, with padding-top to prevent overlap with a fixed header */}
      <main className="relative z-10 pt-24 md:pt-32 lg:pt-40"> {/* Adjusted pt for better spacing */}
        <div className="container mx-auto px-4">

          {/* Header Section with Animation and Cube */}
          <div
            ref={headerRef}
            className={cn(
              "text-center mb-16 transition-all duration-800 ease-out",
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
              // Added gap-y-8 for vertical spacing on small screens
              // Added md:gap-x-[50px] for 50px horizontal spacing on medium screens and up
              "flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-[50px]"
            )}
          >
            <h1 className="text-4xl font-extrabold text-portfolio-text-primary sm:text-5xl lg:text-6xl mb-0"> {/* Removed mb-4 from h1 */}
              My Projects
            </h1>
            {/* Rotating Cube next to the heading */}
            {/* Adjusted size for a smaller, inline appearance */}
            <RotatingCube className="w-20 h-20 md:w-24 md:h-24" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {projectsData.map((project, index) => ( // Use projectsData here
              <ProjectCard
                key={index}
                {...project}
                delay={index * 150} // Staggered animation delay
              />
            ))}
          </div>
        </div>
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
      </main>
    </div>

  );

};

export default ProjectsPage;
