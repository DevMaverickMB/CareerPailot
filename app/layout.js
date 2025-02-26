import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["Latin"] });

export const metadata = {
  title: "CareerPailot: AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            // defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />

            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* footer */}
            <footer className="bg-black bg-gradient-to-b from-black via-gray-900 to-black py-12 md:py-6">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-6">
                  {/* Social Media Links */}
                  <div className="flex space-x-6">
                    <a
                      href="https://www.linkedin.com/in/milind-bhushan-connect/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#0173b1] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.356c0-1.452-.52-2.448-1.82-2.448-1.003 0-1.598.674-1.86 1.32-.098.232-.122.554-.122.88v5.604h-3V8h2.99v1.434h.044c.416-.794 1.43-1.63 2.94-1.63 3.143 0 3.725 2.067 3.725 4.756V19z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/DevMaverickMB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.602-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.545 1.378.202 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  </div>

                  {/* Copyright Line */}
                  <div className="mx-auto max-w-[300px] text-gray-400 text-sm text-center">
                    <p>
                      © {new Date().getFullYear()} CareerPailot. All rights
                      reserved. Made with 💟 by DevMaverickMB
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
