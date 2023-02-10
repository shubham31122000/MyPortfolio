import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

const style={
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center"
}

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        color: "#0CBBA0",
        margin: "20px 70px",
      }}
    >
      <CircularProgress
        size="5rem"
        color="inherit"
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function Skills() {
  const techSkills = [
    {
      title: "Core Java",
      percentage: 95,
    },
    {
      title: "HTML, CSS, Javascript",
      percentage: 50,
    },
    {
      title: "JDBC &b MySql",
      percentage: 70,
    },
    {
      title: "ReactJs",
      percentage: 50,
    },
    {
      title: "DSA",
      percentage: 60,
    },
  ];
  return (
    <>
      <Box sx={{ height: "90vh", display: "flex", alignItems: "center" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Technical Skills
              </Typography>
              {techSkills.map((item) => {
                return (
                  <>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="subtitle1" sx={{ my: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ my: 1 }}>
                        {item.percentage}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.percentage}
                    />
                  </>
                );
              })}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Professional Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <CircularProgressWithLabel value={75}  />
                <CircularProgressWithLabel value={50} />
                <CircularProgressWithLabel value={50} />
                <CircularProgressWithLabel value={50} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Skills;