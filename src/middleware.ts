import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const url = req.nextUrl.clone();
    const { pathname } = req.nextUrl;

    if (!req.nextauth.token) {
      url.pathname = "/login"; 
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, 
    },
    pages: {
      signIn: "/login", 
    },
  }
);

export const config = {
  matcher: ["/account/:path*", "/admin/:path*"], 
};
