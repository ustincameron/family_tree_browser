import React from 'react';
import {Card, Typography} from "@material-ui/core";

const styles = {
   person_container:{
   marginTop:30,
      padding:10
   },
   timestamp:{
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize:10,
      display:'block',
      margin:'5px 0 10px',
   }
}
const FamilyMember = (props) => {
   const {viewingPerson, familyTree} = props;
   
   const getName = (id) =>{
      return familyTree.find(item => item.id === id).name;
   }
   return (<Card style={styles.person_container}>
         <Typography>{viewingPerson.name}</Typography>
         <Typography>{viewingPerson.born} | {viewingPerson.hometown}</Typography>
         <br/>
         {viewingPerson.spouseId && <Typography>Spouse: {getName(viewingPerson.spouseId)}</Typography>}
         {viewingPerson.parentId1 && <Typography>Parent: {getName(viewingPerson.parentId1)}</Typography>}
         {viewingPerson.parentId2 && <Typography>Parent: {getName(viewingPerson.parentId2)}</Typography>}
      </Card>
   )
}
export default FamilyMember;