'use client';

import { useState } from 'react';
import { CalculatorForm } from "@/components/CalculatorForm";
import { Banner } from "@/components/Common/Banner";
import { Footer } from "@/components/Common/Footer";
import { useCalculator } from '@/hooks/useCalculator';

export default function CalculateApp() {
    const [course, setCourse] = useState<'diploma' | 'degree'>('diploma');
    const [ns, setNS] = useState<'yes' | 'no'>('yes');
    const [schoolFees, setSchoolFees] = useState<string | number>(4200);
    const [academicSystem, setAcademicSystem] = useState<2 | 3>(2);
    const [studyLength, setStudyLength] = useState<string | number>(3);
    const [withdrawalLimit, setWithdrawalLimit] = useState<string | number>(10000);
    const [interestRates, setInterestRates] = useState<string | number>(4.20);
    const [repaymentPlans, setRepaymentPlans] = useState<string | null>('repaymentPeriod');
    const [repaymentPeriod, setRepaymentPeriod] = useState<string | number>(12);
    const [repaymentAmount, setRepaymentAmount] = useState<string | number>(100);

    const handleCalculation = () => {
        const [CPF_Monthly_Instalment, CPF_Total_Repayment_Amount, TFL_Monthly_Instalment, TFL_Total_Repayment_Amount] = useCalculator(schoolFees, academicSystem, course, repaymentPeriod, interestRates, studyLength);
        console.log("Final Calculation")
        console.log(CPF_Monthly_Instalment, CPF_Total_Repayment_Amount, TFL_Monthly_Instalment, TFL_Total_Repayment_Amount);
    }

    return (
        <div>
        <Banner
            backRoute="/"
            backLabel = "Loan Comparison"
            subtitle = "education financing"
            title = "Education Loan Calculator" />
        <CalculatorForm 
            course={course}
            handleCourse={setCourse}
            ns={ns}
            handleNS={setNS}
            schoolFees={schoolFees}
            handleSchoolFees={setSchoolFees}
            academicSystem={academicSystem}
            handleAcademicSystem={setAcademicSystem}
            studyLength={studyLength}
            handleStudyLength={setStudyLength}
            withdrawalLimit={withdrawalLimit}
            handleWithdrawalLimit={setWithdrawalLimit}
            repaymentPlans={repaymentPlans}
            handleRepaymentPlans={setRepaymentPlans}
            repaymentPeriod={repaymentPeriod}
            handleRepaymentPeriod={setRepaymentPeriod}
            repaymentAmount={repaymentAmount}
            handleRepaymentAmount={setRepaymentAmount}
            interestRates={interestRates}
            handleInterestRates={setInterestRates}
        />
        <Footer handleCalculation={handleCalculation}/>
        </div>
    );
}
