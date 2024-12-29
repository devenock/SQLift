import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          User Profile
        </div>
        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
          {user?.email}
        </h1>
        <p className="mt-2 text-gray-500">User ID: {user?.id}</p>
        <p className="mt-2 text-gray-500">
          Last Sign In: {new Date(user?.last_sign_in_at || "").toLocaleString()}
        </p>
      </div>
    </div>
  );
}
