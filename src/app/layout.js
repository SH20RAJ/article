import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_compo/themeprovider";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Shade Article || Read Write Enjoy",
  description: "Know More About the World, Write More About the World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        suppressHydrationWarning={true}
      >
        <body className={poppins.className}>
          <NextTopLoader />
          {children}
        </body>
      </ThemeProvider>
      <Toaster />
    </html>
  );
}
