import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const checkUserRole = (userRole: string, requiredRole: string) => {
  return userRole === requiredRole;
};

export function middleware(request: NextRequest) {
  const userRole = request.cookies.get('userRole')?.value; 

  const protectedPaths = ['/admin', '/dashboard'];


  if (protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if (!userRole || !checkUserRole(userRole, 'admin')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};
