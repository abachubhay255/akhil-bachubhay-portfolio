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
import { IconError404, IconMicrophone, IconTransform } from "@tabler/icons-react";
import classes from "./Intro.module.css";
import profilepic from "/profilepic.jpg";

export function Intro() {
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
          I'm a passionate Full Stack Developer with 3 years of professional
          experience in crafting robust software solutions. I specialize in
          enhancing UI/UX and optimizing performance. My commitment to
          delivering scalable and maintainable code ensures top-quality results
          for every project.
        </Text>

        <List mt={30} spacing="md" size="sm">
          <List.Item
            icon={
              <ThemeIcon variant="gradient" size="sm" radius="xl">
                <IconError404
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <b>Problem Solving</b> – I use analytical thinking to debug issues
            and develop efficient solutions.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon variant="gradient" size="sm" radius="xl">
                <IconMicrophone
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <b>Communication</b> – I communicate clearly, collaborate
            effectively, and document code thoroughly.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon variant="gradient" size="sm" radius="xl">
                <IconTransform
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <b>Adaptability</b> – I adapt to new tools, technologies, and
            methodologies in a fast-evolving tech environment.
          </List.Item>
        </List>

        <Group mt={30}>
          <Button
            variant="gradient"
            radius="xl"
            size="md"
            className={classes.control}
          >
            Explore Work
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
          >
            Contact Me
          </Button>
        </Group>
      </div>
      <Avatar size="25%" src={profilepic} visibleFrom="md" />
    </div>
  );
}
