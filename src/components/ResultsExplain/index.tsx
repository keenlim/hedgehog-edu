'use client'

import { Card, Center, Grid, Space, Text, Title } from '@mantine/core';
import classes from './ResultsExplain.module.css';
import { formatCurrency } from '@/utils/format';
import { useMemo } from 'react';

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
                                Maximum Repayment Period
                            </Title>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Card withBorder radius="md" padding="lg" className={classes.card}>
                            <Title size="h2" ta="center" py="sm" c="teal">
                                12 Years
                            </Title>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Card withBorder radius="md" padding="lg" className={classes.card}>
                            <Title size="h2" ta="center" py="sm" c="teal">
                                {course === 'diploma' ? 10 : 20} Years
                            </Title>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Center>

        </div>
    )
}