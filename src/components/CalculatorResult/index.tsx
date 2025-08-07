'use client'

import { useRef } from 'react';
import { Box, Button, Center, Divider, Grid, Group, NumberInput, Slider, Space, Text, Textarea, Title } from '@mantine/core';
import classes from './CalculatorResult.module.css';
import { formatCurrency } from '@/utils/format';
import { IconEdit, IconPlus } from '@tabler/icons-react';
import { useMemo } from 'react';
import { motion } from 'motion/react';

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
    repaymentAmount?: number; // Optional, only if repaymentPlan is 'repaymentAmount'
    course: 'diploma' | 'degree';
    schoolFees: number;
    studyLength: number;
    academicSystem: 2 | 3;
    handleEdit: () => void;
    handleRepaymentPeriodSlider?: (value: number) => void;
    handleRepaymentAmountSlider?: (value: number) => void; // Optional, only if repaymentPlan is 'repaymentAmount'
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
    repaymentAmount,
    course,
    schoolFees,
    studyLength, 
    academicSystem,
    handleEdit,
    handleRepaymentPeriodSlider,
    handleRepaymentAmountSlider
}: CalculaterResultProps) {

    const isEligibleForWithdrawal = useMemo(() => {
        console.log((schoolFees * studyLength * academicSystem) <= cpfWithdrawalLimit)
        return (schoolFees * studyLength * academicSystem) <= cpfWithdrawalLimit;
    }, [schoolFees, studyLength, academicSystem, cpfWithdrawalLimit]);

    function generateMarks(
        repaymentAmount: number,
        range = 1000,
        step = 100
      ): any[] {
        const start = Math.max(0, repaymentAmount - range);
        const end = repaymentAmount + range;
        const marks: any[] = [];
      
        for (let v = start; v <= end; v += step) {
          marks.push({ value: v, label: String(v) });
        }
      
        return marks;
      }

      const baseAmount = useRef(Number(repaymentAmount));
      const amountMax = baseAmount.current + 500;

      const marks = useMemo(
        () => generateMarks(baseAmount.current, 500, 100),
        [course, baseAmount]
      )


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
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}>
                                <Title size="h1" className={classes.amountText}>
                                    {cpfTotalRepaymentAmount ? formatCurrency(cpfTotalRepaymentAmount): 'NA'}
                                </Title>
                            </motion.div>
                        </Center>   
                        <Space h="xs" />
                        <Center>
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}>
                                <Text size="md" c="#f6d594">
                                    100 % loan coverage
                                </Text>
                            </motion.div>
                        </Center>
                        </>
                    ) : (
                        <>
                        <Center>
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}>
                                <Title size="h1" className={classes.amountText}>
                                    Not Eligible
                                </Title>
                            </motion.div>
                        </Center>   
                        </>
                    )}
                </Grid.Col>

                <Grid.Col span={6}>
                    <Center pb="sm">
                        <motion.div
                                    initial={{opacity: 0, scale: 0}}
                                    animate={{opacity: 1, scale: 1}}>
                            <Title size="h1" className={classes.amountText}>
                                {tflTotalRepaymentAmount ? formatCurrency(tflTotalRepaymentAmount): 'NA'}
                            </Title>
                        </motion.div>
                    </Center>   
                    <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}>
                    <Center pb="xs">
                            <Text size="md" c="#f6d594" className={classes.smallerText}>
                                {tflPrincipalAmount ? `${course === 'diploma' ? '75% ' : '90% '}Loan Coverage: ${formatCurrency(tflPrincipalAmount)}` : 'NA'}
                            </Text>
                            <IconPlus size={24} color="#f6d594" className={classes.iconPlus} />
                            <Text size="md" c="#f6d594">
                                {tflCashAmount ? `${course === 'diploma' ? '25% ' : '10% '} Cash: ${formatCurrency(tflCashAmount)}` : 'NA'}
                            </Text>
                        
                    </Center>
                    </motion.div>
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
                            <motion.div
                                    initial={{opacity: 0, scale: 0}}
                                    animate={{opacity: 1, scale: 1}}>
                                <Title size="h1" className={classes.amountText}>
                                    {repaymentPlan === 'repaymentPeriod' ? (
                                        cpfMonthlyInstalment ? `${formatCurrency(cpfMonthlyInstalment)}`: 'NA'
                                    ) : (
                                        `${cpfMonthlyInstalment} months`
                                    )}
                                </Title>
                            </motion.div>
                        </Center>   
                        <Center>
                            <motion.div
                                    initial={{opacity: 0, scale: 0}}
                                    animate={{opacity: 1, scale: 1}}>
                                {repaymentPlan === 'repaymentPeriod' ? (
                                    <Text size="sm" c="#f6d594">
                                        for {repaymentPeriod ? (repaymentPeriod > 12 ? 12 : repaymentPeriod): null} years
                                    </Text>
                                ) : null}
                            </motion.div>
                        </Center>
                        </>
                    ) : (
                        <>
                        <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}>
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
                        </motion.div>
                        </>
                    )}
                </Grid.Col>

                <Grid.Col span={6}>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}>
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
                    </motion.div>
                </Grid.Col>

                <Grid.Col span={12}>
                    {repaymentPlan==='repaymentPeriod' ? (
                        <Title size="h2" c="white" mt="xl" ta="center">
                            Estimated Repayment Period
                        </Title>
                    ) : (
                        <Title size="h2" c="white" mt="xl" ta="center">
                            Estimated Repayment Amount
                        </Title>
                    ) }
                    
                </Grid.Col>

                <Grid.Col span={12} my="lg">
                    <Center>
                        <Group
                             align="center"
                             style={{ width: '50%' }}
                             gap="xl">
                            <Slider 
                                color="white"
                                value={repaymentPlan === 'repaymentPeriod' ? repaymentPeriod : repaymentAmount}
                                onChange={repaymentPlan === 'repaymentPeriod' ? handleRepaymentPeriodSlider : handleRepaymentAmountSlider}
                                onChangeEnd={repaymentPlan === 'repaymentPeriod' ? handleRepaymentPeriodSlider : handleRepaymentAmountSlider}
                                marks={repaymentPlan === 'repaymentPeriod' ? (course === 'diploma' ? [
                                    { value: 2, label: '2' },
                                    { value: 4, label: '4' },
                                    { value: 6, label: '6' },
                                    { value: 8, label: '8' },
                                    { value: 10, label: '10' },
                                ] : [
                                    { value: 2, label: '2' },
                                    { value: 4, label: '4' },
                                    { value: 6, label: '6' },
                                    { value: 8, label: '8' },
                                    { value: 10, label: '10' },
                                    { value: 12, label: '12' },
                                    { value: 14, label: '14' },
                                    { value: 16, label: '16' },
                                    { value: 18, label: '18' },
                                    { value: 20, label: '20' }
                                ] ) : (
                                    marks
                                )}
                                min={repaymentPlan === 'repaymentPeriod' ? 0 : baseAmount.current - 500}
                                max={repaymentPlan === 'repaymentPeriod' ? (course === 'diploma' ? 10 : 20) : amountMax}
                                style={{ flex: 1 }} 
                            />
                            {repaymentPlan === 'repaymentPeriod' ? (
                                <Text c="white"
                                size="xl"
                                fw={800}
                                className={classes.textFont}>
                                    {repaymentPeriod} years
                                </Text>
                            ) : (
                                <>
                                <Text c="white"
                                size="xl"
                                fw={800}
                                className={classes.textFont}>
                                    {formatCurrency(Number(repaymentAmount))} 
                                </Text>
                                <Text
                                    c="white"
                                    fw={800}
                                    size="xl">
                                    per month
                                </Text>
                                </>
                            )}
                            
                        </Group>
                     </Center>
                </Grid.Col>

                <Grid.Col span={12} mt="xs">
                    <Center>
                    <motion.div
                       whileHover={{ scale: 1.2 }}
                       whileTap={{ scale: 0.8 }}>
                        <Button variant="outline" 
                                color="white" 
                                size="lg" 
                                radius="xl"
                                rightSection={<IconEdit color="white"/>}
                                onClick={handleEdit}>
                                Edit
                        </Button>
                    </motion.div>
                   </Center>
                </Grid.Col>

            </Grid>

        </div>
    )
}