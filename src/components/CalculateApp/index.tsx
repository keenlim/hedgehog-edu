'use client';

import { useState, useEffect } from 'react';
import { CalculatorForm } from "@/components/CalculatorForm";
import { Banner } from "@/components/Common/Banner";
import { Footer } from "@/components/Common/Footer";
import { useCalculator } from '@/hooks/useCalculator';
import { CalculatorResultDesktop } from '../CalculatorResult';
import { ResultsExplain } from '../ResultsExplain';
import { useForm } from '@mantine/form';

export default function CalculateApp() {
    // Define the form 
    const form = useForm({
        initialValues: {
            course: 'diploma' as 'diploma' | 'degree',
            ns: 'yes' as 'yes' | 'no',
            schoolFees: '' as string | number, 
            academicSystem: 2 as 2 | 3,
            studyLength: '' as string | number,
            withdrawalLimit: '' as string | number,
            interestRates: '' as string | number,
            repaymentPlans: 'repaymentPeriod' as string | null,
            repaymentPeriod: '' as string | number,
            repaymentAmount: '' as string | number,
        },
        validate: {
            schoolFees: (v) => (v === '' || +v <= 0 ? 'Enter a valid school fees amount': null),
            studyLength: (v) => (v === '' || +v < 1 ? 'At least 1 year of study': null),
            withdrawalLimit: (v) => (v === '' || +v < 0 ? 'Withdrawal limit must be a positive number': null),
            interestRates: (v) => (v === '' || +v < 0 || +v > 100 ? 'Interests rate must be between 0% and 100 %' : null),
            repaymentPlans: (v) => (v === null ? 'Select a plan' : null),
            repaymentPeriod: (v, vals) => (
                vals.repaymentPlans === 'repaymentPeriod' && (v === '' || +v < 1 ? 'At least 1 year' : null)
            ),
            repaymentAmount: (v, vals) => (
                vals.repaymentPlans === 'repaymentAmount' && (v === '' || +v < 1 ? 'At least $1' : null)
            )
        },
    });
    
    // States to store the results
    const [CPF_Monthly_Instalment, setCPF_Monthly_Instalment] = useState<number>(0);
    const [CPF_Total_Repayment_Amount, setCPF_Total_Repayment_Amount] = useState<number>(0);
    const [TFL_Monthly_Instalment, setTFL_Monthly_Instalment] = useState<number>(0);
    const [TFL_Total_Repayment_Amount, setTFL_Total_Repayment_Amount] = useState<number>(0);
    const [TFL_principal_amount, setTFL_principal_amount] = useState<number>(0);
    const [TFL_CASH_AMOUNT, setTFL_CASH_AMOUNT] = useState<number>(0);

    // Local state to toggle between the Results Page and the Calculation Form
    const [isCalculationForm, setIsCalculationForm] = useState<boolean>(true);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [isCalculationForm]); // only on mount


    const handleCalculation = () => {
        // Validate the form values 
        const isValid = form.validate().hasErrors === false;
        console.log(isValid)
        if (!isValid) {
            console.log("Validation is not valid")
            return;
        }
        console.log(form.values.course)
        const [CPF_Monthly_Instalment, CPF_Total_Repayment_Amount, TFL_Monthly_Instalment, TFL_Total_Repayment_Amount, TFL_principal_amount, TOTAL_CASH_AMOUNT] = useCalculator(form.values.schoolFees, form.values.academicSystem, form.values.course, form.values.repaymentPeriod, form.values.interestRates, form.values.studyLength, form.values.repaymentPlans, form.values.repaymentAmount);

        console.log("Final Calculation")
        console.log(CPF_Monthly_Instalment, CPF_Total_Repayment_Amount, TFL_Monthly_Instalment, TFL_Total_Repayment_Amount);

        // Set the results to the state variables
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
                form={form}
                course={form.values.course}
                handleCourse={(v) => form.setFieldValue('course', v)}
                ns={form.values.ns}
                handleNS={(v) => form.setFieldValue('ns', v)}
                schoolFees={form.values.schoolFees}
                handleSchoolFees={(v) => form.setFieldValue('schoolFees', v)}
                academicSystem={form.values.academicSystem}
                handleAcademicSystem={(v) => form.setFieldValue('academicSystem', v)}
                studyLength={form.values.studyLength}
                handleStudyLength={(v) => form.setFieldValue('studyLength', v)}
                withdrawalLimit={form.values.withdrawalLimit}
                handleWithdrawalLimit={(v) => form.setFieldValue('withdrawalLimit', v)}
                repaymentPlans={form.values.repaymentPlans}
                handleRepaymentPlans={(v) => form.setFieldValue('repaymentPlans', v)}
                repaymentPeriod={form.values.repaymentPeriod}
                handleRepaymentPeriod={(v) => form.setFieldValue('repaymentPeriod', v)}
                repaymentAmount={form.values.repaymentAmount}
                handleRepaymentAmount={(v) => form.setFieldValue('repaymentAmount', v)}
                interestRates={form.values.interestRates}
                handleInterestRates={(v) => form.setFieldValue('interestRates', v)}
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
                        cpfWithdrawalLimit={Number(form.values.withdrawalLimit)}
                        repaymentPlan={form.values.repaymentPlans}
                        course={form.values.course}
                        schoolFees={Number(form.values.schoolFees)}
                        studyLength={Number(form.values.studyLength)}
                        academicSystem={form.values.academicSystem}
                        handleEdit={() => setIsCalculationForm(true)}/>
            </Banner>
            <ResultsExplain 
                cpfTotalRepaymentAmount={Number(CPF_Total_Repayment_Amount)}
                cpfWithdrawalLimit={Number(form.values.withdrawalLimit)}
                course={form.values.course}
                schoolFees={Number(form.values.schoolFees)}
                studyLength={Number(form.values.studyLength)}
                academicSystem={form.values.academicSystem}/>
            <Footer handleCalculation={handleCalculation} 
                    isCalculationForm={isCalculationForm}/>
        </div>)
    }
        </>
    );
}
