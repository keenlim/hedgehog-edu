"use client";

import Link from "next/link";
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Paper,
  Space,
  Table,
  Text,
  Title,
  Accordion,
} from "@mantine/core";
import classes from "./LandingPage.module.css";

import {
  ArticleCarousel,
  type ArticleItem,
} from "@/components/Common/ArticleCarousel";
import { useEffect } from "react";
import { IconArrowNarrowRight, IconCalculator } from "@tabler/icons-react";

import { motion, Variants } from "motion/react";

const ARTICLES: ArticleItem[] = [
  {
    id: "a1",
    href: "https://www.cpf.gov.sg/member/infohub/educational-resources/is-your-money-still-your-money-as-a-parent",
    image: "/images/articles/a1.jpg",
    category: "Retiring well",
    title: "Is your money still your money? As a parent",
    excerpt:
      "Will everything you earn go towards your child? Two young parents share their experience, including how CPF supports their family's goals.",
    date: "21 June 2024",
    readTime: "6-minute read",
  },
  {
    id: "a2",
    href: "https://www.cpf.gov.sg/member/infohub/educational-resources/planning-for-retirement-and-financing-her-child-education",
    image: "/images/articles/a2.jpg",
    category: "Retiring well",
    title: "Planning for retirement and financing her child's education",
    excerpt:
      "How a 53-year-old mother made a smart financing decision by leaving her CPF savings untouched.",
    date: "05 June 2023",
    readTime: "4-minute read",
  },
  {
    id: "a3",
    href: "https://www.cpf.gov.sg/member/infohub/educational-resources/financial-planning-in-your-40s",
    image: "/images/articles/a3.jpg",
    category: "Retiring well",
    title: "Financial planning in your 40s",
    excerpt:
      "Create a financial plan for your 40s and meet your goals, like financing your retirement or providing for your family.",
    date: "17 Nov 2023",
    readTime: "6-minute read",
  },
  {
    id: "a4",
    href: "https://www.cpf.gov.sg/member/infohub/educational-resources/small-wins-to-big-goals-for-sandwich-generation",
    image: "/images/articles/a4.jpg",
    category: "Retiring well",
    title: "Small wins for big goals for the sandwich generation:",
    excerpt:
      "Create a financial plan for your 40s and meet your goals, like financing your retirement or providing for your family.",
    date: "11 Sep 2023",
    readTime: "6-minute read",
  },
  {
    id: "a5",
    href: "https://www.cpf.gov.sg/member/infohub/educational-resources/3-ways-to-help-your-parents-plan-their-retirement",
    image: "/images/articles/a5.jpg",
    category: "Retiring well",
    title: "3 ways to help your parents plan their retirement",
    excerpt:
      "Practical ways to support your parents’ retirement planning — from starting the right conversations to taking concrete actions together.",
    date: "18 July 2025",
    readTime: "5-minute read",
  },
  {
    id: "a6",
    href: "https://www.cpf.gov.sg/member/infohub/educational-resources/you-should-talk-to-your-parents-about-money",
    image: "/images/articles/a6.jpg",
    category: "Retiring well",
    title: "Why you should talk to your parents about their money",
    excerpt:
      "How to approach money conversations with your parents and why starting early helps your whole family plan better.",
    date: "22 Nov 2024",
    readTime: "4-minute read",
  },
  {
    id: "a7",
    href: "https://www.cpf.gov.sg/member/infohub/educational-resources/evading-the-sandwich-generation-pitfalls-in-6-steps",
    image: "/images/articles/a7.jpg",
    category: "Retiring well",
    title: "Evading the sandwich generation pitfalls in 6 steps",
    excerpt:
      "Six practical steps to avoid common pitfalls faced by the sandwich generation while balancing family and retirement goals.",
    date: "27 Oct 2023",
    readTime: "6-minute read",
  },
];

