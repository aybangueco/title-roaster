import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Title Roaster",
  description:
    "A website for constructive roasting of your capstone/thesis title.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <header className="flex justify-between md:justify-around items-center p-3">
            <h1 className="font-bold text-3xl">Title Roaster 🔥</h1>
            <ModeToggle />
          </header>
          {children}
          <footer className="p-3">
            <p className="text-center text-sm text-muted-foreground">
              Purely made for fun! If you do like this, please consider starring
              it on{" "}
              <a
                className="text-primary hover:underline"
                href="https://github.com/aybangueco/thesis-roaster"
                target="_blank"
              >
                Github
              </a>{" "}
              ^_^
            </p>
            <p className="text-center text-sm text-muted-foreground">
              © 2025{" "}
              <a
                className="text-primary hover:underline"
                href="https://github.com/aybangueco"
                target="_blank"
              >
                github.com/aybangueco
              </a>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
