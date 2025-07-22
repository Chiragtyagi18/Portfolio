// app/about/page.tsx
'use client'; // This component uses client-side interactivity (animations, potentially Header, FloatingShapes)

import Header from "@/components/Header"; // Make sure this path is correct
import FloatingShapes from "@/components/FloatingShapes"; // Make sure this path is correct
import { Badge } from "@/components/ui/badge"; // Make sure this path is correct
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Make sure this path is correct
import { Code, Palette, Zap, Heart } from "lucide-react"; 
// import Image from "next/image";
export default function AboutPage() { // Changed export name from 'About' to 'default function AboutPage()'
  const skills = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    backend: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'Figma', 'VSCode']
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      
      <FloatingShapes />
      <Header />

      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{" "}
                <span className="text-primary">
                  Me
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate developer with a love for creating innovative solutions and beautiful user experiences.
              </p>
            </div>

            {/* About Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hi My name is Chirag Tyagi, a 
                 motivated and detail oriented web Developer with a strong
                  foundation.
                  Proficient in building responsive and user-friendly web interfaces with a
                  focus on performance and accessibility.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                 Adept at using Git for version control and comfortable working in collaborative, Agile environments.Passionate about learning new technologies and eager to contribute to
                 innovative projects while continuously improving skills.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {/* Use Next.js Image component for optimization if possible */}
                <img
                  src="chirag.jpg"
                  alt="Profile"
                  className="w-full h-80 object-cover rounded-lg shadow-lg border border-border"
                />
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Code, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
                { icon: Palette, title: "Design Focus", desc: "Crafting beautiful user interfaces" },
                { icon: Zap, title: "Performance", desc: "Optimizing for speed and efficiency" },
                { icon: Heart, title: "User-Centric", desc: "Putting users at the heart of development" }
              ].map((value, index) => (
                <Card key={value.title} className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-border" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <CardHeader>
                    <value.icon className="h-8 w-8 mx-auto text-primary group-hover:scale-110 transition-transform duration-200" />
                    <CardTitle className="text-lg text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '1s' }}>
              <h2 className="text-2xl font-semibold text-center text-foreground">Skills & Technologies</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-accent transition-colors duration-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-accent transition-colors duration-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-accent transition-colors duration-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
}



