import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { AppShell } from "./AppShell";

function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{ headings: { fontFamily: "Greycliff CF, var(--mantine-font-family)" } }}
    >
      <AppShell />
    </MantineProvider>
  );
}

export default App;
