import LoginUI from "@/module/auth/components/login-ui";
import { requireUnAuth } from "@/module/auth/lib/auth-utils";


export default async function LoginPage() {
  await requireUnAuth();
  return (
    <div>
      <LoginUI />
    </div>
  );
}
