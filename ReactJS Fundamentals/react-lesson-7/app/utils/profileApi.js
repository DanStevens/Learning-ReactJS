const ENDPOINT = '/profiles.json'

export function getProfiles() {
  return fetch(ENDPOINT).then(r => r.json()).catch(err => console.error(err));
}