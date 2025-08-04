'use client'

import { Tooltip } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import styles from './Tooltip.module.css';

interface TooltipInfoProps {
  label: string;
}

export function TooltipInfo({ label }: TooltipInfoProps) {
  return (
    <Tooltip
      label={label}
      withArrow
      position="right"
      multiline
      classNames={{ tooltip: styles.tooltip }}
    >
      <span className={styles.iconWrapper}>
        <IconInfoCircle size={16} />
      </span>
    </Tooltip>
  );
}
