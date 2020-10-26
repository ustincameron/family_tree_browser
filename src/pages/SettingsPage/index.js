import React from 'react';
import Logo from "../../components/Logo";
import SideNavigation from "../../components/SideNavigation";
import {userContext} from '../../contexts/userContext';
import {Avatar, Grid, TextField, Button, Card, Divider, Typography} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';

const styles = {
   pageContainer:{
      marginTop:130
   },
   logo:{
      marginBottom:30,
      marginTop:-115,
   },
   settingsContainer:{
      padding:15,
      textAlign:'center'
   },
   avatar:{
      width:100,
      height:100,
      margin:'auto',
      marginBottom: 15,
      display:'block'
   },
   field:{
         marginBottom: 15,
   }
}
const SettingsPage = (props) => {
   
   return (
      <Grid container spacing={2} direction="row" justify="space-evenly" alignItems="flex-start" style={styles.pageContainer}>
         <userContext.Consumer>
            {({currentUser, logout, updateUser}) => (
               <>
                  <Grid item xs={3}>
                     <Logo styles={styles.logo}/>
                     <SideNavigation logout={logout}/>
                  </Grid>
                  <Grid item xs={7}>
                     {currentUser && <Card style={styles.settingsContainer}>
                        <Typography variant={"h5"}>Edit Profile: {`${currentUser.name.first} ${currentUser.name.last}`}</Typography>
                        <Divider/>
                        <Grid container spacing={2} xs={12} direction="row" justify="space-around" alignItems="flex-start" style={styles.settingsContainer}>
                           <Grid item xs={12}>
                              <Avatar alt="Remy Sharp" src={currentUser.picture.large} style={styles.avatar} />
                           </Grid>
                           <Grid item xs={6} >
                              <TextField label="Address" style={styles.field} variant="outlined" defaultValue={`${currentUser.location.street.number} ${currentUser.location.street.name}`} />
                              <TextField label="City" style={styles.field}  variant="outlined" defaultValue={`${currentUser.location.city}`} />
                              <TextField label="State" style={styles.field}  variant="outlined" defaultValue={`${currentUser.location.state}`} />
                              <TextField label="Postcode" style={styles.field}  variant="outlined" defaultValue={`${currentUser.location.postcode}`} />
                           </Grid>
                           <Grid item xs={6}>
                              <TextField label="Email" style={styles.field} variant="outlined" defaultValue={`${currentUser.email}`} />
                              <TextField label="Phone" style={styles.field} variant="outlined" defaultValue={`${currentUser.phone}`} />
                              <TextField label="Date of Birth" style={styles.field} variant="outlined" defaultValue={`${currentUser.dob.date}`} />
                           </Grid>
                        </Grid>
                        <Grid
                           style={{ margin: '0px auto 20px' }}
                           container
                           direction="row"
                           justify="space-around"
                           alignItems="center"
                           spacing={0}
                        >
                              <Button
                                 onClick={updateUser}
                                 variant="contained"
                                 color="secondary"
                                 style={{ marginTop: 10, marginBottom: 8 }}
                              >
                                 Save Details &nbsp;
                                 <SaveIcon />
                              </Button>
                        </Grid>
                     </Card>}
                  </Grid>
               </>
            )}
         </userContext.Consumer>
      </Grid>
   )
}
export default SettingsPage