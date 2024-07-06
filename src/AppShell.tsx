import {
  AppShell as MantineAppShell,
  Burger,
  Container,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SocialButtons } from "./SocialButtons";
import { Home } from "./Home";

export function AppShell() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineAppShell
      header={{ height: 75 }}
      aside={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <MantineAppShell.Header bg="dark.9">
        <Container
          display="flex"
          size="xl"
          h="100%"
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Title order={3}>Akhil Bachubhay Portfolio</Title>
          <Group visibleFrom="sm">
            <SocialButtons />
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Container>
      </MantineAppShell.Header>

      <MantineAppShell.Aside bg="dark.9" py="md" px={4}>
        <Stack gap="xs">
          <SocialButtons />
        </Stack>
      </MantineAppShell.Aside>

      <MantineAppShell.Main bg="dark.9">
        <Container size="xl" h="100%">
          <Home />
        </Container>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
