import React from 'react';
import {Typography} from "@material-ui/core";
import FadeIn from "react-fade-in";

const styles = {
   logo:{
      height:50,
   },
   product_name:{
      marginTop:5,
      fontSize:18,
      fontWeight:'bold',
      color:'#000',
      display:'block'
   }
}
const Logo = (props) => {
   return <div style={props.styles}>
      <FadeIn>
      <img src={process.env.PUBLIC_URL + '/logo.svg'} style={styles.logo} alt={"Recount Logo"}/>
      <Typography style={styles.product_name} variant={"h3"}>Family Tree</Typography>
      </FadeIn>
   </div>;
}
export default Logo;