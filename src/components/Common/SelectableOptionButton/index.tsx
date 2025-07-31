'use client';

import { UnstyledButton, Text } from '@mantine/core';
import { IconCircle, IconCircleFilled, IconSquareRoundedCheck, IconSquareRoundedCheckFilled } from '@tabler/icons-react';
import classes from './SelectableOptionButton.module.css';

interface Props {
    label: string;
    selected?: boolean;
    onClick?: () => void;
}

export function SelectableOptionButton({ label, selected, onClick} : Props) {
    return (
        <UnstyledButton
            mb="md"
            className={`${classes.root} ${selected ? classes.selected : ''}`}
            onClick={onClick}
        >
            {selected ? (
                <IconSquareRoundedCheckFilled 
                    size={24} 
                    className={`${classes.icon} ${selected ? classes.selected_icon : ''}`} />
            ) : (
                <IconCircle 
                    size={24} 
                    className={`${classes.icon} ${selected ? classes.selected_icon : ''}`} />
            )}
            <Text size="md">{label}</Text>
        </UnstyledButton>
    )
}