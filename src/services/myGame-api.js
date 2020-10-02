import tokenService from '../services/tokenService';
const BASE_URL = '/api/myGame/';

export function create(myGame) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(myGame)
    }, { mode: "cors" })
    .then(res => res.json());
}

export function getAll() {
  return fetch(BASE_URL, {
      method: "GET",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
  }, { mode: "cors" })
  .then(res => res.json());
}
