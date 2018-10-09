import { request, config } from 'utils';

const { api } = config;
const { QueryManuscriptApi, QueryColumnTypeApi, JicengshengyinApi, LanmuAllApi, GetTaskListApi, GetAllTaskApi, GetTowStupidApi, GetPatryWorkListApi, GetTowStupidListApi, GetVolunteerOrderApi, GettongjibumenApi, GetUnreadMessageApi, QueryMembersApi } = api;

export async function queryPartyData (payload) {
  return request({
    url: QueryManuscriptApi,
    method: 'post',
    data: payload,
  });
  return {};
}

export async function queryPartyTabs (payload) {
  return request({
    url: QueryColumnTypeApi,
    method: 'get',
    data: payload,
  });
}

export async function queryPatryList (payload) {
  return request({
    url: QueryManuscriptApi,
    method: 'post',
    data: payload,
  });
}

export async function getJicengshenying (payload) {
  return request({
    url: JicengshengyinApi,
    method: 'get',
    data: payload,
  });
}

export async function getAllLanmu (payload) {
  return request({
    url: LanmuAllApi,
    method: 'get',
    data: payload,
  });
}

export async function getTaskList (payload) {
  return request({
    url: GetTaskListApi,
    method: 'get',
    data: payload,
  });
}

export async function getAllTask (payload) {
  return request({
    url: GetAllTaskApi,
    method: 'get',
    data: payload,
  });
}


export async function GetTowStupid (payload) {
  return request({
    url: GetTowStupidApi,
    method: 'get',
    data: payload,
  });
}
export async function GetTowStupidList (payload) {
  return request({
    url: GetTowStupidListApi,
    method: 'post',
    data: payload,
  });
}
export async function GetPatryWorkList (payload) {
  return request({
    url: GetPatryWorkListApi,
    method: 'get',
    data: payload,
  });
}
export async function GetVolunteerOrder () {
  return request({
    url: GetVolunteerOrderApi,
    method: 'get',
  });
}
export async function Gettongjibumen () {
  return request({
    url: GettongjibumenApi,
    method: 'get',
  });
}
export async function GetUnreadMessage () {
  return request({
    url: GetUnreadMessageApi,
    method: 'get',
  });
}
export async function QueryMembers (payload) {
  return request({
    url: QueryMembersApi,
    method: 'get',
    data: payload,
  });
}
