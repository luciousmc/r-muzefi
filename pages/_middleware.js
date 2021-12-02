import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // Does the user have a token (logged in)
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // If user has token (logged in) and tries to acesss the '/login' page, redirect to main
  if (token && pathname === '/login') {
    return NextResponse.redirect('/');
  }

  // Allow the request if use has token or it's a request for next auth session
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  // If user does not have token (not logged in) redirect to login page
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}
