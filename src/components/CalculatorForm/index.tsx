'use client'

import { Text, Paper, Center, Box, Title, List, Space, NumberInput, Anchor, Select} from '@mantine/core';
import classess from './CalculatorForm.module.css';
import { SelectableOptionButton } from '../Common/SelectableOptionButton';

const RepaymentPlan = [
    {value: 'repaymentPeriod', label: 'Estimated Repayment Period'},
    {value: 'repaymentAmount', label: 'Estimated Monthy Repayment Amount'}
]

interface CalculateFormProps {
    course: 'diploma' | 'degree';
    handleCourse: ( value: 'diploma' | 'degree' ) => void;
    ns: 'yes' | 'no';
    handleNS: ( value: 'yes' | 'no' ) => void;
    schoolFees: string | number;
    handleSchoolFees: (value: string | number) => void;
    academicSystem: 'semester' | 'trimester';
    handleAcademicSystem: (value: 'semester' | 'trimester') => void;
    studyLength: string | number;
    handleStudyLength: (value: string | number) => void;
    withdrawalLimit: string | number;
    handleWithdrawalLimit: (value: string | number) => void;
    interestRates: string | number;
    handleInterestRates: (value: string | number) => void;
    repaymentPlans: string | null;
    handleRepaymentPlans: (value: string | null) => void;
    repaymentPeriod: string | number;
    handleRepaymentPeriod: (value: string | number) => void;
    repaymentAmount: string | number;
    handleRepaymentAmount: (value: string | number) => void;
}

