import Axios from 'axios';

export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export function updateSearchTerm(searchTerm = null){
  return {
    type: UPDATE_SEARCHTERM,
    searchTerm
  }
}

export const REQUEST_GIT = 'REQUEST_GIT';
export function searchGitHub(searchTerm){
  var results = Axios.get('/search/repos', {
      params: {
      searchTerm: searchTerm
      }
  });

  return {
    type: REQUEST_GIT,
    payload: results
  }

}
