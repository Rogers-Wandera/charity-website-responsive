import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import video1 from "../../assets/save/1 (1).mp4";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import Charity1 from "../../assets/img-charity/13.jpg";
import Charity2 from "../../assets/save/1 (1).jpg";
import Charity3 from "../../assets/save/1 (18).jpg";
import Charity4 from "../../assets/save/1 (19).jpg";
import Ronnie from "../../assets/img/contact-1.png";
import Marvin from "../../assets/img/contact-1.png";
import another from "../../assets/img/contact-1.png";
import pdf from "../../assets/pdf/rajbuoy.pdf";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const AboutUsBox = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <SwipeableTextMobileStepper />
      <AboutInfo />
      <LabTabs />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
        <div
          style={{
            height: "750px",
            width: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Worker>
    </div>
  );
};

export default AboutUsBox;

function LabTabs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Mission" value="1" />
            <Tab label="Vision" value="2" />
            <Tab label="Objectives" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Mission />
        </TabPanel>
        <TabPanel value="2">
          <Vision />
        </TabPanel>
        <TabPanel value="3">
          <Objectives />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const AboutInfo = () => {
  return (
    <div>
      <div class="about-section-about">
        <div style={{ textAlign: "left" }}>
          <h1>About Us</h1>
          <p>
            Save My Soul For Africa Foundation is a faith-based, non-profit
            organization operating currently in Uganda, with offices located in
            Iganga District Central division County: bulubandi nandekula Sub
            county: Nakigo
          </p>
          <p>
            Save My Soul For Africa Foundation was founded in 2017 as a small
            outreach operating in Iganga district by a team of three people
            Naminya Rajabu, Mutambuze Salim, and Luluma Innocent.
          </p>
          <p>
            The Organsisation was started in 2017 due to the fact that there are
            many street kids here in Uganda with no one helping them. we managed
            to start the Organsisation to help street kids because we know the
            difficulties faced by street kids after loosing parents.
          </p>
          <p>
            We started this organization using our own funds . However to a
            certain period the funds were not enough to facilitate the kids in
            the orphanage, thats why we came up with an idea of creating
            Facebook, Twitter, Instagram, and other pages seeking for funds for
            the Organisation.
          </p>
        </div>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="row-about-us">
        <div class="column-about-us">
          <div class="card-about-us">
            <img
              src={Marvin}
              alt="Jane"
              style={{ width: "100%", height: "300px" }}
            />
            <div class="container-about-us">
              <h2>Mr. Naminya Rajabu</h2>
              <p class="title">Executive Director</p>
              <p></p>
              <p>
                <a href="mailto:email@email.com">email@email.com</a>
              </p>
              {/* <p><button class="button">Contact</button></p> */}
            </div>
          </div>
        </div>

        <div class="column-about-us">
          <div class="card-about-us">
            <img
              src={another}
              alt="Mike"
              style={{ width: "100%", height: "300px" }}
            />
            <div class="container-about-us">
              <h2>Mutambuze Salim</h2>
              <p class="title">Chairperson</p>
              {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
              <p>
                <a href="mailto:mut@gmail.com">Mutambuze@gmail.com</a>
              </p>
              {/* <p><button class="button">Contact</button></p> */}
            </div>
          </div>
        </div>

        <div class="column-about-us">
          <div class="card-about-us">
            <img
              src={Ronnie}
              alt="Mike"
              style={{ width: "100%", height: "300px" }}
            />
            <div class="container-about-us">
              <h2>Mr. Luluma Innocent</h2>
              <p class="title">Member</p>
              {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
              <p>
                <a href="mailto:lumala@gmail.com">lumala@gmail.com</a>
              </p>
              {/* <p><button class="button">Contact</button></p> */}
            </div>
          </div>
        </div>

        {/* <div class="column-about-us">
          <div class="card-about-us">
            <img src="/w3images/team3.jpg" alt="John" style={{width:"100%"}} />
            <div class="container-about-us">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Charity1,
  },
  {
    label: "Bird",
    imgPath: Charity2,
  },
  {
    label: "Bali, Indonesia",
    imgPath: Charity3,
  },
  {
    label: "Goč, Serbia",
    imgPath: Charity4,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: "block",
                  // width: "100%",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

const Img = styled("video")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Mission() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 800,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 348, height: 348 }}>
                  <Img alt="complex" src={video1} autoPlay loop ref={vidRef} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Please whoever has anything to help educate, feed, cloth,
                      and other needs needed by children at the orphanage will
                      be highly appreciated thank you.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      A small contribution can do a great favour to the needy.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link to="/donate">
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        Donate
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontSize: "2rem", color: "blue" }}
            >
              To Empower children and youths to lead social and economic change
              in their communities .
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function Vision() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 800,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 348, height: 348 }}>
                  <Img alt="complex" src={video1} autoPlay loop ref={vidRef} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Please whoever has anything to help educate, feed, cloth,
                      and other needs needed by children at the orphanage will
                      be highly appreciated thank you.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      A small contribution can do a great favour to the needy.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link to="/donate">
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        Donate
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontSize: "1.5rem", color: "blue" }}
            >
              To have a healthy and happy community.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function Objectives() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 800,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 348, height: 348 }}>
                  <Img alt="complex" src={video1} autoPlay loop ref={vidRef} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Please whoever has anything to help educate, feed, cloth,
                      and other needs needed by children at the orphanage will
                      be highly appreciated thank you.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      A small contribution can do a great favour to the needy.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link to="/donate">
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        Donate
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            aria-label="contacts"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="To support women and girl child to realize their full potential." />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="To obtain resources to support the mission and realize a reasonable benefit for the key stakeholderTo increase prosperity among members and the community at large." />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="To help in capacity building of members and the community." />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="To build good community relation among members." />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="To support welfare activities among members." />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="To educate members on the importance of public health." />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="To create lively minds to children and youths with disabilities." />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
