export default class DataController {
  constructor(id) {
    this.Id = id;

    this.InfoUrl = `http://localhost:3001/user/${this.Id}`;
    this.PerfsUrl = `http://localhost:3001/user/${this.Id}/performance`;
    this.ActivityUrl = `http://localhost:3001/user/${this.Id}/activity`;
    this.AverageInfoUrl = `http://localhost:3001/user/${this.Id}/average-sessions`;
    this.userInfos = this.getUserInfos()
    console.log(this.userInfos)

  }

  getId() {
    return this.ID
  }

  getUserInfos(){
    const rawDatas = fetch(this.InfoUrl)
                    .then(reponse => reponse.json())
                    .then(reponse => reponse)
    console.log(rawDatas)
    return rawDatas
  }

}
  
const ju = new DataController(12).getUserInfos()
console.log(ju)


