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
    title: "Full Stack Developer, Avanade",
    date: "Nov 2021 - Present",
    src: avanade,
    stats: [
      {
        title: "Azure Resource Graph Nodes",
        direction: "up",
        value: "1,000,000+",
        description: (
          <Text c="dimmed" fz="sm">
            <Metric value="5x" /> increase, allowed onboarding of{" "}
            <Metric value="10+" /> new clients
          </Text>
        ),
      },
      {
        title: "Dashboard Tile Types",
        direction: "up",
        value: "15+",
        description: (
          <Text c="dimmed" fz="sm">
            Enhanced data visualization and user customization
          </Text>
        ),
      },
      {
        title: "Record Operation Time",
        direction: "down",
        value: "90%",
        description: (
          <Text c="dimmed" fz="sm">
            Minimized error rate to <Metric value="<1%" isRed />
          </Text>
        ),
      },
      {
        title: "API Search Performance",
        direction: "up",
        value: "300%",
        description: (
          <Text c="dimmed" fz="sm">
            Optimized data retrieval processes
          </Text>
        ),
      },
    ],
  },
  {
    title: "Software Developer, SAS",
    date: "May 2019 - Nov 2021",
    src: sas,
    stats: [
      {
        title: "Simulation Data Points",
        direction: "up",
        value: "5,000,000+",
        description: (
          <Text c="dimmed" fz="sm">
            Stress tested SAS Talon via RESTful services
          </Text>
        ),
      },
      {
        title: "Simulation Creation Time",
        direction: "down",
        value: "50%",
        description: (
          <Text c="dimmed" fz="sm">
            Reduced barriers to entry for new users,{" "}
            <Metric value="50+" isRed /> major bug fixes
          </Text>
        ),
      },
      {
        title: "Data Creation Rate",
        direction: "up",
        value: "500%",
        description: (
          <Text c="dimmed" fz="sm">
            Developed intuitive SPA, <Metric value="12%" /> increase in data
            accuracy
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
