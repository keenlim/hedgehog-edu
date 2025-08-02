'use client';

import { useState, useEffect } from 'react';
import { CalculatorForm } from "@/components/CalculatorForm";
import { Banner } from "@/components/Common/Banner";
import { Footer } from "@/components/Common/Footer";
import { useCalculator } from '@/hooks/useCalculator';
import { CalculatorResultDesktop } from '../CalculatorResult';
import { ResultsExplain } from '../ResultsExplain';

export default function CalculateApp() {
    // State variables for the calculator form
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
    const [isCalculationForm, setIsCalculationForm] = useState<boolean>(true);
    const [CPF_Monthly_Instalment, setCPF_Monthly_Instalment] = useState<number>(0);
    const [CPF_Total_Repayment_Amount, setCPF_Total_Repayment_Amount] = useState<number>(0);
    const [TFL_Monthly_Instalment, setTFL_Monthly_Instalment] = useState<number>(0);
    const [TFL_Total_Repayment_Amount, setTFL_Total_Repayment_Amount] = useState<number>(0);
    const [TFL_principal_amount, setTFL_principal_amount] = useState<number>(0);
    const [TFL_CASH_AMOUNT, setTFL_CASH_AMOUNT] = useState<number>(0);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [isCalculationForm]); // only on mount


    const handleCalculation = () => {
        const [CPF_Monthly_Instalment, CPF_Total_Repayment_Amount, TFL_Monthly_Instalment, TFL_Total_Repayment_Amount, TFL_principal_amount, TOTAL_CASH_AMOUNT] = useCalculator(schoolFees, academicSystem, course, repaymentPeriod, interestRates, studyLength, repaymentPlans, repaymentAmount);
        console.log("Final Calculation")
        console.log(CPF_Monthly_Instalment, CPF_Total_Repayment_Amount, TFL_Monthly_Instalment, TFL_Total_Repayment_Amount);
        setCPF_Monthly_Instalment(CPF_Monthly_Instalment);
        setCPF_Total_Repayment_Amount(CPF_Total_Repayment_Amount);
        setTFL_Monthly_Instalment(TFL_Monthly_Instalment);
        setTFL_Total_Repayment_Amount(TFL_Total_Repayment_Amount);
        setTFL_principal_amount(TFL_principal_amount);
        setTFL_CASH_AMOUNT(TOTAL_CASH_AMOUNT);
        setIsCalculationForm(false);
    }

    return (
        <>
        {isCalculationForm ? (
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
            <Footer handleCalculation={handleCalculation} 
                    isCalculationForm={isCalculationForm}/>
            </div>
        ): (
        <div>
            <Banner
                backRoute="/"
                backLabel = "Loan Comparison"
                subtitle = "results"
                title = "Education Loan Calculator">
                    <CalculatorResultDesktop 
                        cpfMonthlyInstalment={CPF_Monthly_Instalment}
                        cpfTotalRepaymentAmount={CPF_Total_Repayment_Amount}
                        tflMonthlyInstalment={TFL_Monthly_Instalment}
                        tflTotalRepaymentAmount={TFL_Total_Repayment_Amount}
                        tflPrincipalAmount={TFL_principal_amount}
                        tflCashAmount={TFL_CASH_AMOUNT}
                        cpfWithdrawalLimit={Number(withdrawalLimit)}
                        repaymentPlan={repaymentPlans}
                        course={course}
                        handleEdit={() => setIsCalculationForm(true)}/>
            </Banner>
            <ResultsExplain 
                cpfTotalRepaymentAmount={Number(CPF_Total_Repayment_Amount)}
                cpfWithdrawalLimit={Number(withdrawalLimit)}
                course={course}
                schoolFees={Number(schoolFees)}
                studyLength={Number(studyLength)}
                academicSystem={academicSystem}/>
            <Footer handleCalculation={handleCalculation} 
                    isCalculationForm={isCalculationForm}/>
        </div>)
    }
        </>
    );
}
