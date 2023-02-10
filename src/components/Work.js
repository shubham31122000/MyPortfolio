import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";

function Work() {
  const education = [
    {
      title: "Matriculation or 10th board",
      date: "2016-17",
      description:
        "I have done my 10th from D.A.V Public School, NTPC Deeptinagar, Kahalgaon. In this, I have scored 9.2 CGPA as my final result.",
    },
    {
      title: "Intermediate or 10+2",
      date: "2018-19",
      description:
        "I have done my 10+2 schooling from which I have passed 10th. The result of my 12th board is given in terms of percentage, that is, 89.4%. I have secured 4th rank in my school.",
    },
    {
      title: "BTech CSE",
      date: "2020-present",
      description:
        "I am currently pursuing BTech in Computer Science Engineering from Lovely Professional University, Punjab. Till now I have secured 8.77 overall CGPA.",
    },
  ];
  const workExp = [
    {
      title: "Searching...",
      date: "To be present",
      responsibility: ["Not alloted", "Not alloted"],
    },
    {
      title: "Searching...",
      date: "To be present",
      responsibility: ["Not alloted", "Not alloted"],
    },
    {
      title: "Searching...",
      date: "To be present",
      responsibility: ["Not alloted", "Not alloted"],
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Education
              </Typography>
              {education.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      {item.description}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Work Experience
              </Typography>
              {workExp.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      <ul style={{ padding: "0 18px" }}>
                        {item.responsibility.map((list) => {
                          return <li>{list}</li>;
                        })}
                      </ul>
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Work;