export function CalculatorForm ({
    course,
    handleCourse,
    ns,
    handleNS,
    schoolFees,
    handleSchoolFees,
    academicSystem,
    handleAcademicSystem,
    studyLength,
    handleStudyLength,
    withdrawalLimit,
    handleWithdrawalLimit,
    interestRates,
    handleInterestRates,
    repaymentPlans,
    handleRepaymentPlans,
    repaymentPeriod,
    handleRepaymentPeriod,
    repaymentAmount,
    handleRepaymentAmount
}: CalculateFormProps) {
   
    return (
        <Center>
            <Box w="80%" mx="auto">
                <Paper className={classess.paperForm}>
                    <Title order={3}>
                        Calculate the total payment amount for both the CPF Education Loan and the MOE Tuition Fee Loan (TFL) 
                        and receive a personalised comparison.
                    </Title>

                    <Space h="md" />

                    <Text>
                        To use this calculator, you will need:
                    </Text>

                    <List withPadding>
                        <List.Item>Details of your education loan</List.Item>
                        <List.Item>Details of your lender's CPF Ordinary Account (OA)</List.Item>
                    </List>

                    <Paper mt="lg" shadow="xs" radius="md" p="xl" bg="#f8f5f5">
                        <Text pb="xs" fw={800}>Important notes</Text>
                        <List withPadding>
                            <List.Item>
                                Please note that this planner/calculator serves as a <strong>planning tool only</strong> and is intended to help you explore different financing scenarios. The calculations and results provided are for illustrative purposes and <strong>should not be considered as financial advice or a definitive guide for your financing decisions.</strong> 
                            </List.Item>
                            <List.Item>
                                The results of this calculator are estimates and should only be used as reference. 
                            </List.Item>
                            <Space h="xs" />
                            <List.Item>Assumed loan converage:</List.Item>
                            <List withPadding listStyleType="disc">
                                <List.Item>MOE Tuition Fee Loan: 90% of school fees covered by loan + 10% cash upfront</List.Item>
                                <List.Item>CPF Education Loan: 100% of school fees covered by loan</List.Item>
                            </List>
                            <List.Item>Repayment for the CPF Education Loan starts 1 year after graduation</List.Item>
                        </List>
                    </Paper>

                    <Space h="lg" />

                    <Text mb="md">Type of Course</Text>
                    <SelectableOptionButton 
                        label="Diploma (Polytechnics/Art Institutions)"
                        selected={ course === 'diploma' }
                        onClick={() => handleCourse('diploma') }
                    />
                    <SelectableOptionButton 
                        label="Degree (Universities/Art Institutions)"
                        selected={ course === 'degree' }
                        onClick={() => handleCourse('degree') }
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        Will you be serving National Service (NS)?
                    </Text>
                    <SelectableOptionButton 
                        label="Yes"
                        selected={ ns === 'yes' }
                        onClick={() => handleNS('yes') }
                    />
                    <SelectableOptionButton 
                        label="No"
                        selected={ ns === 'no' }
                        onClick={() => handleNS('no') }
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        School Fees per Term
                    </Text>
                    <NumberInput
                        placeholder="Enter school fees per term e.g. 4000"
                        prefix="SGD    "
                        required
                        allowDecimal
                        decimalScale={2}
                        min={1000}
                        step={100}
                        value={schoolFees}
                        onChange={handleSchoolFees}
                        size="lg"
                        className={classess.numberInput}
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        Academic System
                    </Text>
                    <SelectableOptionButton 
                        label="Semester (2 terms per academic year)"
                        selected={ academicSystem === 'semester' }
                        onClick={() => handleAcademicSystem('semester') }
                    />
                    <SelectableOptionButton 
                        label="Trimester (3 terms per academic year)"
                        selected={ academicSystem === 'trimester' }
                        onClick={() => handleAcademicSystem('trimester') }
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        Length of Study (in years)
                    </Text>
                    <NumberInput
                        placeholder="Length of study in years e.g. 3 years"
                        suffix="   years"
                        required
                        min={1}
                        step={1}
                        max={6}
                        value={studyLength}
                        onChange={handleStudyLength}
                        size="lg"
                        className={classess.numberInput}
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        Current Available Withdrawal Limit
                    </Text>
                    <NumberInput
                        placeholder="Available Withdrawal Limit e.g. 10000"
                        prefix="SGD    "
                        required
                        allowDecimal
                        decimalScale={2}
                        min={100}
                        step={100}
                        value={withdrawalLimit}
                        onChange={handleWithdrawalLimit}
                        size="lg"
                        className={classess.numberInput}
                    />
                    <Space h="xs" />
                    <Text size="sm" c="dimmed">
                        You may check the amount of CPF savings that can be used for education by logging in to the lender's 'Education dashboard' with their Singpass account {' '}
                        <Anchor
                            href="https://www.cpf.gov.sg/educationdashboard"
                            target="_blank" 
                            rel="noopener noreferrer"
                            underline="hover"
                            className={classess.anchorText}>
                                here
                        </Anchor>
                    </Text>

                    <Space h="lg" />
                    <Text mb="md">
                       Select repayment plan
                    </Text>
                    <Select data={RepaymentPlan}
                            placeholder="Select repayment plan"
                            value={repaymentPlans}
                            onChange={(newValue) => handleRepaymentPlans(newValue)}
                            size="lg"
                            className={classess.dropdown}
                    />

                    {repaymentPlans === 'repaymentPeriod' ? (
                        <>
                            <Space h="lg" />
                            <Text mb="md">
                                Estimated Repayment Period
                            </Text>
                            <NumberInput
                                placeholder="Length of Repayment in months "
                                suffix="   months"
                                required
                                min={1}
                                step={1}
                                max={144}
                                value={repaymentPeriod}
                                onChange={handleRepaymentPeriod}
                                size="lg"
                                className={classess.numberInput}
                            />
                        </>
                    ) : (
                        <>
                            <Space h="lg" />
                            <Text mb="md">
                                Estimated Monthly Repayment Amount
                            </Text>
                            <NumberInput
                                placeholder="Estimated Monthly Repayment Amount"
                                prefix="SGD     "
                                required
                                min={100}
                                step={100}
                                value={repaymentAmount}
                                onChange={handleRepaymentAmount}
                                size="lg"
                                className={classess.numberInput}
                            />
                        </>
                    )}

                    <Space h="lg" />
                    <Text mb="md">
                        Interest Rate for MOE Tuition Fee Loan (TFL)
                    </Text>
                    <NumberInput
                        placeholder="Interest Rates for MOE TFL e.g. 4.2%"
                        suffix="   %"
                        required
                        allowDecimal
                        decimalScale={2}
                        min={1}
                        step={0.1}
                        max={10}
                        value={interestRates}
                        onChange={handleInterestRates}
                        size="lg"
                        className={classess.numberInput}
                    />
                </Paper>
            </Box>
        </Center>
    )
}