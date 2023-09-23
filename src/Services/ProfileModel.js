

export default class ProfileModel {
  constructor(id, userDatas) {
    this.id = id;
    this.datas = userDatas
    this.infos = this.getInfos()


    console.log('profilmodel', this.datas)

  
  }
  
  getInfos() {
    
    return this.datas[0].userInfos;
  }
}