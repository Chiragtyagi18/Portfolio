
// app/layout.tsx
import './globals.css'; // Your global styles
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider'; // Import the ThemeProvider

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Changed default theme to 'dark'
          // Removed enableSystem to prevent system preference from overriding initial theme
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
