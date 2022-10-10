import React from "react";
import {
  Divider,
  IconButton,
  Typography,
  LinearProgress,
  Stack,
} from "@mui/material";
import { names, skills, proficiency } from "../../data/Data";
import {
  StyledBlueEffect,
  StyledDesc,
  StyledSkillCard,
  StyledSkillText,
} from "../../styles/styles";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Divider sx={{ marginTop: "1rem" }}>
          <StyledSkillText my={3}>Skills</StyledSkillText>
        </Divider>

        <StyledBlueEffect style={{ background: "#edd0ff", top: 0, left: 0 }} />
        <StyledBlueEffect
          sx={{ background: "#c1f5ff", top: "25rem", right: 0 }}
        />
        <Stack
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          {skills.map((skill, index) => (
            <StyledSkillCard key={index}>
              <IconButton sx={{ marginTop: "2rem" }}>{skill}</IconButton>
              <Typography fontWeight="bold" my={2}>
                {names[index]}
              </Typography>
              <Stack sx={{ width: "90%", marginBottom: 2 }} direction="column">
                <StyledDesc sx={{ fontSize: "14px", textAlign: "center" }}>
                  {proficiency[index]}%
                </StyledDesc>
                <LinearProgress
                  variant="determinate"
                  value={proficiency[index]}
                  color="secondary"
                />
              </Stack>
            </StyledSkillCard>
          ))}
        </Stack>
      </motion.div>
    </>
  );
};

export default Skills;
