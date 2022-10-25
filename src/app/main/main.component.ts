import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  songs = ['Bohemian Raphsody', 'Another One Bites The Dust', "Don't Stop Me Now", 'Under Pressure'];
  guess = ['We Will Rock You', 'Crazy Little Thing Called Love', 'We Are The Champions', 'Radio Ga Ga', 'I Want To Break Free'];

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
    return this.guess.length < 5;
  }

  canDragFromBucket = () => {
    return this.songs.length < 6;
  }
}