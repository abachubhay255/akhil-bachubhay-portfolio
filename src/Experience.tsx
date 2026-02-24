import {
  Timeline,
  Text,
  Paper,
  Group,
  ThemeIcon,
  SimpleGrid,
  Avatar,
} from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";
import avanade from "/avanade-logo.svg";
import sas from "/sas-logo.svg";

export function Experience() {
  return (
    <Timeline ml="auto" mr="auto" bulletSize={45} active={100} color="dark">
      {experienceData.map(({ title, date, stats, src }) => (
        <Timeline.Item
          key={title}
          title={title}
          bullet={<Avatar size={30} src={src} />}
        >
          <Text size="xs" c="dimmed" mt={4}>
            {date}
          </Text>
          <SimpleGrid mt="lg" cols={{ base: 1, sm: 4 }}>
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                direction={stat.direction as "up" | "down"}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </SimpleGrid>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

const experienceData = [
  {
    title: "Full Stack Software Engineer, Avanade",
    date: "Nov 2021 - Present",
    src: avanade,
    stats: [
      {
        title: "Tree Node Rendering",
        direction: "up",
        value: "1,000,000+",
        description: (
          <Text c="dimmed" fz="sm">
            Onboarded <Metric value="10+" /> new enterprises through a{" "}
            <Metric value="5x" /> increase in rendering capabilities
          </Text>
        ),
      },
      {
        title: "Dashboard Tile Types",
        direction: "up",
        value: "15+",
        description: (
          <Text c="dimmed" fz="sm">
            Comprehensive dashboarding UI, strengthening data visualization and
            user interaction
          </Text>
        ),
      },
      {
        title: "User Onboarding Time",
        direction: "down",
        value: "30%",
        description: (
          <Text c="dimmed" fz="sm">
            Azure AI Foundry chatbot, <Metric value="25%" /> faster dashboard
            authoring
          </Text>
        ),
      },
      {
        title: "Query Performance",
        direction: "up",
        value: "40%",
        description: (
          <Text c="dimmed" fz="sm">
            Azure PostgreSQL data layer, <Metric value="25%" isRed /> memory
            reduction
          </Text>
        ),
      },
      {
        title: "i18n Accessibility",
        direction: "up",
        value: "8+ Clients",
        description: (
          <Text c="dimmed" fz="sm">
            Led internationalization pipeline, aiding accessibility across
            regions
          </Text>
        ),
      },
      {
        title: "Expression Processing",
        direction: "up",
        value: "25%",
        description: (
          <Text c="dimmed" fz="sm">
            Coding copilot capabilities via Azure OpenAI
          </Text>
        ),
      },
    ],
  },
  {
    title: "Software Engineer, SAS",
    date: "Intern 2019/20, May 2021 - Nov 2021",
    src: sas,
    stats: [
      {
        title: "Simulation Data Points",
        direction: "up",
        value: "5,000,000+",
        description: (
          <Text c="dimmed" fz="sm">
            Generated via intuitive UIs and RESTful services
          </Text>
        ),
      },
      {
        title: "Simulation Creation Time",
        direction: "down",
        value: "50%",
        description: (
          <Text c="dimmed" fz="sm">
            Patched <Metric value="50+" /> major bugs, efficient stress testing
          </Text>
        ),
      },
      {
        title: "Application Performance",
        direction: "up",
        value: "20%",
        description: (
          <Text c="dimmed" fz="sm">
            Code refactoring and Azure Storage Queues integration
          </Text>
        ),
      },
    ],
  },
];

type StatCardProps = {
  title: string;
  direction: "up" | "down";
  value: string;
  description: React.ReactNode;
};

function StatCard({ title, direction, value, description }: StatCardProps) {
  const isUp = direction === "up";
  const DiffIcon = isUp ? IconArrowUpRight : IconArrowDownRight;

  return (
    <Paper withBorder p="md" radius="md" key={title}>
      <Group justify="apart">
        <div>
          <Text
            c="dimmed"
            tt="uppercase"
            fw={700}
            fz="xs"
            style={{ fontFamily: `Greycliff CF, var(--mantine-font-family)` }}
          >
            {title}
          </Text>
          <Text fw={700} fz="lg">
            {value}
          </Text>
        </div>
        <ThemeIcon
          color="gray"
          variant="light"
          style={{
            color: isUp
              ? "var(--mantine-color-teal-6)"
              : "var(--mantine-color-red-6)",
          }}
          size={38}
          radius="md"
          ml="auto"
        >
          <DiffIcon size="1.8rem" stroke={1.5} />
        </ThemeIcon>
      </Group>
      {description}
    </Paper>
  );
}

function Metric({ value, isRed }: { value: string; isRed?: boolean }) {
  return (
    <Text component="span" c={isRed ? "red" : "teal"} fw={700}>
      {value}
    </Text>
  );
}
