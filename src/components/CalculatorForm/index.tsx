'use client'

import { useState } from 'react';
import { Text, Paper, Center, Box, Title, List, Space, NumberInput, Anchor} from '@mantine/core';
import classess from './CalculatorForm.module.css';
import { SelectableOptionButton } from '../Common/SelectableOptionButton';

const RepaymentPlan = [
    'Estimated Repayment Period',
    'Estimated Monthy Repayment Amount'
]

export function CalculatorForm () {
    const [course, setCourse] = useState<'diploma' | 'degree'>('diploma');
    const [ns, setNS] = useState<'yes' | 'no'>('yes');
    const [schoolFees, setSchoolFees] = useState<string | number>(4200);
    const [academicSystem, setAcademicSystem] = useState<'semester' | 'trimester'>('semester');
    const [studyLength, setStudyLength] = useState<string | number>(3);
    const [withdrawalLimit, setWithdrawalLimit] = useState<string | number>(10000);
    const [interestRates, setInterestRates] = useState<string | number>(4.20);

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
                        onClick={() => setCourse('diploma') }
                    />
                    <SelectableOptionButton 
                        label="Degree (Universities/Art Institutions)"
                        selected={ course === 'degree' }
                        onClick={() => setCourse('degree') }
                    />

                    <Space h="lg" />
                    <Text mb="md">
                        Will you be serving National Service (NS)?
                    </Text>
                    <SelectableOptionButton 
                        label="Yes"
                        selected={ ns === 'yes' }
                        onClick={() => setNS('yes') }
                    />
                    <SelectableOptionButton 
                        label="No"
                        selected={ ns === 'no' }
                        onClick={() => setNS('no') }
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
                        defaultValue={4200}
                        onChange={setSchoolFees}
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
                        onClick={() => setAcademicSystem('semester') }
                    />
                    <SelectableOptionButton 
                        label="Trimester (3 terms per academic year)"
                        selected={ academicSystem === 'trimester' }
                        onClick={() => setAcademicSystem('trimester') }
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
                        defaultValue={3}
                        onChange={setStudyLength}
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
                        defaultValue={10000}
                        onChange={setWithdrawalLimit}
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
                       Estimated Repayment Period
                    </Text>
                    <NumberInput
                        placeholder="Length of Repayment in months "
                        suffix="   years"
                        required
                        min={1}
                        step={1}
                        max={6}
                        defaultValue={3}
                        onChange={setStudyLength}
                        size="lg"
                        className={classess.numberInput}
                    />

                    <Space h="lg" />
                    <Text mb="md">
                       Select repayment plan (TODO)
                    </Text>
                    {/* TODO: Repayment Plan Dropdown */}

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
                        defaultValue={4.20}
                        onChange={setInterestRates}
                        size="lg"
                        className={classess.numberInput}
                    />
                </Paper>
            </Box>
        </Center>
    )
}