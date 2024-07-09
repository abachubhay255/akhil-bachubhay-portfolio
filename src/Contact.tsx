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
  Alert,
  Loader,
  Center,
} from "@mantine/core";
import classes from "./Contact.module.css";
import {
  IconSun,
  IconAt,
  IconMapPin,
  IconCheck,
  IconAlertCircle,
} from "@tabler/icons-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const SERVICE_ID = "serviceId";
const TEMPLATE_ID = "emailTemplate";

export function Contact() {
  const theme = useMantineTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [showNotification, setShowNotification] = useState<
    "none" | "good" | "bad"
  >("none");

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowNotification("good");
        },
        (error) => {
          console.log("FAILED...", error);
          setShowNotification("bad");
        }
      )
      .finally(() => setIsLoading(false));
  }
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

        <form className={classes.form} onSubmit={(event) => sendEmail(event)}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Name"
                placeholder="Peter Parker"
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
                required
              />
              <TextInput
                label="Email"
                placeholder="peter.parker@dailybugle.com"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Subject"
              placeholder="Subject"
              value={subject}
              onChange={(event) => setSubject(event.currentTarget.value)}
              required
            />

            <Textarea
              mt="md"
              label="Message"
              placeholder="Please include all relevant information"
              minRows={3}
              maxRows={6}
              autosize
              value={message}
              onChange={(event) => setMessage(event.currentTarget.value)}
              required
            />

            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                variant="gradient"
                className={classes.control}
                disabled={showNotification === "good"}
              >
                Send message
              </Button>
            </Group>
            <Center mt="sm">
              {isLoading && <Loader color="blue" type="bars" />}
              {showNotification === "none" ? null : showNotification ===
                "bad" ? (
                <Alert
                  icon={<IconAlertCircle size={20} />}
                  color="red"
                  title="Error Sending Message!"
                  onClose={() => setShowNotification("none")}
                  withCloseButton
                  radius="lg"
                ></Alert>
              ) : (
                <Alert
                  icon={<IconCheck size={20} />}
                  color="teal"
                  title="Message Sent!"
                  onClose={() => setShowNotification("none")}
                  withCloseButton
                  radius="lg"
                ></Alert>
              )}
            </Center>
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
  {
    title: "Contact hours",
    description: "10 a.m. – 11 p.m. ET",
    icon: IconSun,
  },
];

export function ContactIconsList() {
  const items = data.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
