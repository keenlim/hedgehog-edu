import { LoginPage } from "@/components/LoginPage";
import { Suspense } from "react";


export default function Login() {

  return (
    <Suspense>
      <LoginPage />
    </Suspense>
    
  );
}