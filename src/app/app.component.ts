import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-note-fontend';

  list: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1];

}
