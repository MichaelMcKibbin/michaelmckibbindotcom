// TypeScript
    // `michaelmckibbin-portfolio/components/ThemeProvider.tsx`
    "use client";

    import { ThemeProvider as NextThemesProvider } from "next-themes";
    import React from "react";

    type Props = {
      children: React.ReactNode;
    };

    export default function ThemeProvider({ children }: Props) {
      return (
        <NextThemesProvider
          attribute="class"       // applies `dark` to `<html>`
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      );
    }