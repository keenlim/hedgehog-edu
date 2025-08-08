'use client'

  import {
    Box,
    Button,
    Group,
    Title,
  } from '@mantine/core';
  import classes from './HeaderMegaMenu.module.css';
  import Image from 'next/image';
import { motion, Variants } from 'motion/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
  
  export function HeaderMegaMenu() {
    const router = useRouter();
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

    async function handleLogout() {
      try {
        setLoading(true);
        await fetch('/api/logout', { method: 'POST' });
      } finally {
        setLoading(false);
        router.replace('/login');
      }
    }
  
  
    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}>
        <Box>
          <header className={classes.header}>
            <Group justify="flex-start" h="100%">
              <Image src="/hedhehog_logo.png" height={75} width={75} alt="Logo of CPF" />
              <Group h="100%">
                <Title className={classes.title}>Education Financing</Title>
              </Group>
            </Group>
            <Button 
              className={classes.logoutBtn} 
              onClick={handleLogout}
              variant="outline"
              color="#10605f">
                Log out
            </Button>
          </header>
        </Box>
      </motion.div>
    );
  }