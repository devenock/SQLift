"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const { error, data: authData } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.message === "Invalid login credentials") {
      return { error: "You are not registered. Please sign up first." };
    }
    return { error: error.message };
  }

  if (!authData.user?.email_confirmed_at) {
    return { error: "Please verify your email before logging in." };
  }

  revalidatePath("/", "layout");
  redirect("/challenges");
}
