import React from 'react';
import {
   Card,
   List,
   ListItemAvatar,
   ListItem,
   ListItemText,
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
   list:{
      maxHeight:600,
      overflowY:'auto'
   },
}

const SideNavigation = (props) => {
   const navItems = [
      {
         name: "Home",
         desc: "Browse your Family Tree.",
         icon: <HomeIcon/>,
         path:"/",
      },
      {
         name: "Settings",
         desc: "Adjust how Family Members see you.",
         icon: <SettingsIcon/>,
         path:"settings",
      },
      {
         name: "Logout",
         desc: "Securely sign off.",
         icon: <ExitToAppIcon/>,
         onClick:props.logout,
      }
   ];
   return (
         <Card>
                     <List
                        dense={true}
                        style={styles.list}>
                        {
                           navItems.map((item,index)=>{
                              return (
                                 <ListItem button key={index} onClick={item.onClick} component={"a"} href={item.path}>
                                    <ListItemAvatar>
                                       {item.icon}
                                    </ListItemAvatar>
                                    <ListItemText primary={item.name} secondary={item.desc} />
                                 </ListItem>
                              )
                           })
                        }
                     </List>
            </Card>
   )
}
export default SideNavigation;