"use client";
import HeaderSquareWeb2 from "@/components/global/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <HeaderSquareWeb2
        title={""}
        navigationData={[]}
        loginPath={"login"}
        signupPath={"signup"}
      />

      {children}
    </ThemeProvider>
  );
}
