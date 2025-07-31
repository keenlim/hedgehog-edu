import { CalculatorForm } from "@/components/CalculatorForm";
import { Banner } from "@/components/Common/Banner";
import { Footer } from "@/components/Common/Footer";

export default function Calculate() {
  return (
    <div>
      <Banner
        backRoute="/"
        backLabel = "Loan Comparison"
        subtitle = "education financing"
        title = "Education Loan Calculator" />
      <CalculatorForm />
      <Footer />
    </div>
  );
}
