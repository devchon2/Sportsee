

export default class ProfileModel {
  constructor(id, userDatas) {
    //récupération informations personnelles
   
    this.id = id;
    this.personalsInfos = userDatas[0].userInfos
    this.name = this.personalsInfos.lastName
    this.firstName = this.personalsInfos.firstName
    this.age = this.personalsInfos.age
    
        //récupération des informations de Score
    this.score = [{ name : 'score', value: userDatas[0].score ? userDatas[0].score : userDatas[0].todayScore }]

    //récupération des informations de KeyData
    this.keyData = userDatas[0].keyData

    //récupération des informations de Moyenne de session 
    this.averageSessions = userDatas[3]
    this.formatedAverage = [
      {day : 'L', sessionLength : this.averageSessions[0].sessionLength},
      {day : 'M', sessionLength : this.averageSessions[1].sessionLength},
      {day : 'M', sessionLength : this.averageSessions[2].sessionLength},
      {day : 'J', sessionLength : this.averageSessions[3].sessionLength},
      {day : 'V', sessionLength : this.averageSessions[4].sessionLength},
      {day : 'S', sessionLength : this.averageSessions[5].sessionLength},
      {day : 'D', sessionLength : this.averageSessions[6].sessionLength},
    ]
    
    //récupération des informations de 
    this.sessions = userDatas[2]
    this.formatedSessions = [
      {day: '1' , kilogram: this.sessions[0].kilogram, calories: this.sessions[0].calories},
      {day: '2' , kilogram: this.sessions[1].kilogram, calories: this.sessions[1].calories},
      {day: '3' , kilogram: this.sessions[2].kilogram, calories: this.sessions[2].calories},
      {day: '4' , kilogram: this.sessions[3].kilogram, calories: this.sessions[3].calories},
      {day: '5' , kilogram: this.sessions[4].kilogram, calories: this.sessions[4].calories},
      {day: '6' , kilogram: this.sessions[5].kilogram, calories: this.sessions[5].calories},
      {day: '7' , kilogram: this.sessions[6].kilogram, calories: this.sessions[6].calories}
    ]
    
    //récupération des informations de Activity
    this.activities = userDatas[1]
    this.formatedActivities = [
      {kind: this.activities[1]},
      {kind: this.activities[2]},
      {kind: this.activities[3]},
      {kind: this.activities[4]},
      {kind: this.activities[5]},
      {kind: this.activities[6]}
    ]

    console.log('test activity', this.formatedActivities)

  }
}
     