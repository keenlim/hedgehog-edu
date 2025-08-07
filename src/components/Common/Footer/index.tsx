'use client';

import { Button, Group } from "@mantine/core";
import classes from './Footer.module.css';
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from 'next/navigation';
import React from "react";

interface FooterProps {
    handleCalculation: () => void;
    isCalculationForm: boolean;
    children?: React.ReactNode;
}

export function Footer({ 
    handleCalculation,
    isCalculationForm,
 }: FooterProps) {
    const router = useRouter();

    const handleBack = () => {
        router.replace("/dashboard", { scroll: false });
    }
    return (
        <div className={classes.footer}>
            <Group justify="space-between">
                <Button 
                    variant="outline" 
                    color="teal" 
                    size="md" 
                    radius="xl"
                    onClick = {handleBack}
                >
                    Exit
                </Button>
                {isCalculationForm && (
                    <Button
                    rightSection={<IconChevronRight />}
                    variant="filled"
                    color="teal"
                    size="md"
                    radius="xl"
                    onClick={handleCalculation}
                    >
                    Calculate 
                </Button>
                )}
            </Group>
        </div>
    )
}