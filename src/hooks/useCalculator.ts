import { pmt } from "financial";

export function roundToTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
}

export function CPFCalculator(schoolFees: number, 
                              academicSystem: 2 | 3, 
                              course: 'diploma' | 'degree', 
                              repaymentPeriod: number, 
                              studyLength: number) {

    const CPF_INTEREST_RATE = 2.5 / 100; // CPF interest rate is fixed at 2.5%
    const num_of_deduction = studyLength * academicSystem;
    const TOTAL_REPAYMENT_PERIOD_MONTHS = repaymentPeriod * 12; // Convert repayment period from years to months

     // Calculate CPF total payment amount + monthly instalment
     let CPF_principal_amount = schoolFees  
    
     for (let i = 1; i < num_of_deduction; i++) {
         CPF_principal_amount = schoolFees + CPF_principal_amount * (1 + CPF_INTEREST_RATE)**(1 / academicSystem);
     }
 
     // CPF repayment starts 1 year after graduation
     const CPF_total_loan = CPF_principal_amount * (1 + CPF_INTEREST_RATE)**(1 + (1/academicSystem));
 
     // Calculate CPF Monthly Instalment
     const CPF_monthly_interest_rate = (1 + CPF_INTEREST_RATE) ** (1/12) - 1; // Convert annual interest rate to monthly
     const CPF_monthly_instalment = pmt(CPF_monthly_interest_rate, TOTAL_REPAYMENT_PERIOD_MONTHS, -CPF_total_loan);
     const CPF_monthly_instalment_round = roundToTwoDecimalPlaces(CPF_monthly_instalment) // Round to 2 decimal places
 
     // Calculate CPF Total Payment Amount
     const CPF_total_payment_amount = roundToTwoDecimalPlaces(CPF_monthly_instalment * TOTAL_REPAYMENT_PERIOD_MONTHS);

     return [CPF_monthly_instalment_round, CPF_total_payment_amount];
}

export function TFLCalculator(schoolFees: number, 
                              academicSystem: 2 | 3, 
                              course: 'diploma' | 'degree', 
                              repaymentPeriod: number, 
                              interestRates: number, 
                              studyLength: number) {
                                
    // Fixed variables for both CPF & TFL
    const TFL_INTEREST_RATE = interestRates / 100; // Convert interest rate from percentage to decimal
    const num_of_deduction = studyLength * academicSystem;
    const TOTAL_REPAYMENT_PERIOD_MONTHS = repaymentPeriod * 12; // Convert repayment period from years to months
    const DIPLOMA_TFL_PERCENTAGE = 0.75 // only can borrow 75% of school fees for diploma
    const DEGREE_TFL_PERCENTAGE = 0.90 // only can borrow 90% of school fees for degree

    // Calculate TFL total payment amount + monthly instalment depending on if it's diploma or degree
    const LOAN_LIMIT = schoolFees * (course === 'diploma' ? DIPLOMA_TFL_PERCENTAGE : DEGREE_TFL_PERCENTAGE)
    const TOTAL_CASH_AMOUNT = schoolFees * num_of_deduction * (course === 'diploma' ? 1-DIPLOMA_TFL_PERCENTAGE : 1-DEGREE_TFL_PERCENTAGE);
    let TFL_principal_amount = LOAN_LIMIT;
    console.log(TFL_principal_amount);

    for (let i = 1; i < num_of_deduction; i++) {
        TFL_principal_amount = LOAN_LIMIT + TFL_principal_amount;
    }
    console.log(TFL_principal_amount);

    // Calculate TFL Monthly Instalment
    const TFL_monthly_interest_rate = (1 + TFL_INTEREST_RATE) ** (1/12) - 1; // Convert annual interest rate to monthly
    const TFL_monthly_instalment = pmt(TFL_monthly_interest_rate, TOTAL_REPAYMENT_PERIOD_MONTHS, -TFL_principal_amount);
    const TFL_monthly_instalment_round = roundToTwoDecimalPlaces(TFL_monthly_instalment) // Round to 2 decimal places

    // Calculate TFL Total Payment Amount
    const TFL_total_payment_amount = roundToTwoDecimalPlaces((TFL_monthly_instalment * TOTAL_REPAYMENT_PERIOD_MONTHS) + TOTAL_CASH_AMOUNT);

    return [TFL_monthly_instalment_round, TFL_total_payment_amount, TFL_principal_amount, TOTAL_CASH_AMOUNT];

}

export function useCalculator(schoolFees: any, academicSystem: 2 | 3, course: 'diploma' | 'degree', repaymentPeriod: any, interestRates: any, studyLength: any) {

    // Calculate CPF Monthly Instalment & Total Payment Amount
    const [CPF_monthly_instalment_round, CPF_total_payment_amount] = CPFCalculator(schoolFees, academicSystem, course, repaymentPeriod, studyLength);

    // Calculate TFL Total Payment Amount + Monthly Instalment
    const [TFL_monthly_instalment_round, TFL_total_payment_amount, TFL_principal_amount, TOTAL_CASH_AMOUNT] = TFLCalculator(schoolFees, academicSystem, course, repaymentPeriod, interestRates, studyLength);


    return [CPF_monthly_instalment_round, CPF_total_payment_amount, TFL_monthly_instalment_round, TFL_total_payment_amount, TFL_principal_amount, TOTAL_CASH_AMOUNT];

}