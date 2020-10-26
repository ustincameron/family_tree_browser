import React, {useState, useEffect} from 'react';
import {
   Avatar,
   Card,
   LinearProgress,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography
} from "@material-ui/core";
import FamilyMember from "../FamilyMember";
import {getFamily} from "../../api/getFamily";

const styles = {
   tree:{
      padding:10,
      maxHeight:250,
      overflowY:'auto'
   },
   loading:{
      width: '80%', display: 'block', textAlign: 'center', margin: '20px auto 0px auto'
   }
}
const FamilyBrowser = (props) => {
   
   const [familyTree, setFamilyTree] = useState( []);
   const [viewingPerson, setViewingPerson] = useState( null);
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
      var unmounted = false;
      async function getFamilyList() {
         setLoading(false);
         const family = await getFamily();
         if (!unmounted) setFamilyTree(family);
      }
      getFamilyList();
      
      return () => {
         unmounted = true;
      };
   }, [familyTree, loading]);
   
   const choosePerson = (person) => {
      setViewingPerson(person);
   }
   
   return (<><Card>
      {loading ?
         <LinearProgress
            color="primary"
            style={styles.loading}
         />
          :
         <>
            {
               familyTree.length>0 ?
                  <List
                           dense={true}
                           style={styles.tree}>
                           {
                              familyTree.map((item,index)=>{
                                 return (
                                    <ListItem button key={index} onClick={()=>choosePerson(item)}>
                                       <ListItemAvatar>
                                          <Avatar></Avatar>
                                       </ListItemAvatar>
                                       <ListItemText primary={item.name} secondary={item.desc} />
                                    </ListItem>
                                 )
                              })
                           }
                        </List>
                  :
                     <Typography>No family members found.</Typography>
            }
      </>
      }
      </Card>
   {viewingPerson && <FamilyMember viewingPerson={viewingPerson} familyTree={familyTree}/>}
   </>)
}
export default FamilyBrowser;