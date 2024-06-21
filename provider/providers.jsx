"use client";
import { Inter } from "next/font/google";
import { useThemeStore } from "@/store";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { ReactToaster } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import { SonnToaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
const Providers = ({ children }) => {
  const { theme, radius, monoChrome } = useThemeStore();
  const location = usePathname();

  if (location === "/") {
    return (
      <body className={cn("dash-tail-app ", inter.className)}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <div className={cn("h-full  ")}>
            {children}
            <ReactToaster />
          </div>
          <Toaster />
          <SonnToaster />
        </ThemeProvider>
      </body>
    );
  }
  return (
    <body
      className={cn("dash-tail-app ", inter.className, "theme-" + theme)}
      style={{
        "--radius": `${radius}rem`,
      }}
    >
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <div className={cn("h-full  ")}>
          {children}
          <ReactToaster />
        </div>
        <Toaster />
        <SonnToaster />
      </ThemeProvider>
    </body>
  );
};

export default Providers;
