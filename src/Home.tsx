import {
  Title,
  Box,
  Stack,
  useMantineTheme,
  getGradient,
  Affix,
  Button,
  rem,
  Transition,
} from "@mantine/core";
import { Intro } from "./Intro";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { IconArrowUp } from "@tabler/icons-react";
import { useScrollIntoView, useWindowScroll } from "@mantine/hooks";
import { RefObject } from "react";
import { HEADER_HEIGHT } from "./AppShell";

export function Home() {
  const [scroll, scrollTo] = useWindowScroll();
  const { scrollIntoView: scrollToProjects, targetRef: projectsRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: HEADER_HEIGHT,
      duration: 750,
    });
  const { scrollIntoView: scrollToContact, targetRef: contactRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: HEADER_HEIGHT,
      duration: 750,
    });
  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={
                <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
              }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
      <Stack gap={300} mb={100}>
        <Intro
          onWorkClick={() => scrollToProjects({ alignment: "center" })}
          onContactClick={() => {
            scrollToContact({ alignment: "center" });
          }}
        />
        <Stack gap="xl" ref={projectsRef}>
          <SectionTitle title="Projects" />
          <Projects />
        </Stack>

        <Stack gap="xl">
          <SectionTitle title="Skills" />
          <Skills />
        </Stack>

        <Stack gap="xl">
          <SectionTitle title="Experience" />
          <Experience />
        </Stack>

        <Box ref={contactRef}>
          <Contact />
        </Box>
      </Stack>
    </>
  );
}

function SectionTitle({
  title,
  ref,
}: {
  title: string;
  ref?: RefObject<HTMLDivElement>;
}) {
  const theme = useMantineTheme();
  return (
    <Box ref={ref}>
      <Title order={2} size={30} mb="sm" ta="center">
        {title}
      </Title>
      <Box
        ml="auto"
        mr="auto"
        bg={getGradient({ deg: 90, from: "blue", to: "cyan" }, theme)}
        h={5}
        w="25%"
        style={{ borderRadius: 100 }}
      />
    </Box>
  );
}
