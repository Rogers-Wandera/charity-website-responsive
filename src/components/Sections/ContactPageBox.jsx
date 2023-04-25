import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import Charity1 from "../../assets/img-charity/13.jpg";
import Charity2 from "../../assets/save/1 (1).jpg";
import Charity3 from "../../assets/save/1 (18).jpg";
import Charity4 from "../../assets/save/1 (19).jpg";

const ContactPageBox = () => {
  return (
    <div>
      <SwipeableTextMobileStepper />
      <RowAndColumnSpacing />
    </div>
  );
};

export default ContactPageBox;

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
                  height: 655,
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

function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%", margin: "2rem 0" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Location />
        </Grid>
        <Grid item xs={12} md={4}>
          <Contact />
        </Grid>
        <Grid item xs={12} md={4}>
          <SocialMedia />
        </Grid>
      </Grid>
    </Box>
  );
}

function Location() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ fontSize: "1.5rem", color: "blue" }}
        >
          Location
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Iganga District, Central Division" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="County: bulubandi nandekula" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Sub county: Nakigo" />
      </ListItemButton>
    </List>
  );
}

function Contact() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ fontSize: "1.5rem", color: "blue" }}
        >
          Contact
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <a href="mailto:">save@gmail.com</a>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="+256705097565" />
      </ListItemButton>
      {/* <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="+256784957942" />
        </ListItemButton> */}
    </List>
  );
}

function SocialMedia() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ fontSize: "1.5rem", color: "blue" }}
        >
          Social Media
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <a target="_blank" href="/contact" rel="noreferrer">
          Twitter
        </a>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <a target="_blank" href="/contact" rel="noreferrer">
          Instagram
        </a>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <a href="/contact" target="_blank" rel="noreferrer">
          Tiktok
        </a>
      </ListItemButton>
    </List>
  );
}
