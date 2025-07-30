'use client'

  import {
    Box,
    Group,
    Title,
  } from '@mantine/core';
  import classes from './HeaderMegaMenu.module.css';
  import Image from 'next/image';
  
  export function HeaderMegaMenu() {
  
    return (
      <Box>
        <header className={classes.header}>
          <Group justify="flex-start" h="100%">
            <Image src="/cpf-logo.png" height={80} width={80} alt="Logo of CPF" />
            <Group h="100%" gap={0} visibleFrom="sm" mx="auto">
              <Title className={classes.title}>Education Financing</Title>
            </Group>
          </Group>
        </header>
      </Box>
    );
  }