"use server";

import { User } from "@/payload-types";
import config from "@/payload.config";
import { cookies, headers } from "next/headers";
import { getPayload, Payload } from "payload";

import axios from "axios";

export async function ame(): Promise<User | null> {
  const hs = await headers();
  const payload: Payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: hs });

  return user || null;
}

export type SignInProps = {
  email: string;
  password: string;
};

export async function asignin({ email, password }: SignInProps): Promise<User | null> {
  const result = await axios
    .request<
      | (User & {
          token: string;
        })
      | null
    >({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/login`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, password },
    })
    .then((res) => res.data);

  if (result?.token) {
    const cookieStore = await cookies();

    cookieStore.set("payload-token", result.token, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 8), // 8 hours
    });

    return result;
  } else {
    return null;
  }
}

export async function asignout(): Promise<boolean> {
  // await axios.request({
  //   method: "POST",
  //   url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
  //   headers: {
  //     "Content-Type": "application/text",
  //   },
  //   // withCredentials: true,
  //   data: {},
  // });

  // return !!result;

  const cookieStore = await cookies(); // // const cookieStore = await cookies();
  cookieStore.delete("payload-token"); // Deletes the HTTP-only cookie

  return true;
}
