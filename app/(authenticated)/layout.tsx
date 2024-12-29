import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto py-8">{children}</main>
    </div>
  );
}
