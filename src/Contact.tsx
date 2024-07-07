import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Box,
  Stack,
  rem,
  getGradient,
  useMantineTheme,
} from "@mantine/core";
import classes from "./Contact.module.css";
import { IconSun, IconAt, IconMapPin } from "@tabler/icons-react";

export function Contact() {
  const theme = useMantineTheme();
  return (
    <Paper
      ml="auto"
      mr="auto"
      shadow="md"
      radius="lg"
      w={{ base: "100%", sm: "75%" }}
    >
      <div className={classes.wrapper}>
        <Box
          className={classes.contacts}
          bg={getGradient({ deg: 180, from: "blue", to: "cyan" }, theme)}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </Box>

        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Name" placeholder="Peter Parker" />
              <TextInput
                label="Email"
                placeholder="peter.parker@dailybugle.com"
                required
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                variant="gradient"
                className={classes.control}
              >
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}

type ContactIconProps = Omit<React.ComponentPropsWithoutRef<"div">, "title"> & {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
};

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.iconWrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.iconTitle}>
          {title}
        </Text>
        <Text className={classes.iconDescription}>{description}</Text>
      </div>
    </div>
  );
}

const data = [
  { title: "Email", description: "abachubhay255@gmail.com", icon: IconAt },
  { title: "Location", description: "New York, NY", icon: IconMapPin },
  { title: "Contact hours", description: "10 a.m. – 11 p.m. ET", icon: IconSun },
];

export function ContactIconsList() {
  const items = data.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
