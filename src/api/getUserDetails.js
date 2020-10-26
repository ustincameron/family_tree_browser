export const getUserDetails = async () => {
   const apiURL = 'https://randomuser.me/api/?results=1';
   const response = await fetch(apiURL, {
      cache: 'no-store',
      method: 'GET',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
      },
   });
   
   try {
      const userProfileJson = await response.json();
      return userProfileJson.results[0];
   } catch (error) {
      console.error(error);
   }
};
