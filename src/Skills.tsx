import { Badge, Group, SegmentedControl } from "@mantine/core";
import classes from "./Skills.module.css";
import { useState } from "react";

export function Skills() {
  const [selected, setSelected] = useState("all");
  return (
    <>
      <SegmentedControl
        radius="xl"
        size="md"
        data={data}
        value={selected}
        onChange={setSelected}
        classNames={classes}
        ml="auto"
        mr="auto"
        w={{ base: "100%", sm: "50%" }}
      />
      <Group justify="center" gap="xl">
        {skillsDict[selected].map((skill, i) => (
          <Badge
            size="xl"
            variant="light"
            color={i % 2 === 0 ? "gray" : "blue"}
            key={skill}
          >
            {skill}
          </Badge>
        ))}
      </Group>
    </>
  );
}

const data = [
  { value: "all", label: "All" },
  { value: "languages", label: "Languages" },
  { value: "front-end", label: "Front-end" },
  { value: "back-end", label: "Back-end" },
];

const frontEndSkills = [
  "React",
  "React Native",
  "Vite",
  "Angular",
  "HTML",
  "CSS",
];

const backEndSkills = [
  "Node.js",
  "Azure",
  "GraphQL",
  "Express.js",
  "Docker",
  "MongoDB",
  "Grails",
  "Kafka",
];

const languages = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "Groovy",
  "C",
  "Bash",
];

function getAllSkills() {
  const allSkills = [];
  const maxLength = Math.max(
    frontEndSkills.length,
    backEndSkills.length,
    languages.length
  );

  for (let i = 0; i < maxLength; i++) {
    if (i < frontEndSkills.length) {
      allSkills.push(frontEndSkills[i]);
    }
    if (i < backEndSkills.length) {
      allSkills.push(backEndSkills[i]);
    }
    if (i < languages.length) {
      allSkills.push(languages[i]);
    }
  }

  return allSkills;
}

const allSkills = getAllSkills();

const skillsDict: Record<string, string[]> = {
  all: allSkills,
  languages,
  "front-end": frontEndSkills,
  "back-end": backEndSkills,
};
