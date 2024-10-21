
import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoute } from '@/routes'
import { NextRequest } from 'next/server';

const {auth} = NextAuth(authConfig)


export default auth((req)=>{
    const isLoggedIn = !!req.auth;
    const {nextUrl} = req;
    console.log("ISLoggedIN",isLoggedIn)
    console.log("ROUTE:",req.nextUrl.pathname)

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute =  publicRoute.includes(nextUrl.pathname);
    const isAuthRotue = authRoutes.includes(nextUrl.pathname)

    if(isApiAuthRoute){
      return ;
    }

    if(isAuthRotue){
      if(isLoggedIn){
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl));
      }
      return ;
    }

    if(!isLoggedIn && !isPublicRoute){
      return Response.redirect(new URL("/login",nextUrl))
    }
    return ;
});


export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }