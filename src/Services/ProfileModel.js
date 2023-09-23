

export default class ProfileModel {
  constructor(id, userDatas) {
    this.id = id;
    this.datas = userDatas
    
    this.infos = this.datas[0].userInfos
    this.firstName = this.infos.firstName
    this.lastName = this.infos.lastName
    this.age = this.infos.age
    
    this.perfs = this.datas[1]
    this.activities = this.datas[2]
    this.averageSessions = this.datas[3]


    
    
  }
  
}