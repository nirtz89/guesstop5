import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Artist } from '../contracts';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  artist = '';
  subscription?: Subscription;

  constructor(public dialog: MatDialog, public dataService: DataService) { }

  async ngOnInit(): Promise<void> {
    this.subscription = this.dataService.onGetArtistAndTopTracks().subscribe(
      (data) => {
        const artist: Artist = data.artistData;
        this.artist = artist.name;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}