// "use server";
//
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
//
// import { createClient } from "@/utils/supabase/server";
//
// export async function login(formData: FormData) {
//   const supabase = await createClient();
//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };
//
//   const { error } = await supabase.auth.signInWithPassword(data);
//
//   if (error) {
//     redirect("/error");
//   }
//
//   revalidatePath("/", "layout");
//   redirect("/account");
// }

// "use server";
//
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { createClient } from "@/utils/supabase/server";
//
// export async function login(formData: FormData) {
//   const supabase = await createClient();
//
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };
//
//   const { error, data: authData } =
//     await supabase.auth.signInWithPassword(data);
//
//   if (error) {
//     if (error.message === "Invalid login credentials") {
//       return { error: "You are not registered. Please sign up first." };
//     }
//     return { error: error.message };
//   }
//
//   if (!authData.user?.email_confirmed_at) {
//     return { error: "Please verify your email before logging in." };
//   }
//
//   revalidatePath("/", "layout");
//   redirect("/challenges");
// }

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
