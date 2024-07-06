import { Title, Box, Stack, useMantineTheme, getGradient } from "@mantine/core";
import { Intro } from "./Intro";
import { Skills } from "./Skills";

export function Home() {
  return (
    <>
      <Intro />
      <Stack gap="xl">
        <SectionTitle title="Projects" />
        <SectionTitle title="Skills" />
        <Skills />
        <SectionTitle title="Experience" />
      </Stack>
    </>
  );
}

function SectionTitle({ title }: { title: string }) {
  const theme = useMantineTheme();
  return (
    <Box>
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
