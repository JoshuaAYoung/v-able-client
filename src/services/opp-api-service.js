import TokenService from './token-service';
import config from '../config';

const OppApiService = {
  getOpps(searchTerm) {
    let oppUrl = `${config.API_ENDPOINT}/opportunities`;
    if (searchTerm) {
      oppUrl = `${oppUrl}/?searchTerm=${searchTerm}`;
    }
    return fetch(oppUrl, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((error) => Promise.reject(error)) : res.json()
    );
  },

  getOppById(oppId) {
    return fetch(`${config.API_ENDPOINT}/opportunities/${oppId}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((error) => Promise.reject(error)) : res.json()
    );
  },
  postOpportunity(opp) {
    return fetch(`${config.API_ENDPOINT}/opportunities`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        org_id: opp.org_id,
        title: opp.title,
        description: opp.description,
        contact: opp.contact,
        start_date: opp.start_date,
        duration: opp.duration,
        commitment: opp.commitment,
        ed_level: opp.ed_level,
        experience: opp.experience,
        license: opp.license,
        remote: opp.remote,
        posted: opp.posted,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((error) => Promise.reject(error)) : res.json()
    );
  },
};

export default OppApiService;
