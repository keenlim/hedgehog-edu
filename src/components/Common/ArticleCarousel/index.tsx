'use client';

import Link from 'next/link';
import { Carousel } from '@mantine/carousel';
import {
  Card,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import classes from './ArticleCarousel.module.css';

export type ArticleItem = {
  id: string;
  href: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

interface Props {
  title?: string;
  items: ArticleItem[];
}

export function ArticleCarousel({ title = 'Related reads', items }: Props) {
  const theme = useMantineTheme();

  // Responsive slide size (1-up on small, 2-up on md, 3-up on lg+)
  const isSm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  let slideSize: string = '33.333%'; // default 3-up
  if (isMd) slideSize = '50%';       // 2-up
  if (isSm) slideSize = '100%';      // 1-up (overrides md when both true)

  return (
    <section className={classes.wrap} id="articles">
      <div className={classes.header}>
        <Text className={classes.kicker}>Articles</Text>
        <Text size="xl" className={classes.title}>{title}</Text>
      </div>

      <Carousel
        withIndicators
        nextControlIcon={<IconChevronRight />}
        previousControlIcon={<IconChevronLeft />}
        slideGap="md"
        slideSize={slideSize}
      >
        {items.map((a) => (
          <Carousel.Slide key={a.id}>
            <Card
              withBorder
              radius="md"
              p="md"
              className={classes.card}
              component={Link}
              href={a.href}
            >
              <div className={classes.image}>
                <Image src={a.image} alt={a.title} radius="md" />
              </div>

              <Stack gap={4}>
                <Text className={classes.badge}>{a.category}</Text>
                <Text className={classes.cardTitle}>{a.title}</Text>
                <Text className={classes.excerpt}>{a.excerpt}</Text>
              </Stack>

              <Group gap="xs" mt="sm" className={classes.meta}>
                <Text>{a.date}</Text>
                <Text>•</Text>
                <Text>{a.readTime}</Text>
              </Group>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}
