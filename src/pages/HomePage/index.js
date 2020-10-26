import React from 'react';
import {Grid} from '@material-ui/core/';
import Logo from "../../components/Logo";
import SideNavigation from "../../components/SideNavigation";
import FamilyBrowser from "../../components/FamilyBrowser";
import {userContext} from '../../contexts/userContext';

const styles = {
   siteContainer:{
      marginTop:130
   },
   logo:{
      marginBottom:30,
      marginTop:-115,
   }
}
const HomePage = (props) => {
   return (
         <Grid container spacing={2} direction="row" justify="space-evenly" alignItems="flex-start" style={styles.siteContainer}>
            <userContext.Consumer>
               {({currentUser, logout}) => (
            <>
               <Grid item xs={3}>
                  <Logo styles={styles.logo}/>
                  <SideNavigation logout={logout}/>
               </Grid>
               <Grid item xs={7}>
                  <FamilyBrowser user={currentUser}/>
               </Grid>
            </>
               )}
            </userContext.Consumer>
         </Grid>
   )
}
export default HomePage