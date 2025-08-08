import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/app/lib/auth";

export async function POST() {
    const res = NextResponse.json({ ok: true });

    // mirror attributes that matter for deletion: path (and domain if you used one)
    res.cookies.set(AUTH_COOKIE, '', {
        httpOnly: true,          // optional for delete, but fine
        sameSite: 'lax',         // optional
        secure: true,            // optional
        path: '/',               // MUST match the original
        maxAge: 0,               // or expires: new Date(0)
    });

    return res;
}