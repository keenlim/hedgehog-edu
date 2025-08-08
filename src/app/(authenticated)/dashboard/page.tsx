import { Banner } from "@/components/Common/Banner";
import { LandingPageComponent } from "@/components/LandingPage";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AUTH_COOKIE } from '@/app/lib/auth'

export default async function LandingPage() {
  const has = await (await cookies()).has(AUTH_COOKIE)
  if (!has) redirect('/login?redirect=/dashboard')

  return (
    <div>
      <Banner
        backRoute="/"
        subtitle="education financing"
        title="CPF Education Loan vs MOE Tuition Fee Loan Comparison"
      />
      <LandingPageComponent />
    </div>
  );
}
