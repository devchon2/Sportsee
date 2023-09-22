export default class ProfileModel {
  constructor(id) {
    this.id = id;
    this.infoUrl = `http://localhost:3001/user/${this.id}`;
    this.perfsUrl = `http://localhost:3001/user/${this.id}/performance`;
    this.activitiesUrl = `http://localhost:3001/user/${this.id}/activity`;
    this.averageSessionUrl = `http://localhost:3001/user/${this.id}/average-sessions`;
    
  }


  
  async getInfos(){
    const reponseInfos = await fetch(this.infoUrl);
    return await reponseInfos.json();
  }
  async getPerfs(){
    const reponsePerformances = await fetch(this.perfsUrl)
    return await reponsePerformances.json()
  }

  async getActivities(){
    const reponseActivites = await fetch(this.ActivitiesUrl);
    return await reponseActivites.json()
  }

  async getSessions(){
    const reponseAverage = await fetch(this.AverageinfoUrl)
    return await reponseAverage.json()
  }

  getSpecs(){
    return [ this.getInfos(), this.getPerfs(), this.getActivities(), this.getSessions ]
}
}