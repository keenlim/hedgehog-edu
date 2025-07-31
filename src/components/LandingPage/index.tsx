'use client';

import Link from "next/link";
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  List,
  Paper,
  Space,
  Table,
  Text,
  Title,
} from "@mantine/core";
import classes from "./LandingPage.module.css";

export function LandingPageComponent() {
  return (
    <Container size="lg" className={classes.page}>
      <nav className={classes.anchorNav}>
        <Anchor href="#consider" className={classes.anchorLink}>What to consider</Anchor>
        <Anchor href="#options" className={classes.anchorLink}>Options</Anchor>
        <Anchor href="#resources" className={classes.anchorLink}>Resources</Anchor>
        <Anchor href="#faqs" className={classes.anchorLink}>FAQs</Anchor>
      </nav>

      <Space h="lg" />
      <Text c="dimmed">
        Financing education costs can feel overwhelming. You may have questions on how to
        budget for your tertiary education and what are the financing options available. This
        page provides a detailed comparison between the CPF Education Loan and MOE Tuition
        Fee Loan to identify the most suitable funding solution for your academic journey.
      </Text>

      <section id="consider" className={classes.section}>
        <Title order={4} mb="md" ta="center">
          WHAT TO CONSIDER
        </Title>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder radius="md" padding="lg">
              <Text className={classes.cardTitle}>
                Consider all the financing options that are available for you
              </Text>
              <Space h="xs" />
              <Text c="dimmed" size="sm">
                Are you eligible for any additional financial assistance or scholarships?
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder radius="md" padding="lg">
              <Text className={classes.cardTitle}>
                Determine if using lenders’ savings impacts their retirement plans
              </Text>
              <Space h="xs" />
              <Text c="dimmed" size="sm">
                Do they have sufficient CPF savings for them to meet their retirement needs?
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder radius="md" padding="lg">
              <Text className={classes.cardTitle}>
                Work out your optimal loan repayment period
              </Text>
              <Space h="xs" />
              <Text c="dimmed" size="sm">
                Which repayment schedule better suits your anticipated financial situation?
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder radius="md" padding="lg">
              <Text className={classes.cardTitle}>
                Assess your repayment options and the associated risks
              </Text>
              <Space h="xs" />
              <Text c="dimmed" size="sm">
                Which option provides the flexibility you need when circumstances change?
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </section>

      <section id="options" className={classes.section}>
        <Title order={4} mb="md" ta="center">
          OPTIONS
        </Title>

        <Paper withBorder radius="md" p="md">
          <Table verticalSpacing="md" striped highlightOnHover>
            <Table.Thead className={classes.tableStickyHead}>
              <Table.Tr>
                <Table.Th style={{ width: "28%" }}>Scheme feature</Table.Th>
                <Table.Th>CPF Education Loan</Table.Th>
                <Table.Th>MOE Tuition Fee Loan</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              <Row
                feature="Loan Coverage"
                left={
                  <>
                    Up to 100% of subsidised tuition fees, subject to Available Withdrawal
                    Limit in CPF OA
                  </>
                }
                right={
                  <>
                    Up to 90% of subsidised tuition fees (for AU) and up to 75% (for Poly)
                  </>
                }
              />

              <Row feature="Interest Rate" left="2.5%" right="3 months SORA + 1.5 percentage point" />

              <Row
                feature="Interest Accrual"
                left={
                  <>
                    Interest accrual begins from the month loan is taken out from CPF OA
                  </>
                }
                right={
                  <>
                    Interest‑free during course of study, interest accrues after graduation
                  </>
                }
              />

              <Row
                feature="Repayment Start Date"
                left="1 year after graduation"
                right="Within 2 years (for AU) or 1 year (for Poly) after graduation"
              />

              <Row
                feature="Repayment Period"
                left="12 years"
                right={
                  <>
                    20 years (Undergraduate degree)
                    <br />
                    10 years (Diploma)
                  </>
                }
              />

              <Row
                feature="Fees and Charges"
                left={
                  <>
                    An administrative fee of $10 (excludes GST) is charged on each deduction
                    made from OA
                  </>
                }
                right="No additional fees beyond interest and late payment interest charges"
              />

              <Row
                feature="Impact on Lenders’ Retirement"
                left="Reduces the lending CPF member’s retirement savings if repayment is not made promptly"
                right="No impact"
              />
            </Table.Tbody>
          </Table>
        </Paper>
      </section>

      <section id="resources" className={classes.section}>
        <Title order={4} mb="md" ta="center">
          RESOURCES
        </Title>
        <Text ta="center" c="dimmed">
          Choose the financing option that best meets your needs
        </Text>
        <Space h="md" />

        <Group justify="center">
          <Button
            component={Link}
            href="/calculate"
            variant="outline"
            color="teal"
            size="md"
            radius="xl"
          >
            Comparison calculator
          </Button>
        </Group>

        <Space h="xl" />

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder radius="md" padding="lg">
              <Title order={6} mb="xs">
                CPF Education Loan
              </Title>
              <Text size="sm" c="dimmed">
                Find out more about CPF EDL in our brochure
              </Text>
              <Space h="sm" />
              <Anchor
                href="#"
                className={classes.resourceLink}
                onClick={(e) => e.preventDefault()}
              >
                Learn more
              </Anchor>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder radius="md" padding="lg">
              <Title order={6} mb="xs">
                MOE Tuition Fee Loan
              </Title>
              <Text size="sm" c="dimmed">
                Find out more about MOE TFL on their website
              </Text>
              <Space h="sm" />
              <Anchor
                href="#"
                className={classes.resourceLink}
                onClick={(e) => e.preventDefault()}
              >
                Learn more
              </Anchor>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder radius="md" padding="lg">
              <Title order={6} mb="xs">
                Forms and Applications
              </Title>
              <Text size="sm" c="dimmed">
                Find the relevant application forms and documents you’ll need
              </Text>
              <Space h="sm" />
              <Anchor
                href="#"
                className={classes.resourceLink}
                onClick={(e) => e.preventDefault()}
              >
                Browse forms
              </Anchor>
            </Card>
          </Grid.Col>
        </Grid>
      </section>

      <section id="faqs" className={classes.section}>
        <Title order={4} mb="md" ta="center">
          FAQs
        </Title>

        <Paper radius="md" p="xl" withBorder className={classes.note}>
          <Title order={5} mb="sm">
            Common misconceptions
          </Title>
          <List withPadding>
            <List.Item>
              CPF Board allows later repayment compared to other loan options.
            </List.Item>
          </List>
        </Paper>
      </section>
    </Container>
  );
}

function Row({
  feature,
  left,
  right,
}: {
  feature: string;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <Table.Tr>
      <Table.Td style={{ width: "28%", verticalAlign: "top" }}>
        <Text fw={600}>{feature}</Text>
      </Table.Td>
      <Table.Td style={{ verticalAlign: "top" }}>
        <Text size="sm">{left}</Text>
      </Table.Td>
      <Table.Td style={{ verticalAlign: "top" }}>
        <Text size="sm">{right}</Text>
      </Table.Td>
    </Table.Tr>
  );
}
