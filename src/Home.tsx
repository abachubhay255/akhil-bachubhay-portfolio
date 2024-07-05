import {
  AppShell,
  Burger,
  Container,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SocialButtons } from "./SocialButtons";

export function Home() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 75 }}
      aside={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header bg="dark.9">
        <Container
          display="flex"
          size="md"
          h="100%"
          style={{ alignItems: "center" , justifyContent: "space-between" }}
        >
          <Title order={3}>Akhil Bachubhay Portfolio</Title>
          <Group visibleFrom="sm">
            <SocialButtons />
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Container>
      </AppShell.Header>

      <AppShell.Aside bg="dark.9" py="md" px={4}>
        <Stack gap="xs">
          <SocialButtons />
        </Stack>
      </AppShell.Aside>

      <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header
        on desktop are hidden on mobile in header and rendered in navbar
        instead.
      </AppShell.Main>
    </AppShell>
  );
}