export function LandingPageComponent() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // only on mount

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

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
    >
      <Container size="lg" className={classes.page}>
        <nav className={classes.anchorNav}>
          <Anchor href="#consider" className={classes.anchorLink}>
            What to consider
          </Anchor>
          <Anchor href="#options" className={classes.anchorLink}>
            Options
          </Anchor>
          <Anchor href="#resources" className={classes.anchorLink}>
            Resources
          </Anchor>
          <Anchor href="#faqs" className={classes.anchorLink}>
            FAQs
          </Anchor>
        </nav>

        <Space h="lg" />
        <Text c="dimmed">
          Financing education costs can feel overwhelming. You may have questions
          on how to budget for your tertiary education and what are the financing
          options available. This page provides a detailed comparison between the
          CPF Education Loan and MOE Tuition Fee Loan to identify the most
          suitable funding solution for your academic journey.
        </Text>

        <section id="consider" className={classes.section}>
          <Title order={4} mb="md" ta="center">
            WHAT TO CONSIDER
          </Title>

          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                withBorder
                radius="md"
                padding="lg"
                style={{
                  height: 130,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Text className={classes.cardTitle}>
                    Consider all the financing options that are available for you
                  </Text>
                  <Space h="xs" />
                  <Text c="dimmed" size="sm">
                    Are you eligible for any additional financial assistance or
                    scholarships?
                  </Text>
                </div>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                withBorder
                radius="md"
                padding="lg"
                style={{
                  height: 130,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Text className={classes.cardTitle}>
                    Determine if using lenders’ savings impacts their retirement
                    plans
                  </Text>
                  <Space h="xs" />
                  <Text c="dimmed" size="sm">
                    Do they have sufficient CPF savings for them to meet their
                    retirement needs?
                  </Text>
                </div>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                withBorder
                radius="md"
                padding="lg"
                style={{
                  height: 130,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Text className={classes.cardTitle}>
                    Work out your optimal loan repayment period
                  </Text>
                  <Space h="xs" />
                  <Text c="dimmed" size="sm">
                    Which repayment schedule better suits your anticipated
                    financial situation?
                  </Text>
                </div>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                withBorder
                radius="md"
                padding="lg"
                style={{
                  height: 130,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Text className={classes.cardTitle}>
                    Assess your repayment options and the associated risks
                  </Text>
                  <Space h="xs" />
                  <Text c="dimmed" size="sm">
                    Which option provides the flexibility you need when
                    circumstances change?
                  </Text>
                </div>
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
                      Up to 100% of subsidised tuition fees, subject to Available
                      Withdrawal Limit in CPF OA
                    </>
                  }
                  right={
                    <>
                      Up to 90% of subsidised tuition fees (for AU) and up to 75%
                      (for Poly)
                    </>
                  }
                />

                <Row
                  feature="Interest Rate"
                  left="2.5%"
                  right="3 months SORA + 1.5 percentage point"
                />

                <Row
                  feature="Interest Accrual"
                  left={
                    <>
                      Interest accrual begins from the month loan is taken out
                      from CPF OA
                    </>
                  }
                  right={
                    <>
                      Interest‑free during course of study, interest accrues after
                      graduation
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
                      An administrative fee of $10 (excludes GST) is charged on
                      each deduction made from OA
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
          <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <Button
              component={Link}
              href="/calculate"
              size="xl"
              radius="md"
              color="#00665C"
              className={classes.bigButton}
              leftSection={<IconCalculator size={64} />}
              rightSection={<IconArrowNarrowRight size={64}/>}> 
              Comparison Calculator
            </Button>
          </motion.div>
          </Group>

          <Space h="xl" />

          <Title order={4} mb="md" ta="center">
            Need more information?
          </Title>
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                withBorder
                radius="md"
                padding="lg"
                style={{
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Title order={6} mb="xs">
                    CPF Education Loan
                  </Title>
                  <Text size="sm" c="dimmed">
                    Find out more about CPF EDL in our brochure
                  </Text>
                </div>
                <Anchor
                  href="https://www.cpf.gov.sg/service/article/what-is-the-cpf-education-loan-scheme"
                  className={classes.resourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Anchor>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                withBorder
                radius="md"
                padding="lg"
                style={{
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Title order={6} mb="xs">
                    MOE Tuition Fee Loan
                  </Title>
                  <Text size="sm" c="dimmed">
                    Find out more about MOE TFL on their website
                  </Text>
                </div>
                <Anchor
                  href="https://www.moe.gov.sg/financial-matters/government-loan-schemes/tuition-fee-loan"
                  className={classes.resourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Anchor>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                withBorder
                radius="md"
                padding="lg"
                style={{
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Title order={6} mb="xs">
                    Forms and Applications
                  </Title>
                  <Text size="sm" c="dimmed">
                    Find the relevant application forms and documents you’ll need
                  </Text>
                </div>
                <Anchor
                  href="https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/apply-for-cpf-education-loan"
                  className={classes.resourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
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

          <Title order={5} mb="sm" ta="center">
            Common questions
          </Title>

          <Accordion
            variant="default"
            radius="md"
            chevronPosition="right"
            transitionDuration={200}
            styles={{
              item: {
                border: "1px solid #C4D7D1",
                borderRadius: "8px",
                marginBottom: "12px",
              },
              control: {
                padding: "16px",
                fontSize: "16px",
                fontWeight: 500,
              },
              chevron: {
                color: "#00544F",
              },
            }}
          >
            <Accordion.Item value="repayment">
              <Accordion.Control>
                Does CPF Board allow later repayment compared to other loan
                options?
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  The CPF Education Loan requires borrowers to commence repayment one year after graduation or termination of studies, whichever is earlier. This is a fixed timeline that applies to all borrowers.
                </p>
                <p>
                  In comparison, the MOE Tuition Fee Loan offers more flexible repayment options:
                </p>
                <ul>
                  <li>For autonomous university students, repayment can begin within 2 years after graduation.</li>
                  <li>For polytechnic students, repayment can begin within 1 year after graduation.</li>
                </ul>
                <p>
                  For the CPF Education Loan, while deferment of repayment is possible for scenarios such as serving National Service (NS), interest will still continue to accrue.
                  Meanwhile, for the MOE Tuition Fee Loan, you may appeal for deferment of repayment and interest due to serving NS, further studies, or financial difficulties.
                  Interest will not accrue during deferment.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="instalments">
              <Accordion.Control>
                Does CPF Education Loan offers lower monthly instalments compared
                to other loan options?
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  Both the CPF Education Loan and the MOE Tuition Fee Loan have set the same minimum monthly instalment amount of <strong>$100</strong>. However, the actual monthly instalment amount for both loans will be calculated based on several factors:
                </p>

                <ul>
                  <li>Total loan amount</li>
                  <li>Chosen repayment period</li>
                  <li>Applicable interest rate</li>
                </ul>

                <p>
                  Borrowers can use our{' '}
                  <Anchor href="/calculate" underline="hover">
                    Education Loan Comparison Calculator
                  </Anchor>{' '}
                  to compute the estimated monthly instalment for both loans based on their circumstances.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="eduloan">
              <Accordion.Control>
                How does the education loan repayment work?
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  For the CPF Education Loan, the borrower has to start repaying the loan one year after graduation or termination of studies, whichever is earlier.
                  The borrower will receive a notification on the loan repayment details generally about three months before it commences.
                  If the borrower intends to start the repayment earlier, they can contact us through{' '}
                  <Anchor
                    href="https://www.cpf.gov.sg/service/write-to-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    Write to us
                  </Anchor>{' '}
                  using their Singpass.
                </p>

                <p>
                  Repayment must be made in cash, either in one lump sum or via monthly instalments over a maximum of 12 years.
                  The monthly instalment rate will be computed based on the loan amount and chosen repayment period.
                  The borrower cannot use their own CPF savings to make repayments to the lender’s CPF Account.
                </p>

                <p>
                  Borrowers are encouraged to repay the full loan as early as possible to reduce interest payable and to allow the account holder to use their CPF monies for housing and retirement needs.
                  This can be done by making lump sum repayments or choosing a higher monthly instalment amount via{' '}
                  <Anchor
                    href="https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/manage-education-loan-repayments"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    Manage Education Loan Repayments
                  </Anchor>.
                </p>

                <p>
                  Borrowers can use our{' '}
                  <Anchor href="/calculate" underline="hover">
                    Education Loan Comparison Calculator
                  </Anchor>{' '}
                  to compute how long it will take to repay the loan or to work out a suitable loan repayment plan.
                </p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </section>
        <section className={classes.section}>
          <ArticleCarousel items={ARTICLES} />
        </section>
      </Container>
    </motion.div>
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
