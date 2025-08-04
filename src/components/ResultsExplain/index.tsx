'use client'

import { Button, Card, Center, Divider, Grid, Group, Space, Text, Title } from '@mantine/core';
import classes from './ResultsExplain.module.css';
import { formatCurrency } from '@/utils/format';
import { useMemo } from 'react';
import { IconChevronRight } from '@tabler/icons-react';

interface ResultsExplainProps {
    cpfTotalRepaymentAmount: number;
    cpfWithdrawalLimit: number;
    course: 'diploma' | 'degree';
    schoolFees: number;
    studyLength: number;
    academicSystem: 2 | 3;
}

export function ResultsExplain ({
    cpfTotalRepaymentAmount,
    cpfWithdrawalLimit,
    course,
    schoolFees,
    studyLength,
    academicSystem
}: ResultsExplainProps) {

    const isEligibleForWithdrawal = useMemo(() => {
        console.log((schoolFees * studyLength * academicSystem) <= cpfWithdrawalLimit)
        return (schoolFees * studyLength * academicSystem) <= cpfWithdrawalLimit;
    }, [schoolFees, studyLength, academicSystem, cpfWithdrawalLimit]);

    const handleClickCPF = () => {
        window.open("https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/apply-for-cpf-education-loan", '_blank');
    }

    const handleClickMOE = () => {
        window.open("https://www.moe.gov.sg/financial-matters/government-loan-schemes/tuition-fee-loan", '_blank');
    }


    return (
        <div className={classes.main}>
            <Center pb="md">
                <Title size="h2">
                    Impact on Lenders' Retirement Sum
                </Title>
            </Center>

            <Center pt="md">
                <Grid gutter="lg" justify="center" align="center">
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Card withBorder radius="md" padding="lg" className={classes.card}>
                            {isEligibleForWithdrawal ? (
                                <>
                                    <Title size="h1" ta="center">
                                    - {formatCurrency(cpfTotalRepaymentAmount * (1.025 ** 12))}
                                    </Title>
                                    <Space h="xs" />
                                    <Text size="sm" ta="center" >
                                        if <strong>NO</strong> repayment made after <strong>12 years</strong>
                                    </Text>
                                </>
                            ) : (
                                <>
                                    <Title size="h1" ta="center">
                                        NA
                                    </Title>
                                    <Space h="xs" />
                                    <Text size="sm" ta="center" >
                                        Insufficient savings to accomodate the loan amount
                                    </Text>
                                </>
                            )}
                            
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Card withBorder radius="md" padding="lg" className={classes.card}>
                            <Title size="h1" ta="center">
                                {formatCurrency(0)}
                            </Title>
                            <Text size="sm" ta="center" pt="sm">
                                <strong>Does not</strong> affect lender's CPF Retirement Sum
                            </Text>
                        </Card>
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <Center py="md">
                            <Title size="h2">
                                Deferment Options
                            </Title>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Card withBorder radius="md" padding="lg" className={classes.card}>
                            <Text size="sm" ta="left" py="md">
                                For the CPF Education Loan, while deferment of repayment is possible for scenarios (i.e.  National Service (NS), <strong>interest will always continue to accrue.</strong>
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Card withBorder radius="md" padding="lg" className={classes.card}>
                            <Text size="sm" ta="left">
                                For the MOE Tuition Fee Loan, you may appeal for <strong>deferment of repayment and interest</strong> due to serving NS, further studies or financial difficulties. <strong>Interest will not accrue during deferment.</strong>
                            </Text>
                        </Card>
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <Center py="md">
                            <Title size="h2">
                                When Interest Starts to Accrue
                            </Title>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Card withBorder radius="md" padding="lg" className={classes.card}>
                            <Text size="md" py="sm">
                                <strong>Immediately</strong> after deduction of school fees from CPF OA
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Card withBorder radius="md" padding="lg" className={classes.card}>
                            <Text size="lg" ta="center" py="sm">
                                <strong>After graduation</strong>
                            </Text>
                        </Card>
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <Group align="center" style={{ width: '100%' }}>
                            <Divider style={{ flex: 1, backgroundColor: '#aab' }} />
                            <Divider
                                orientation="vertical"
                                style={{ height: 24, width: 1, backgroundColor: '#aab' }}
                            />
                            <Divider style={{ flex: 1, backgroundColor: '#aab' }} />
                        </Group>
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Button variant="filled" 
                                color="#10605f" 
                                fullWidth 
                                rightSection={<IconChevronRight />}
                                size="xl"
                                justify="space-between"
                                radius="md"
                                onClick={handleClickCPF}>Apply for CPF Education Loan</Button>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Button variant="filled" 
                                color="#10605f" 
                                fullWidth 
                                rightSection={<IconChevronRight />}
                                size="xl"
                                justify="space-between"
                                radius="md"
                                onClick={handleClickMOE}>Apply for MOE Tuition Fee Loan</Button>
                    </Grid.Col>
                </Grid>
            </Center>
        </div>
    )
}