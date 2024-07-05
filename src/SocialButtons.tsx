import { Button } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./SocialButtons.module.css";

export function SocialButtons() {
  return (
    <>
      <Button
        component="a"
        href="https://github.com/abachubhay255"
        target="_blank"
        leftSection={<IconBrandGithub size={18} />}
        className={classes.socialButton}
      >
        GitHub
      </Button>
      <Button
        component="a"
        href="https://www.linkedin.com/in/akhil-bachubhay/"
        target="_blank"
        leftSection={<IconBrandLinkedin size={22} />}
        className={classes.socialButton}
      >
        LinkedIn
      </Button>
    </>
  );
}
