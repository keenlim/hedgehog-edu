'use client';

import { 
    Button, 
    Center, 
    Group,
    Space,
    Text,
    Title
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import classes from './CalculatorBanner.module.css';
import { useRouter } from 'next/navigation';

export function CalculatorBanner() {
    const router = useRouter();

    return (
        <div className={classes.banner}>
            <Group>
                <Button leftSection={<IconChevronLeft />} 
                        variant="transparent" 
                        color="rgba(255, 255, 255, 1)"
                        onClick = {() => router.replace("/", { scroll: false})}>
                    Loan Comparison
                </Button>
            </Group>
            <Space h="lg" /> 
            <Text size="md" c="white" fw={500} tt="uppercase" ta="center">education financing</Text>
            <Space h="md" /> 
            <Title className={classes.text} order={2} c="white" fw={800} ta="center">Education Loan Calculator</Title>
        </div>
        
    )
}