import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE, AUTH_COOKIE_VALUE, MAGIC_CODE } from "@/app/lib/auth";

export async function POST(req: Request) {
    const { code } = await req.json().catch(() => ({ code: ""}));

    console.log("Magic code from env:", process.env.MAGIC_CODE);

    if (code !== MAGIC_CODE) {
        return NextResponse.json({ok: false, error: "Invalid code, please try again!"}, {status: 401});
    }
    // set a simple session cookie
    (await cookies()).set({
        name: AUTH_COOKIE,
        value: AUTH_COOKIE_VALUE, 
        httpOnly: true,
        sameSite: "lax",
        secure: true, 
        path: "/",
    });

    return NextResponse.json({ ok: true });
}
