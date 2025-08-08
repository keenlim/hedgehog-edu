//middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { AUTH_COOKIE, AUTH_COOKIE_VALUE } from "@/app/lib/auth";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl; 
    const isLogin = pathname === "/login";

    const isPublicAsset =
        pathname.startsWith("/api/login") || // allow calling login
        pathname.startsWith("/api/logout");  // allow logout

    if (isPublicAsset) return NextResponse.next();

    const cookieVal = req.cookies.get(AUTH_COOKIE)?.value;
    const expected = AUTH_COOKIE_VALUE;
    const authed = !!expected && !!cookieVal && cookieVal === expected

    console.log('MW hit', req.nextUrl.pathname, {
        hasCookie: !!req.cookies.get(AUTH_COOKIE),
        hasExpected: !!AUTH_COOKIE_VALUE,
      })

    if (!authed && !isLogin) {
        // not authed and is not in login page, redirect to /login automatically 
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        if (pathname !== '/') {
            url.searchParams.set("redirect", pathname);
        }
        return NextResponse.redirect(url);
    }

    if (authed && isLogin) {
        // already authenticated, then go to the dashboard page
        const url = req.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();

}


export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
  };