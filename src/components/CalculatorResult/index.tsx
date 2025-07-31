import { Button, Center, Divider, Grid, Space, Text, Title } from '@mantine/core';
import classes from './CalculatorResult.module.css';
import { formatCurrency } from '@/utils/format';
import { IconEdit, IconPlus } from '@tabler/icons-react';

interface CalculaterResultProps {
    cpfMonthlyInstalment?: number;
    cpfTotalRepaymentAmount?: number;
    tflMonthlyInstalment?: number;
    tflTotalRepaymentAmount?: number;
    tflPrincipalAmount?: number;
    tflCashAmount?: number;
    handleEdit?: () => void;
}

export function CalculatorResultDesktop({
    cpfMonthlyInstalment,
    cpfTotalRepaymentAmount,
    tflMonthlyInstalment,
    tflTotalRepaymentAmount,
    tflPrincipalAmount,
    tflCashAmount,
    handleEdit,
}: CalculaterResultProps = {
}) {
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
                        <Text c="white" fw={500} size="lg" px="xs">Total payment amount *</Text>
                    } labelPosition="center" />
                </Grid.Col>

                <Grid.Col span={6}>
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
                </Grid.Col>

                <Grid.Col span={6}>
                    <Center pb="sm">
                        <Title size="h1" className={classes.amountText}>
                            {tflTotalRepaymentAmount ? formatCurrency(tflTotalRepaymentAmount): 'NA'}
                        </Title>
                    </Center>   
                    <Center pb="xs">
                        <Text size="md" c="#f6d594" className={classes.smallerText}>
                            {tflPrincipalAmount ? `90% Loan Coverage: ${formatCurrency(tflPrincipalAmount)}` : 'NA'}
                        </Text>
                        <IconPlus size={24} color="#f6d594" className={classes.iconPlus} />
                        <Text size="md" c="#f6d594">
                            {tflCashAmount ? `10% Cash: ${formatCurrency(tflCashAmount)}` : 'NA'}
                        </Text>
                    </Center>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Divider className="divider" my="md" size="md" label={
                        <Text c="white" fw={500} size="lg" px="xs">Monthly Instalment *</Text>
                    } labelPosition="center" />
                </Grid.Col>

                <Grid.Col span={6}>
                    <Center>
                        <Title size="h1" className={classes.amountText}>
                            {cpfMonthlyInstalment ? formatCurrency(cpfMonthlyInstalment): 'NA'}
                        </Title>
                    </Center>   
                </Grid.Col>

                <Grid.Col span={6}>
                    <Center>
                        <Title size="h1" className={classes.amountText}>
                            {tflMonthlyInstalment ? formatCurrency(tflMonthlyInstalment): 'NA'}
                        </Title>
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