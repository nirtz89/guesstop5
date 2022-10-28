import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(public dialog: MatDialog, public dataService: DataService, private _snackBar: MatSnackBar) {

  }

  attempts = 0;
  MAX_ATTEMPTS = 3;
  songs = [] as any;
  guess = [] as any;
  trueTopTracks = [];

  async ngOnInit(): Promise<void> {
    const subscription: Subscription = this.dataService.onGetArtistAndTopTracks().subscribe(
      (data) => {
      this.transformTracks(data.topTracks.tracks);
    });
  }

  private transformTracks(tracks: any) {
    const allSongs = tracks.map((track: any) => ({name: track.name.split(" - ")[0], correct: false, inPlace: false}));
    this.trueTopTracks = allSongs.slice(0, 5);
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

  dragStarted() {
    this.guess.forEach((track: any) => {
      track.correct = false;
      track.inPlace = false;
    });
  }

  canDragToGuess = () => {
    return this.guess.length < 5;
  }

  canDragToBucket = () => {
    return this.songs.length < 6;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {duration: 3000});
  }

  takeGuess() {
    this.attempts++;
    this.trueTopTracks.forEach((topTrack, index) => {
      if (this.guess[index] === topTrack) {
        this.guess[index].correct = true;
        // this.openSnackBar("Correct!");
      }
      else {
        if ((this.trueTopTracks as any).find((track: any) => track.name === this.guess[index].name)) {
          this.guess[index].inPlace = true;
        }
      }
    });
    if (this.attempts === this.MAX_ATTEMPTS) {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(GameOverDialog, {
      data: {didWin: false},
      disableClose: true
    });
  }

}
@Component({
  selector: 'gameover-dialog',
  templateUrl: 'gameover-dialog.html',
})
export class GameOverDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  didWin: boolean = false;

  ngOnInit() {
    // will log the entire data object
    this.didWin = this.data.didWin;
  }
  

  retry = () => {
    window.location.reload();
  }

}