import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  client_id = '91e51addd138490d869819e7077682cc'; // Your client id
  client_secret = 'bbca8d5a4af34309b8c497cfd29af5c3'; // Your secret

  constructor() { }

  private async getAccessToken() {
    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (btoa(this.client_id + ':' + this.client_secret))
      },
      body: 'grant_type=client_credentials'
    }).then(response => response.json())
      .then(data => data.access_token);
  }

  async getArtistTopTracks(artistId: string) {
    const at = await this.getAccessToken();
    const fetchData = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=IL`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + at
          }
        });
    return await fetchData.json();
    };

  async getArtistDataById(artistId: string) {
    const at = await this.getAccessToken();
    const fetchData = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + at
          }
        });
    return await fetchData.json();
    };
}
