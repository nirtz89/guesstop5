import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  subscription?: Subscription;
  isAppLoading: boolean = true;
  artistImage: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getArtistAndTopTracksByRandom();
    this.subscription = this.dataService.onGetArtistAndTopTracks().subscribe((data) => {
      this.artistImage = data.artistData.images[0].url;
      setTimeout(() => this.isAppLoading = false, 2000)
    });
  }

  title = 'guesstop5';
}
