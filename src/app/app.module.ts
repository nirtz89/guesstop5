import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameOverDialog, MainComponent } from './main/main.component';
import { DialogContentExampleDialog, HeaderComponent } from './header/header.component';
import { DataService } from './services/data.service';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    DialogContentExampleDialog,
    GameOverDialog,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
