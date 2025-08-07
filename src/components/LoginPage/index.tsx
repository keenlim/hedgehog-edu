'use client';
import { Box, Button, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import classes from './LoginPage.module.css';
import Image from "next/image";
import { motion } from 'motion/react';
import { useForm } from "@mantine/form";


export function LoginPage() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          code: '',
        },
    
        validate: {
          code: (value) => (value.length < 2),
        },
      });
    return (
        <form onSubmit={form.onSubmit(console.log)}>
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
                        size="lg"
                        radius="md">
                        <Text size="xl" fw={600} m="xl">
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
    )
}