
import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoute } from '@/routes'
import { NextRequest } from 'next/server';

const {auth} = NextAuth(authConfig)


export default auth((req)=>{
    const isLoggedIn = !!req.auth;
    const {nextUrl} = req;
   
    return ;
});

