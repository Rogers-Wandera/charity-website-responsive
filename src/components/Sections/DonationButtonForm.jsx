import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormGroup from "@mui/material/FormGroup";
import emailjs from "@emailjs/browser";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import SuccessMessage from "./SuccessMessage";

const DonationPageWrapper = () => {
  return (
    <di>
      <DonationInformtion />
      <DonationForm />
    </di>
  );
};
export default DonationPageWrapper;

function DonationInformtion() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "80",
          height: "auto",
          padding: "1rem",
        },
      }}
    >
      <Paper elevation={2}>
        <div>
          <Typography variant="body1" gutterBottom>
            <b>
              “Each one of you should give what you have decided in your heart
              to give. You should not give if it makes you unhappy or if you
              feel forced to give. God loves those who are happy to give.” 2
              CORINTHIANS 9:7
            </b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Save My Soul For Africa has been able to achieve work due to the
            generous giving of cheerful givers.
            <br />
          </Typography>
        </div>
        <InteractiveList />
      </Paper>
    </Box>
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function InteractiveList() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1500, margin: "1rem 1rem" }}>
      <FormGroup row></FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            What we do with the donation
          </Typography>
          <Demo>
            <List>
              {/* {generate( */}
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Buying food for the children" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Buy cloths for the kids" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="sponsoring Education for the kids" />
              </ListItem>
              {/* )} */}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            What we do with the donation
          </Typography>
          <Demo>
            <List>
              {/* {generate( */}
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Purchase Scholarstic Materials" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Paying Healthy services for the kids" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="and Many others" />
              </ListItem>
              {/* )} */}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

const initial_state = {
  name: "",
  email: "",
  subject: "Donation",
  message: "",
  contact: "",
};

const DonationForm = () => {
  const [state, setState] = React.useState(initial_state);
  const [modal, setModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      status: "Donation Page",
      name: state.name,
      email: state.email,
      subject: state.subject,
      message: state.message,
      contact: state.contact,
      // notes: 'Check this out!'
    };
    return emailjs
      .send(
        "service_7jw99kd",
        "contact_form_charity",
        templateParams,
        "J7G1lNfDggeMJoWmB"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            contact: "",
          });
          setModal(true);
          setErrorMessage(
            `Message has been successfully sent we will get back to you on ${state.email} shortly`
          );
        },
        (err) => {
          console.log("FAILED...", err);
          setModal(true);
          setErrorMessage(
            `Sorry Message has not been sent this could be because of slow Internet connection.`
          );
        }
      );
  };

  const handleCloseModal = () => {
    setModal(false);
    setErrorMessage("");
  };
  return (
    <div>
      <form style={{ margin: "1rem 0.5rem" }} onSubmit={handleSubmit}>
        <div className="container-form">
          <h2>Blessings for this Donation </h2>
          <p>
            Once donors have donated to the Foundation, they are entitled to a
            donation receipt from the Foundation as well as accountability on
            how the money donated was used. Donors may also receive thanks
            letters, photos, and videos from the beneficiaries for their
            donations. All that is required of the donor is to provide
            information on how they can be reached, preferably through email or
            WhatsApp.
            <br />
            Donations that are in-kind or material donations like clothes,
            books, shoes, toys etc. can be brought or sent to the Save My Soul
            For Africa offices County: bulubandi nandekula Sub county: Nakigo ,
            or you can give us a call on +256705097565 and +256778418957
          </p>
        </div>

        <div className="container-form" style={{ backgroundColor: "white" }}>
          {modal && (
            <SuccessMessage
              handleCloseModal={handleCloseModal}
              errorMessage={errorMessage}
            />
          )}
          <input
            type="text"
            placeholder="Donor's Full Name"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Donor's Mobile contact"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Donor's Mobile Contact"
            id="contact"
            name="contact"
            value={state.contact}
            onChange={handleChange}
          />
          <textarea
            placeholder="Enter Your Message"
            id="message"
            name="message"
            value={state.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            style={{ width: "100%" }}
          ></textarea>
        </div>

        <div className="container-form">
          <input
            type="submit"
            value="Subscribe"
            style={{ cursor: "pointer" }}
          />
        </div>
      </form>
    </div>
  );
};
