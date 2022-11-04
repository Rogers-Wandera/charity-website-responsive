import React, { useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import video1 from "../../assets/vid/charity1.mp4"
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Charity1 from "../../assets/img-charity/13.jpg";
import Charity2 from "../../assets/img-charity/16.jpg";
import Charity3 from "../../assets/img-charity/19.jpg";
import Charity4 from "../../assets/img-charity/20.jpg";
import Ronnie from "../../assets/img-charity/41.jpg";
import Marvin from "../../assets/img-charity/40.jpg";

const AboutUsBox = () => {
    return (
        <div>
            <SwipeableTextMobileStepper />
            <AboutInfo />
            <LabTabs /> 
        </div>
    )
}

export default AboutUsBox;

function LabTabs() {
    const [value, setValue] = React.useState('1');
   const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Mission" value="1" />
              <Tab label="Vision" value="2" />
              <Tab label="Objectives" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><Mission /></TabPanel>
          <TabPanel value="2"><Vision /></TabPanel>
          <TabPanel value="3"><Objectives /></TabPanel>
        </TabContext>
      </Box>
    );
}

const AboutInfo = () => {
  return (
    <div>
      <div class="about-section-about">
        <div style={{textAlign: "left"}}>
        <h1>About Us</h1>
        <p>Love Happiness Uganda Foundation is a faith-based, non-profit organization operating currently
           in Uganda, with offices located in Iganga District Central division kasokoso parish Kayaga zone ward</p>
        <p>Love Happiness Uganda Foundation was founded in 2017 as a small outreach operating in Iganga
           district by a team of three people Muwereza Marvin, Suubi Nicholas, and Ntambi Hakim.
        </p>
        <p>
          We started this Organsisation in 2017 due that we were also street kids we were adopted by a family
          from street whose occupation was farming and they were serving in church as pastor. we managed
          to start the Organsisation to help street kids because we know the difficulties faced by street
          kids after loosing parents.
        </p>
        <p>We started this organization using the family funds which adopted us. However to a certain period the funds
          were not enough to facilitate the kids in the orphanage, thats why we came up with an idea of creating Facebook, Twitter, Instagram,
          and other pages seeing for funds for the Organisation.
        </p>
        </div>
      </div>

      <h2 style={{textAlign:"center"}}>Our Team</h2>
      <div class="row-about-us">
        <div class="column-about-us">
          <div class="card-about-us">
            <img src={Marvin} alt="Jane" style={{width:"100%",height:'300px'}} />
            <div class="container-about-us">
              <h2>Muwereza Marvin</h2>
              <p class="title">CEO & Founder</p>
              <p></p>
              <p><a href="mailto:mwesigwamarkmel@gmail.com">mwesigwamarkmel@gmail.com</a></p>
              {/* <p><button class="button">Contact</button></p> */}
            </div>
          </div>
        </div>

        <div class="column-about-us">
          <div class="card-about-us">
            <img src={Ronnie} alt="Mike" style={{width:"100%",height:'300px'}} />
            <div class="container-about-us">
              <h2>Wandera Ronald</h2>
              <p class="title">Operations Officer</p>
              {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
              <p><a href="mailto:ronniewanz@gmail.com">ronniewanz@gmail.com</a></p>
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
  )
}


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:Charity1,
  },
  {
    label: 'Bird',
    imgPath:Charity2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath: Charity3,
  },
  {
    label: 'Goč, Serbia',
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
    <Box sx={{ width: "100%" , flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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
                  display: 'block',
                  // width: "100%",
                  overflow: 'hidden',
                  width: '100%',
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
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
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

const Img = styled('video')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Mission() {
  const vidRef = useRef()

  useEffect(() => {
    vidRef.current.play()
  },[])

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 800,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 348, height: 348 }}>
                <Img alt="complex" src={video1} autoPlay loop ref={vidRef}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Please whoever has anything to help educate, feed, cloth, and other needs needed by children at the orphanage will be highly appreciated thank you.
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  A small contribution can do a great favour to the needy.
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/donate">
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
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
            <Typography variant="subtitle1" gutterBottom style={{fontSize:'2rem', color:'blue'}}>
              To empower people,alleviate poverty and promotion of good health.“To create a better everyday
               life for many people”.
            </Typography>
          </Item>
        </Grid>
    </Grid>
  </Box>
  );
}



function Vision() {
  const vidRef = useRef()

  useEffect(() => {
    vidRef.current.play()
  },[])

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 800,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 348, height: 348 }}>
                <Img alt="complex" src={video1} autoPlay loop ref={vidRef}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Please whoever has anything to help educate, feed, cloth, and other needs needed by children at the orphanage will be highly appreciated thank you.
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  A small contribution can do a great favour to the needy.
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/donate">
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
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
            <Typography variant="subtitle1" gutterBottom style={{fontSize:'1.5rem', color:'blue'}}>
            Giving hope to Orphans, Needy, Vulnerable and Disabled children.
            We are in a position to achieve this by providing the children with Medical care, good feeding, Quality Education, Shelter, clothing. counselling & guidance, vocational skilling and spiritual development.
            </Typography>
          </Item>
        </Grid>
    </Grid>
  </Box>
  );
}

function Objectives() {
  const vidRef = useRef()

  useEffect(() => {
    vidRef.current.play()
  },[])

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 800,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 348, height: 348 }}>
                <Img alt="complex" src={video1} autoPlay loop ref={vidRef}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Please whoever has anything to help educate, feed, cloth, and other needs needed by children at the orphanage will be highly appreciated thank you.
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  A small contribution can do a great favour to the needy.
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/donate">
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
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
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            aria-label="contacts"
          >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="To construct infrastructure that matches with the growing needs of Love Happiness Uganda Foundation Orphanage as a reputable Children center in Uganda." />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="To obtain resources to support the mission and realize a reasonable benefit for the key stakeholder." />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="To network with Agencies/NGOs working with orphans, Needy, Vulnerable and Disabled children among others for mutual benefits and referral support." />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="To create awareness among children and communities in matters concerning children’s health issues like home hygiene, water source maintenance, training members in all preventive measures concerning health related problems in schools and communities." />
            </ListItemButton>
          </ListItem>
        </List>
        </Grid>
    </Grid>
  </Box>
  );
}
