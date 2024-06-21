import MainLayout from "./main-layout";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const layout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/");
  }
  return <MainLayout>{children}</MainLayout>;
};

export default layout;
