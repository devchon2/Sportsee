import ProfileModel from "./ProfileModel.js";

 export default async  function getProfile(id){
  // appelle toutes les fonctions d'api et du mock Data
  

  return (new ProfileModel(id))
}