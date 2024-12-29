import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import NewHeader from "@/components/NewHeader";
import NewFooter from "@/components/NewFooter";

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
      <NewHeader />
      <main className="flex-grow container mx-auto py-8">{children}</main>
      <NewFooter />
    </div>
  );
}
