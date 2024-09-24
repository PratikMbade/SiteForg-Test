'use client'
import { ThemeProvider } from '@/providers/theme-provider'
import React from 'react'



export default function Provider({children}:{children:React.ReactNode} ) {
  return (
    
    <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
    >
        {children}
    </ThemeProvider>
  )
}