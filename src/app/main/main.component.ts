import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(public dataService: DataService, private _snackBar: MatSnackBar) {

  }

  songs = [''];
  guess = [''];

  async ngOnInit(): Promise<void> {
    const topTracks = await this.dataService.getArtistTopTracks('1dfeR4HaWDbWqFHLkxsg1d');
    this.transformTracks(topTracks.tracks);
  }

  private transformTracks(tracks: any) {
    const allSongs = tracks.map((track: any) => track.name.split(" - ")[0]);
    allSongs.sort(() => (Math.random() > 0.5) ? 1 : -1)
    this.songs = allSongs.slice(0, 5);
    this.guess = allSongs.slice(5, allSongs.length);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  canDragFromGuess = () => {
    /** if (this.guess.length == 5) {
      this.openSnackBar("Guess list can't have more than 5 items");
      return false;
    }
    return true; **/
    return this.guess.length < 5;
  }

  canDragFromBucket = () => {
    return this.songs.length < 6;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {duration: 3000});
  }
}