import { Banner } from "@/components/Common/Banner";
import { LandingPageComponent } from "@/components/LandingPage";

export default function LandingPage() {
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
