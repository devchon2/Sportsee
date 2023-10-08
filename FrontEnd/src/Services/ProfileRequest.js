import ProfileModel from "./ProfileModel.js";
import mockDatas from '../mockdata/data.js'


export default async function getProfile(id, source) {
  // appelle toutes les fonctions d'api et du mock Data

  let Datas;

  if (source === 'mock') {
    Datas = [
      mockDatas.USER_MAIN_DATA.filter((obj) => Number(obj.id) === Number(id))[0],
      mockDatas.USER_PERFORMANCE.filter((obj) => Number(obj.userId) === Number(id))[0],
      (mockDatas.USER_ACTIVITY.filter((obj) => Number(obj.userId) === Number(id))[0]).sessions,
      (mockDatas.USER_AVERAGE_SESSIONS.filter((obj) => Number(obj.userId) === Number(id))[0]).sessions,
    ];



  } else {

    const infoUrl = `http://localhost:3001/user/${id}`;
    const perfsUrl = `http://localhost:3001/user/${id}/performance`;
    const activitiesUrl = `http://localhost:3001/user/${id}/activity`;
    const averageSessionUrl = `http://localhost:3001/user/${id}/average-sessions`;

    const infos = await fetch(infoUrl).then((response) => response.json());
    const perfs = await fetch(perfsUrl).then((response) => response.json());
    const activities = await fetch(activitiesUrl).then((response) => response.json());
    const average = await fetch(averageSessionUrl).then((response) => response.json());

    Datas = [await infos.data, await perfs.data, await (activities.data).sessions, await (average.data).sessions];
  }

  return new ProfileModel(id, Datas);
}