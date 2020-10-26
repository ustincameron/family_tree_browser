import React, { useState, useCallback } from 'react';
import {Button, Card, Grid, LinearProgress, TextField, Typography} from "@material-ui/core";
import FadeIn from 'react-fade-in';
import Logo from "../../components/Logo";
import LockIcon from '@material-ui/icons/Lock';
import { getUserDetails } from '../../api/getUserDetails';
const styles = {
   container:{
      marginTop:130,
   },
   logo:{
      marginBottom:30,
      marginTop:-115,
      textAlign:'center'
   },
   card_contents:{
      padding:30
   },
   desc:{
      marginTop: 0,
      fontSize: '1.8rem',
      marginBottom: 15,
      textAlign: 'center'
   },
   secondary:{
      fontSize: '1rem',
      textAlign: 'center'
   },
   button:{
      width: 300,
      display:'block',
      margin: '20px auto 0px'
   },
   loading:{
      width: '80%',
      display: 'block',
      textAlign: 'center',
      margin: '30px auto 30px auto'
   }
}
const LoginPage = (props) => {
   const {setLogin} = props;
   const [loading, setLoading] = useState(false);
   const [LoginEmail, setLoginEmail] = useState('');
   const [LoginPW, setLoginPW] = useState('');
   
   const handleLogin = useCallback(
      (event) => {
         setLoading(true);
   
         async function getUser() {
            const user = await getUserDetails();
            if (user) {
               setLoading(false);
               setLogin(user);
            }
         }
         getUser();
      },
      [setLoading, setLogin],
   );
   
   return (
      <Grid container direction="row" justify="space-around" alignItems="center" style={styles.container}>
         <Grid item xs={6}>
            <Logo styles={styles.logo}/>
            <Card>
               <FadeIn>
               <div style={styles.card_contents}>
            <Typography
               gutterBottom
               variant="h4"
               style={styles.desc}>Log in below.</Typography>
            <Typography
               color={"textSecondary"}
               gutterBottom
               variant="h6"
               style={styles.secondary}>Use credentials: Demo / Demo to explore the MVP.</Typography>
   
                  {
                     !loading ?
                        <>
                           <TextField
                              label="Email:"
                              placeholder={"Enter: Demo"}
                              /*autoComplete="username"*/
                              fullWidth={true}
                              onChange={setLoginEmail}
                           />
                           <TextField
                              label="Password:"
                              /*type="password"*/
                              /*autoComplete="current-password"*/
                              fullWidth={true}
                              onChange={setLoginPW}
                           />
                           </>
                        :
                        <LinearProgress
                           color="primary"
                           style={styles.loading}
                        />
                  }
            <Button
               disabled={!LoginEmail || !LoginPW || loading}
               style={styles.button}
               variant="outlined"
               placeholder={"Enter: Demo"}
               color="primary"
               onClick={handleLogin}
               >
               Log In <LockIcon style={{marginBottom:-5}}/>
            </Button>
               </div>
            </FadeIn>
            </Card>
         </Grid>
      </Grid>
   );
}
export default LoginPage;