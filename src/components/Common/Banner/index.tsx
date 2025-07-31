'use client';
import { 
    Button, 
    Group,
    Space,
    Text,
    Title
} from "@mantine/core";
import classes from './Banner.module.css';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { IconChevronLeft } from "@tabler/icons-react";

interface BannerProps {
    /*Path to navigate back to (or can be override wiht onBack) */
    backRoute?: string | null;
    /** Label for the back button*/
    backLabel?: string | null;
    /**Optional custom back icon (defaults to ChevronLeft)*/
    backIcon?: ReactNode;
    onBack?: () => void;
    subtitle?: string;
    title?: string;
    children?: ReactNode;
}
export function Banner({
    backRoute,
    backLabel,
    backIcon = <IconChevronLeft />,
    onBack,
    subtitle,
    title,
    children,
}: BannerProps) {
    const router = useRouter();
    const handleBack = () => {
        if (onBack) {
            onBack();
        } else if (backRoute) {
            router.replace(backRoute, { scroll: false });
        }
    }
    return (
        <div className={classes.banner}>
            {backLabel && (backRoute || onBack) && (
                <Group>
                    <Button leftSection={backIcon} 
                            variant="transparent" 
                            color="rgba(255, 255, 255, 1)"
                            onClick = {handleBack}>
                        {backLabel}
                    </Button>
                </Group>
            )}
            
            <Space h="lg" /> 
            {subtitle && (
                <Text size="md" c="white" fw={500} tt="uppercase" ta="center">
                    {subtitle}
                </Text>
            )}
            <Space h="md" /> 
            {title && (
                <Title className={classes.text} order={2} c="white" fw={800} ta="center">
                    {title}
                </Title>
            )}
            
            {children && (
                <div>
                    {children}
                </div>
            )}
            
        </div>
        
    )
}