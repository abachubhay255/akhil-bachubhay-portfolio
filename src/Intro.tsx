import {
  Title,
  List,
  ThemeIcon,
  rem,
  Group,
  Button,
  Text,
  Avatar,
} from "@mantine/core";
import {
  IconBulb,
  IconCrown,
  IconPresentation,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./Intro.module.css";
import profilepic from "/profilepicture.jpg";

type IntroProps = {
  onWorkClick: () => void;
  onContactClick: () => void;
};

export function Intro({ onWorkClick, onContactClick }: IntroProps) {
  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          Hi I'm{" "}
          <Text
            variant="gradient"
            inherit
            component="span"
            className={classes.highlight}
          >
            Akhil
          </Text>
          .
        </Title>
        <Text c="dimmed" mt="md">
          I'm a Full Stack Software Engineer with 5+ years of professional
          experience in designing and developing robust software solutions.
          Dedicated to enhancing user experience and optimizing API performance
          through scalable, maintainable code.
        </Text>

        <List mt={30} spacing="md" size="sm">
          <List.Item
            icon={
              <ThemeIcon variant="gradient" size="sm" radius="xl">
                <IconCrown
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <b>Technical Leadership</b> – I drive architecture decisions and
            mentor teammates to deliver high-quality solutions.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon variant="gradient" size="sm" radius="xl">
                <IconUsers
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <b>Cross-functional Collaboration</b> – I work effectively across
            teams to align engineering efforts with business goals.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon variant="gradient" size="sm" radius="xl">
                <IconPresentation
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <b>Stakeholder Management</b> – I communicate clearly with
            stakeholders to translate requirements into impactful features.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon variant="gradient" size="sm" radius="xl">
                <IconBulb
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <b>Analytical Problem Solving</b> – I apply data-driven thinking
            to debug issues and optimize system performance.
          </List.Item>
        </List>

        <Group mt={30}>
          <Button
            variant="gradient"
            radius="xl"
            size="md"
            className={classes.control}
            onClick={onWorkClick}
          >
            Explore Work
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
            onClick={onContactClick}
          >
            Contact Me
          </Button>
        </Group>
      </div>
      <Avatar size="25%" src={profilepic} visibleFrom="md" />
    </div>
  );
}
