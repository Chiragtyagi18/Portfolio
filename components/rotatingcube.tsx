// components/RotatingCube.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils'; // Import cn utility for combining classNames
import { useTheme } from '@/components/ThemeProvider'; // Import useTheme hook from your custom provider

// Import images for DARK theme
import htmlDark from '@/public/html.png';
import cssDark from '@/public/css.png';
import jsDark from '@/public/js.png';
import reactDark from '@/public/react.png';
import mgDark from '@/public/mg.png'; // Assuming 'mg.png' is for MongoDB or similar
import nodeDark from '@/public/node.png';

// Import images for LIGHT theme (assuming 'b' suffix means light version)
import htmlLight from '@/public/htmlb.png';
import cssLight from '@/public/cssb.png';
import jsLight from '@/public/jsb.png';
import reactLight from '@/public/reactb.png';
import mgLight from '@/public/mgb.png'; // Assuming 'mgb.png' is for MongoDB or similar
import nodeLight from '@/public/nodeb.png';


// Define image sets for each theme
const darkThemeImages: StaticImageData[] = [
  htmlDark, cssDark, jsDark, reactDark, mgDark, nodeDark
];

const lightThemeImages: StaticImageData[] = [
  htmlLight, cssLight, jsLight, reactLight, mgLight, nodeLight
];

// Define the props interface for RotatingCube
interface RotatingCubeProps {
  className?: string; // Allows external Tailwind CSS classes to be passed for sizing/positioning
}

const RotatingCube: React.FC<RotatingCubeProps> = ({ className }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [currentTranslateZ, setCurrentTranslateZ] = useState(0);
  // Use the 'theme' property directly from your custom useTheme hook
  const { theme } = useTheme();

  // Determine which set of images to use based on the current 'theme' state
  const imagesToDisplay = theme === 'dark' ? darkThemeImages : lightThemeImages;

  useEffect(() => {
    // Debugging: Log the current theme whenever it changes
    console.log('RotatingCube Debug: Current theme:', theme);
    // console.log('RotatingCube Debug: Resolved theme (not used in this custom provider):', resolvedTheme); // This will be undefined

    const calculateTranslateZ = () => {
      if (sceneRef.current) {
        const actualCubeSize = sceneRef.current.offsetWidth;
        setCurrentTranslateZ(actualCubeSize / 2);
      }
    };

    calculateTranslateZ();
    window.addEventListener('resize', calculateTranslateZ);

    return () => {
      window.removeEventListener('resize', calculateTranslateZ);
    };
  }, [theme]); // Depend on 'theme' to re-run effect when theme changes

  return (
    <div ref={sceneRef} className={cn("scene", className)}>
      <div className="cube">
        {imagesToDisplay.map((img, index) => (
          <div className={`face face-${index + 1}`} key={index}>
            <Image
              src={img}
              alt={`Face ${index + 1} - ${theme} theme`} // Update alt text for debugging
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* Embedded CSS for the 3D effect, animations, and responsiveness */}
      <style jsx>{`
        .scene {
          perspective: 1000px;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin 10s infinite linear;
        }

        .scene:hover .cube {
          animation-play-state: paused;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          margin: 0;
          padding: 0;
          border: none;
          overflow: hidden;
        }

        .face-1 { transform: rotateY(0deg) translateZ(${currentTranslateZ}px); }
        .face-2 { transform: rotateY(90deg) translateZ(${currentTranslateZ}px); }
        .face-3 { transform: rotateY(180deg) translateZ(${currentTranslateZ}px); }
        .face-4 { transform: rotateY(-90deg) translateZ(${currentTranslateZ}px); }
        .face-5 { transform: rotateX(90deg) translateZ(${currentTranslateZ}px); }
        .face-6 { transform: rotateX(-90deg) translateZ(${currentTranslateZ}px); }

        @keyframes spin {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RotatingCube;
