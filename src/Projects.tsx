import {
  Badge,
  Card,
  Group,
  Button,
  Text,
  SimpleGrid,
  List,
  Stack,
  Divider,
} from "@mantine/core";
import {
  IconBallAmericanFootball,
  IconBarbell,
  IconBrandGithub,
  IconMovie,
  IconWorldWww,
} from "@tabler/icons-react";

export function Projects() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {data.map((d) => (
        <BadgeCard key={d.title} {...d} />
      ))}
    </SimpleGrid>
  );
}

type Project = {
  title: string;
  bullets: string[];
  skills: string[];
  src: string;
  icon: React.ReactNode;
  demo?: string;
};

function BadgeCard({ title, bullets, skills, src, icon, demo }: Project) {
  const technologies = skills.map((skill, i) => (
    <Badge key={skill} variant="light" color={i % 2 === 0 ? "gray" : "blue"}>
      {skill}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" bg="dark.7">
      <Stack gap="xs">
        <Card.Section
          px="md"
          pb="sm"
          mt={1}
          style={{ borderBottom: "1px solid var(--mantine-color-dark-4)" }}
        >
          <Group justify="apart">
            {icon}
            <Text fz="lg" fw={500}>
              {title}
            </Text>
          </Group>
        </Card.Section>
        <List size="sm" pr="sm" h={{base: 175, sm: 175, lg: 150}}>
          <Stack gap="xs">
            {bullets.map((bullet, i) => (
              <List.Item key={i}>{bullet}</List.Item>
            ))}
          </Stack>
        </List>

        <Divider label="Technologies" labelPosition="center" />

        <Group gap={7} align="start" h={75}>
          {technologies}
        </Group>

        <Divider />

        <Group>
          {demo && (
            <Button
              variant="gradient"
              flex={1}
              component="a"
              href={demo}
              target="_blank"
              leftSection={<IconWorldWww size={18} />}
            >
              View Demo
            </Button>
          )}
          <Button
            fullWidth={demo ? false : true}
            color="#141414"
            component="a"
            href={src}
            target="_blank"
            leftSection={<IconBrandGithub size={18} />}
          >
            View on GitHub
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}

const data = [
  {
    title: "Redzone Insights",
    bullets: [
      "Developed an NFL stats and betting app.",
      "Integrated real-time scores, detailed standings, and a unique parlays section.",
      "Implemented player projections powered by OpenAI API.",
      "Deployed on Azure Web Apps and uses Azure Blob Storage for caching.",
    ],
    skills: [
      "TypeScript",
      "Vite",
      "React",
      "Node.js",
      "Express",
      "GraphQL",
      "OpenAI API",
      "Azure",
      "Mantine UI",
    ],
    src: "https://github.com/abachubhay255/redzone-insights",
    icon: <IconBallAmericanFootball />,
    demo: "https://redzone-insights.akhilbachubhay.com/",
  },
  {
    title: "GymBro",
    bullets: [
      "Developed a fitness-centric social media mobile app.",
      "Implemented features such as user-generated posts, profile management, and real-time messaging.",
      "Designed an intuitive and engaging user interface with UI Kitten.",
    ],
    skills: ["React Native", "TypeScript", "Javascript", "UI Kitten"],
    src: "https://github.com/abachubhay255/GymBro",
    icon: <IconBarbell />,
  },
  {
    title: "Movie Paradise",
    bullets: [
      "Created a web app with secure user management and CRUD functionalities for movies and lists.",
      "Implemented advanced search capabilities using TheMovieDB API.",
      "Utilized Angular and Material UI for frontend design and Node.js with Express for backend.",
    ],
    skills: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Material UI",
    ],
    src: "https://github.com/abachubhay255/MovieParadiseProject",
    icon: <IconMovie />,
  },
];
