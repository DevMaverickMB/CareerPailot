import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  ChevronDown,
  FileTextIcon,
  GraduationCapIcon,
  LayoutDashboard,
  PenBoxIcon,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();

  return (
    <header
  className="fixed top-0 w-full border-b border-border/40 bg-background/20 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-sm z-50"
>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="hover:text-[#51faaa]">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block ">Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="hover:bg-[#51faaa]">
                  <StarsIcon className="h-4 w-4 animate-wobble"/>
                  <span className="hidden md:block">AI Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                  <Link href={"/resume"} className="flex items-center gap-2 hover:text-[#51faaa]">
                    <FileTextIcon className="h-4 w-4" />
                    <span>AI Resume Maker</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={"/ai-cover-letter"}
                    className="flex items-center gap-2 hover:text-[#51faaa]"
                  >
                    <PenBoxIcon className="h-4 w-4" />
                    <span>AI Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/interview"} className="flex items-center gap-2 hover:text-[#51faaa]">
                    <GraduationCapIcon className="h-4 w-4" />
                    <span>AI Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                className="border-[#51faaa] hover:bg-[#51faaa] text-[#51faaa] hover:text-black transition-all duration-300"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
