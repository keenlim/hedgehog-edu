'use client';
import { Box, Button, Notification, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import classes from './LoginPage.module.css';
import Image from "next/image";
import { motion, Variants } from 'motion/react';
import { useForm } from "@mantine/form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";


export function LoginPage() {
    const router = useRouter();
    const sp = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const container: Variants = {
        hidden: {x: -100, opacity: 0},
        show: {
            x: 0,
            opacity: 1, 
            transition: {
                // stagger children by 0.2s
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeInOut"
            },
        },
      };

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          code: '',
        },
    
        validate: {
          code: (value) => (value.length < 2),
        },
      });

      const onSubmit = form.onSubmit(async ({ code }) => {
        setError(null);
        setLoading(true);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data?.error || "Login failed. Please try again.");
                return;
            }

            // after res.ok in your login page
            const r = sp.get('redirect');
            const redirect = r && r !== '/' ? r : '/dashboard';
            router.replace(redirect);
            router.refresh();
        } finally {
            setLoading(false);
        }
      });


    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={container}>
        <form onSubmit={onSubmit}>
            {error && (
                <div>
                    <Notification 
                        color="red"
                        className={classes.notification}
                        withCloseButton={false}>
                        {error}
                    </Notification>
                </div>
                
            )}
            <Box className={classes.box}>
                <Image src="/hedhehog_logo.png" height={75} width={75} alt="Logo of CPF" />
                <div>
                    <Title order={1} mt="sm" ta="center">
                        Enter Code
                    </Title>
                    <Text size="lg" ta="center" c="dimmed">
                        Enter the unique code to access
                    </Text>
                    <div className={classes.inputContainer} style={{ marginTop: 16 }}>
                        <PasswordInput
                            variant="filled"
                            placeholder="Enter Your Code..."
                            size="lg"
                            radius="sm"
                            classNames={{input: classes.input}}
                            key={form.key('code')}
                            {...form.getInputProps('code')}
                        />
                    </div>
                    <Text size="xs" ta="center" c="dimmed" mt="sm">
                        E.g. QUIZ1234, JOIN1234
                    </Text>   
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                        <Button 
                            type="submit"
                            fullWidth
                            variant="gradient"
                            gradient={{ from: 'teal', to: 'indigo', deg: 215 }}
                            mt="lg"
                            size="md"
                            radius="md">
                            <Text size="lg" fw={600} m="xl">
                                Join Session
                            </Text>
                        </Button>   
                    </motion.div>
                    <Text size="xs" ta="center" c="dimmed" mt="sm">
                        Don't have a code? Contact the host.
                    </Text>  
                </div>
            </Box>         
        </form>
        </motion.div>
    )
}