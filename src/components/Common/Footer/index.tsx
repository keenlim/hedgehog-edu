'use client';

import { Button, Group } from "@mantine/core";
import classes from './Footer.module.css';
import { IconChevronRight } from "@tabler/icons-react";

export function Footer() {
    return (
        <div className={classes.footer}>
            <Group justify="space-between">
                <Button 
                    variant="outline" 
                    color="teal" 
                    size="md" 
                    radius="xl"
                    // TODO: onclick function
                >
                    Exit
                </Button>
                <Button
                    rightSection={<IconChevronRight />}
                    variant="filled"
                    color="teal"
                    size="md"
                    radius="xl"
                    //TODO: onclick function
                    >
                    Calculate 
                </Button>
            </Group>
        </div>
    )
}