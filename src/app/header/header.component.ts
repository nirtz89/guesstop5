import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Artist } from '../contracts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  artist = '';
  constructor(public dialog: MatDialog, public dataService: DataService) { }

  async ngOnInit(): Promise<void> {
    const artist: Artist = await this.dataService.getArtistDataById('1dfeR4HaWDbWqFHLkxsg1d');
    this.artist = artist.name;
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