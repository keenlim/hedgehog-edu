import { Button, Center, Divider, Grid, Space, Text, Title } from '@mantine/core';
import classes from './CalculatorResult.module.css';
import { formatCurrency } from '@/utils/format';
import { IconEdit, IconPlus } from '@tabler/icons-react';
import { useMemo } from 'react';

interface CalculaterResultProps {
    cpfMonthlyInstalment: number;
    cpfTotalRepaymentAmount: number;
    tflMonthlyInstalment: number;
    tflTotalRepaymentAmount: number;
    tflPrincipalAmount: number;
    tflCashAmount: number;
    cpfWithdrawalLimit: number;
    repaymentPlan: string | null; // 'repaymentAmount' | 'repaymentPeriod';
    repaymentPeriod?: number; // Optional, only if repaymentPlan is 'repaymentPeriod'
    course: 'diploma' | 'degree';
    schoolFees: number;
    studyLength: number;
    academicSystem: 2 | 3;
    handleEdit: () => void;
}

export function CalculatorResultDesktop({
    cpfMonthlyInstalment,
    cpfTotalRepaymentAmount,
    tflMonthlyInstalment,
    tflTotalRepaymentAmount,
    tflPrincipalAmount,
    tflCashAmount,
    cpfWithdrawalLimit,
    repaymentPlan,
    repaymentPeriod,
    course,
    schoolFees,
    studyLength, 
    academicSystem,
    handleEdit,
}: CalculaterResultProps) {

    const isEligibleForWithdrawal = useMemo(() => {
        console.log((schoolFees * studyLength * academicSystem) <= cpfWithdrawalLimit)
        return (schoolFees * studyLength * academicSystem) <= cpfWithdrawalLimit;
    }, [schoolFees, studyLength, academicSystem, cpfWithdrawalLimit]);



    return (
        <div className={classes.resultsBox}>
            <Grid mt="sm" py="sm" px="md" justify="center" align="center">
                <Grid.Col span={6}>
                    <Center>
                        <Title size="h2" className={classes.headerText}>CPF Education Loan</Title>
                    </Center>   
                </Grid.Col>
                <Grid.Col span={6}>
                    <Center>
                        <Title size="h2" className={classes.headerText}>MOE Tuition Fee Loan</Title>
                    </Center>   
                </Grid.Col>

                <Grid.Col span={12}>
                    <Divider className="divider" my="md" size="md" label={
                        <Text c="white" fw={500} size="lg" px="xs">In total, you will owe</Text>
                    } labelPosition="center" />
                </Grid.Col>

                <Grid.Col span={6}>
                    {isEligibleForWithdrawal ? (
                        <>
                        <Center>
                            <Title size="h1" className={classes.amountText}>
                                {cpfTotalRepaymentAmount ? formatCurrency(cpfTotalRepaymentAmount): 'NA'}
                            </Title>
                        </Center>   
                        <Space h="xs" />
                        <Center>
                            <Text size="md" c="#f6d594">
                                100 % loan coverage
                            </Text>
                        </Center>
                        </>
                    ) : (
                        <>
                        <Center>
                            <Title size="h1" className={classes.amountText}>
                                Not Eligible
                            </Title>
                        </Center>   
                        </>
                    )}
                </Grid.Col>

                <Grid.Col span={6}>
                    <Center pb="sm">
                        <Title size="h1" className={classes.amountText}>
                            {tflTotalRepaymentAmount ? formatCurrency(tflTotalRepaymentAmount): 'NA'}
                        </Title>
                    </Center>   
                    <Center pb="xs">
                        <Text size="md" c="#f6d594" className={classes.smallerText}>
                            {tflPrincipalAmount ? `${course === 'diploma' ? '75% ' : '90% '}Loan Coverage: ${formatCurrency(tflPrincipalAmount)}` : 'NA'}
                        </Text>
                        <IconPlus size={24} color="#f6d594" className={classes.iconPlus} />
                        <Text size="md" c="#f6d594">
                            {tflCashAmount ? `${course === 'diploma' ? '25% ' : '10% '} Cash: ${formatCurrency(tflCashAmount)}` : 'NA'}
                        </Text>
                    </Center>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Divider className="divider" my="md" size="md" label={
                        <Text c="white" fw={500} size="lg" px="xs">{
                            repaymentPlan === 'repaymentPeriod' ? 
                                'Each month, you will pay' : 'Repayment Period'
                        }</Text>
                    } labelPosition="center" />
                </Grid.Col>
    
                <Grid.Col span={6}>
                    {isEligibleForWithdrawal ? (
                        <>
                        <Center>
                            <Title size="h1" className={classes.amountText}>
                                {repaymentPlan === 'repaymentPeriod' ? (
                                    cpfMonthlyInstalment ? `${formatCurrency(cpfMonthlyInstalment)}`: 'NA'
                                ) : (
                                    `${cpfMonthlyInstalment} months`
                                )}
                            </Title>
                        </Center>   
                        <Center>
                            {repaymentPlan === 'repaymentPeriod' ? (
                                <Text size="sm" c="#f6d594">
                                    for {repaymentPeriod ? (repaymentPeriod > 12 ? 12 : repaymentPeriod): null} years
                                </Text>
                            ) : null}
                        </Center>
                        </>
                    ) : (
                        <>
                        <Center>
                            <Title size="h1" className={classes.amountText}>
                                Not Eligible
                            </Title>
                        </Center>   
                        <Space h="xs" />
                        <Center>
                            <Text size="md" c="#f6d594">
                                The lender's OA does not have sufficient savings to accommodate the indicated loan amount. 
                            </Text>
                        </Center>
                        </>
                    )}
                </Grid.Col>

                <Grid.Col span={6}>
                    <Center>
                        <Title size="h1" className={classes.amountText}>
                            {repaymentPlan === 'repaymentPeriod' ? (
                                tflMonthlyInstalment ? `${formatCurrency(tflMonthlyInstalment)}` : 'NA'
                            ) : `${tflMonthlyInstalment} months`}
                        </Title>
                    </Center>  
                    <Center>
                        {repaymentPlan === 'repaymentPeriod' ? (
                            <Text size="sm" c="#f6d594">
                                for {repaymentPeriod ? 
                                    (repaymentPeriod > (course === 'diploma' ? 10 : 20) ? 
                                    (course === 'diploma' ? 10 : 20) 
                                    : repaymentPeriod) : null
                                } years
                            </Text>
                        ) : null}
                    </Center> 
                </Grid.Col>

                <Grid.Col span={12} mt="xs">
                    <Center>
                    <Button variant="outline" 
                            color="white" 
                            size="lg" 
                            radius="xl"
                            rightSection={<IconEdit color="white"/>}
                            onClick={handleEdit}>
                            Edit
                    </Button>
                   </Center>
                </Grid.Col>

            </Grid>

        </div>
    )
}