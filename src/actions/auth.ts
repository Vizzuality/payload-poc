'use server';

import { User } from "@/payload-types";
import config from "@payload-config";
import { cookies, headers } from "next/headers";
import { getPayload, Payload } from "payload";

export async function me(): Promise<User | null> {
  const hs = await headers();
  const payload: Payload = await getPayload({ config: await config });
  const { user } = await payload.auth({ headers: hs });

  return user || null;
}


export async function signin({ email, password }: {
  email: string;
  password: string;
}): Promise<{
  success: boolean;
  error?: string;
}> {
  const payload = await getPayload({ config });
  try {
    const result = await payload.login({
      collection: "users",
      data: { email, password },
    });

    if (result.token){
      const cookieStore = await cookies();
      cookieStore.set("payload-token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      })

      return { success: true }
    } else {
      return { success: false, error: "Invalid email or password" }
    }
  } catch (error) {
    console.error("Login error", error);
    return { success: false, error: "An error occurred"}
  }
}

export async function signout(): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("payload-token"); // Deletes the HTTP-only cookie

    return { success: true }; // Indicate success
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false, error: "An error occurred during logout" };
  }
}