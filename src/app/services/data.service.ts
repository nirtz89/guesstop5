import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new ReplaySubject<any>();
  client_id = '91e51addd138490d869819e7077682cc'; // Your client id
  client_secret = 'bbca8d5a4af34309b8c497cfd29af5c3'; // Your secret
  randomArtists = [
    '6olE6TJLqED3rqDCT0FyPh', // Nirvana
    '3WrFJ7ztbogyGnTHbHJFl2', // The Beatles
    '36QJpDe2go2KgaRleHCDTp', // Led Zeppelin
    '4gzpq5DPGxSnKTe4SA8HAU', // Coldplay
    '2ye2Wgw4gimLv2eAKyk1NB', // Metallica
    '1dfeR4HaWDbWqFHLkxsg1d', // Queen
    '0k17h0D3J5VfsdmQ1iZtE9', // Pink Floyd
    '3qm84nBOXUEQ2vnTfUTTFC', // Guns N' Roses
    '711MCceyCBcFnzjGY4Q7Un', // AC/DC
  ]

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

    async getArtistAndTopTracksByRandom() {
      const artistId = this.randomArtists[Math.floor(Math.random() * this.randomArtists.length)];
      const artistData = await this.getArtistDataById(artistId);
      const topTracks = await this.getArtistTopTracks(artistId);
      this.subject.next({artistData, topTracks});
    }

    onGetArtistAndTopTracks(): Observable<any> {
      return this.subject.asObservable();
    }
}
