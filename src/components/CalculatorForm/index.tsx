'use client'

import { Text, Paper, Center, Box, Title, List, Space, NumberInput, Anchor, Select, Group} from '@mantine/core';
import classess from './CalculatorForm.module.css';
import { SelectableOptionButton } from '../Common/SelectableOptionButton';
import { TooltipInfo } from '../Common/Tooltip';
import { motion, Variants } from 'motion/react';

const RepaymentPlan = [
    {value: 'repaymentPeriod', label: 'Estimated Repayment Period'},
    {value: 'repaymentAmount', label: 'Estimated Monthly Repayment Amount'}
]

interface CalculateFormProps {
    form: any;
    course: 'diploma' | 'degree';
    handleCourse: ( value: 'diploma' | 'degree' ) => void;
    ns: 'yes' | 'no';
    handleNS: ( value: 'yes' | 'no' ) => void;
    schoolFees: string | number;
    handleSchoolFees: (value: string | number) => void;
    academicSystem: 2 | 3;
    handleAcademicSystem: (value: 2 | 3) => void;
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
    form,
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

    const container: Variants = {
        hidden: {x: -100, opacity: 0},
        show: {
            x: 0,
            opacity: 1, 
            transition: {
                // stagger children by 0.2s
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeInOut"
            },
        },
      };
   
    return (
        <motion.div 
        initial="hidden"
        animate="show"
        variants={container}>
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

                    {course === 'diploma' && (
                        <>
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
                        </>
                    )}

                    <Space h="lg" />
                    <Text mb="md">
                        School Fees per Term
                    </Text>
                    <NumberInput
                        placeholder="E.g. 4000"
                        prefix="SGD    "
                        required
                        allowDecimal
                        decimalScale={2}
                        min={100}
                        step={100}
                        value={schoolFees}
                        onChange={handleSchoolFees}
                        size="lg"
                        className={classess.numberInput}
                        error={form.errors.schoolFees}
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        Academic System
                    </Text>
                    <SelectableOptionButton 
                        label="Semester (2 terms per academic year)"
                        selected={ academicSystem === 2 }
                        onClick={() => handleAcademicSystem(2) }
                    />
                    <SelectableOptionButton 
                        label="Trimester (3 terms per academic year)"
                        selected={ academicSystem === 3}
                        onClick={() => handleAcademicSystem(3) }
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        Length of Study (in years)
                    </Text>
                    <NumberInput
                        placeholder="E.g. 3 years"
                        suffix="   years"
                        required
                        min={1}
                        step={1}
                        max={6}
                        value={studyLength}
                        onChange={handleStudyLength}
                        size="lg"
                        className={classess.numberInput}
                        error={form.errors.studyLength}
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        Current Available Withdrawal Limit
                        <TooltipInfo label="The Available Withdrawal Limit is either 40% of your accumulated OA savings, or your remaining OA balance, whichever is lower. The amount that can be used is also subject to the tuition fees payable." />
                    </Text>
                    <NumberInput
                        placeholder="E.g. 10000"
                        prefix="SGD    "
                        required
                        allowDecimal
                        decimalScale={2}
                        min={1}
                        step={100}
                        value={withdrawalLimit}
                        onChange={handleWithdrawalLimit}
                        size="lg"
                        className={classess.numberInput}
                        error={form.errors.withdrawalLimit}
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
                            error={form.errors.repaymentPlans}
                    />

                    {repaymentPlans === 'repaymentPeriod' ? (
                        <>
                            <Space h="lg" />
                            <Text mb="md">
                                Estimated Repayment Period
                                <TooltipInfo label="A shorter repayment period means that less interest will be accrued over time." />
                            </Text>
                            <NumberInput
                                placeholder="E.g. 3 years"
                                suffix="   years"
                                required
                                min={0}
                                step={1}
                                max={course === 'diploma' ? 12 : 20}
                                value={repaymentPeriod}
                                onChange={handleRepaymentPeriod}
                                size="lg"
                                className={classess.numberInput}
                                error={form.errors.repaymentPeriod}
                            />

                            <Space h="xs" />
                            {course === 'diploma' ? (
                                <Text size="sm" c="dimmed">
                                    Do note that the maximum repayment period is <span className={classess.CPFText}>12 years for CPF Education Loan</span> and <span className={classess.TFLText}>10 years for MOE TFL</span>.
                                </Text>
                            ) : (
                                <Text size="sm" c="dimmed">
                                    Do note that the maximum repayment period is <span className={classess.CPFText}>12 years for CPF Education Loan</span> and <span className={classess.TFLText}>20 years for MOE TFL</span>.
                                </Text>
                            )}
                        </>
                    ) : (
                        <>
                            <Space h="lg" />
                            <Text mb="md">
                                Estimated Monthly Repayment Amount
                                <TooltipInfo label="A higher monthly repayment amount means that less interest will be accrued over time." />
                            </Text>
                            <NumberInput
                                placeholder="E.g. 500"
                                prefix="SGD     "
                                required
                                min={100}
                                step={100}
                                value={repaymentAmount}
                                onChange={handleRepaymentAmount}
                                size="lg"
                                className={classess.numberInput}
                                error={form.errors.repaymentAmount}
                            />
                        </>
                    )}

                    <Space h="lg" />
                    <Text mb="md">
                        Interest Rate for MOE Tuition Fee Loan (TFL)
                    </Text>
                    <NumberInput
                        placeholder="4.2%"
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
                        error={form.errors.interestRates}
                    />
                    <Text size="sm" c="dimmed">
                        You may check the current interest rate for the MOE Tuition Fee Loan on the following websites:
                    </Text>
                    <List withPadding>
                        <List.Item>
                            <Group>
                                <Text size="sm" c="dimmed">OCBC:</Text> 
                                <Anchor
                                    href="https://frankbyocbc.com/products/moe-interest-rate-change"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    className={classess.anchorText}
                                    size="sm"
                                    >
                                        https://frankbyocbc.com/products/moe-interest-rate-change
                                </Anchor>
                            </Group>
                        </List.Item>
                        <List.Item>
                            <Group>
                                <Text size="sm" c="dimmed">DBS:</Text> 
                                <Anchor
                                    href="https://www.dbs.com.sg/personal/loans/promotions/sg-moeloanrates.page"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    size="sm"
                                    className={classess.anchorText}>
                                        https://www.dbs.com.sg/personal/loans/promotions/sg-moeloanrates.page
                                </Anchor>
                            </Group>
                        </List.Item>
                    </List>
                    <Space h="md" />
                    <Text size="sm" c="dimmed">
                        Do note that interest rates for MOE Tuition Fee Loan will be revised on a half-yearly basis based on the 3-month compounded SORA
                    </Text>
                </Paper>
            </Box>
        </Center>
        </motion.div>
    )
}