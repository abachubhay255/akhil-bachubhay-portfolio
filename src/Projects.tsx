import { Badge, Card, Group, Button, Text, SimpleGrid } from "@mantine/core";
import { IconBarbell, IconBrandGithub, IconMovie } from "@tabler/icons-react";

export function Projects() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }}>
      {data.map((d) => (
        <BadgeCard key={d.title} {...d} />
      ))}
    </SimpleGrid>
  );
}

type Project = {
  title: string;
  description: string;
  skills: string[];
  src: string;
  icon: React.ReactNode;
};

function BadgeCard({ title, description, skills, src, icon }: Project) {
  const technologies = skills.map((skill, i) => (
    <Badge key={skill} variant="light" color={i % 2 === 0 ? "gray" : "blue"}>
      {skill}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" bg="dark.7">
      <Card.Section
        px="md"
        pb="md"
        mt={1}
        style={{ borderBottom: "1px solid var(--mantine-color-dark-4)" }}
        h="100%"
      >
        <Group justify="apart">
          {icon}
          <Text fz="lg" fw={500}>
            {title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section
        px="md"
        pb="md"
        style={{ borderBottom: "1px solid var(--mantine-color-dark-4)" }}
      >
        <Group gap={7} mt="xs">
          {technologies}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button
          fullWidth
          color="#141414"
          component="a"
          href={src}
          target="_blank"
          leftSection={<IconBrandGithub size={18} />}
        >
          View on GitHub
        </Button>
      </Group>
    </Card>
  );
}

const data = [
  {
    title: "GymBro",
    description:
      "Developed a dynamic front-end mobile application designed as a fitness-centric social media platform. This project features user-generated posts, comprehensive profile management, and real-time messaging to foster community engagement and support among fitness enthusiasts.",
    skills: ["React Native", "TypeScript", "Javascript", "UI Kitten"],
    src: "https://github.com/abachubhay255/GymBro",
    icon: <IconBarbell />,
  },
  {
    title: "Movie Paradise",
    description:
      "Developed an organizational movie web app featuring secure user management, CRUD functionalities for movies and lists, and advanced search capabilities using TheMovieDB API.",
    skills: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    src: "https://github.com/abachubhay255/MovieParadiseProject",
    icon: <IconMovie />,
  },
];
