import { fetcherDelete, fetcherGet, fetcherPost, fetcherPut } from '../clientFectcher/clientFetcher.js';

const BEARER_TOKEN_KEY = 'CUBECONNECT_BEARER_TOKEN';
export const GAME_NEWS_URL = 'https://api.rawg.io/api/platforms?key=69cb216f51964020bd2197af835c7b75';

const API_URL = 'http://localhost:5000';

export const getBearerToken = () => {
  return localStorage.getItem(BEARER_TOKEN_KEY);
};

export const setBearerToken = token => {
  localStorage.setItem(BEARER_TOKEN_KEY, token);
};

export const removeBearerToken = () => {
  localStorage.removeItem(BEARER_TOKEN_KEY);
};

export const registerUser = userData => {
  return fetcherPost(`${API_URL}/user/register`, userData);
};

export const loginUser = payload => {
  return fetcherPost(`${API_URL}/login`, payload);
};

export const getCities = () => {
  return fetcherGet(`${API_URL}/cities`);
};

export const getGameGenres = () => {
  return fetcherGet(`${API_URL}/game_genres`);
};

export const getGameModes = () => {
  return fetcherGet(`${API_URL}/game_modes`);
};

export const getGamePlatforms = () => {
  return fetcherGet(`${API_URL}/game_platforms`);
};

export const getCommunityTypes = () => {
  return fetcherGet(`${API_URL}/community_types`);
};

export const getUserProfile = () => {
  return fetcherGet(`${API_URL}/user/profile`, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const updateUserProfile = payload => {
  return fetcherPut(`${API_URL}/user/profile`, payload, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const sendRequestToGroup = groupID => {
  return fetcherPost(`${API_URL}/groups/request`, { groupID }, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const getGroups = () => {
  return fetcherGet(`${API_URL}/groups`, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const getGroupRequests = () => {
  return fetcherGet(`${API_URL}/groups/requests`, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const updateGroupRequest = (requestID, status) => {
  return fetcherPut(`${API_URL}/groups/respond-to-requests`, { requestID, status }, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const getUserGroups = () => {
  return fetcherGet(`${API_URL}/user/groups`, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const updateGroup = (groupID, payload) => {
  return fetcherPut(`${API_URL}/group/${groupID}`, payload, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const deleteGroup = groupID => {
  return fetcherDelete(`${API_URL}/group/${groupID}`, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};

export const deleteMemberInGroup = (groupID, userID) => {
  return fetcherDelete(`${API_URL}/group/${groupID}/member/${userID}`, { headers: { Authorization: `Bearer ${getBearerToken()}` } });
};
