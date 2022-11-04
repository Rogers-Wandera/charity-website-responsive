import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';


const DonationPageWrapper = () => {
    return (
        <di>
            <DonationInformtion />
            <DonationForm />
        </di>
    )
  }
export default DonationPageWrapper

function DonationInformtion() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
          width: "80",
          height: "auto",
          padding: "1rem"
        },
      }}
    >
      <Paper elevation={2}>
          <div>
              <Typography variant="body1" gutterBottom>
                <b>“Each one of you should give what you have decided in your heart to give.
                    You should not give if it makes you unhappy or if you feel forced to give.
                    God loves those who are happy to give.” 2 CORINTHIANS 9:7
                </b>
              </Typography>
              <Typography variant="body1" gutterBottom>
              Love Happiness Foundation has been able to achieve  work due to the generous giving of cheerful givers.
              <br />
              </Typography>
          </div>
          <InteractiveList />
      </Paper>
    </Box>
  );
}



function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  
  function InteractiveList() {
  
    return (
      <Box sx={{ flexGrow: 1, maxWidth: 1500, margin:'1rem 1rem'}}>
        <FormGroup row>
        </FormGroup>
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
                    <ListItemText
                      primary="Buying food for the children"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Buy cloths for the kids"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="sponsoring Education for the kids"
                    />
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
              <List >
                {/* {generate( */}
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Purchase Scholarstic Materials"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Paying Healthy services for the kids"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="and Many others"
                    />
                  </ListItem>
                {/* )} */}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    );
  }



  const DonationForm = () => {
      return (
          <div>
            <form style={{margin:'1rem 0.5rem'}}>
                <div className="container-form">
                    <h2>Blessings for this Donation </h2>
                    <p>Once donors have donated to the Foundation, they are entitled
                        to a donation receipt from the Foundation as well as accountability
                         on how the money donated was used. Donors may also receive thanks
                          letters, photos, and videos from the beneficiaries for their donations.
                           All that is required of the donor is to provide information on how they
                            can be reached, preferably through email or WhatsApp.
                            <br />
                            Donations that are in-kind or material donations like clothes, books, shoes,
                             toys etc. can be brought or sent to the Love Happiness Foundation offices
                             Iganga District, Central Divison, kasokoso Parish Kayaga Zone Ward, or yOu can give us a call
                             on +2567411466043 and +256784957942
                        </p>
                </div>

                <div className="container-form" style={{backgroundColor:"white"}}>
                    <input type="text" placeholder="Donor's Full Name" name="name" required />
                    <input type="text" placeholder="Donor's Country" name="mail" required/>
                    <input type="text" placeholder="Donor's Email" name="name" required />
                    <input type="text" placeholder="Donor's Mobile Contact" name="mail" required/>
                    <textarea placeholder="Enter Your Message" name="message" id="message" cols="30" rows="10" style={{width:'100%'}}>
                        
                    </textarea>
                </div>

                <div className="container-form">
                    <input type="submit" value="Subscribe"/>
                </div>
            </form>
          </div>
      )
  }