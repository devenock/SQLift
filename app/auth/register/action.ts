// "use server";
//
// import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";
//
// export async function signup(formData: FormData) {
//   const supabase = await createClient();
//
//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };
//
//   const { error } = await supabase.auth.signUp(data);
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
// export async function signup(prevState: any, formData: FormData) {
//   const supabase = await createClient();
//
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   const confirmPassword = formData.get("confirmPassword") as string;
//
//   if (!email || !password || !confirmPassword) {
//     return { error: "All fields are required" };
//   }
//
//   if (password !== confirmPassword) {
//     return { error: "Passwords do not match" };
//   }
//
//   const { error, data } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
//     },
//   });
//
//   if (error) {
//     if (error.message.includes("User already registered")) {
//       return {
//         error: "This email is already registered. Please log in instead.",
//       };
//     }
//     return { error: error.message };
//   }
//
//   revalidatePath("/", "layout");
//   redirect("/auth/verify-email");
// }

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!email || !password || !confirmPassword) {
    return { error: "All fields are required" };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    if (error.message.includes("User already registered")) {
      return {
        error: "This email is already registered. Please log in instead.",
      };
    }
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/auth/verify-email");
}
