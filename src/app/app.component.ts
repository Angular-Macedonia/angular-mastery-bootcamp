import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Person {
  name?: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string | undefined | null = null;
  name = 'angel';
  person: Person = {
  }
  isClicked: boolean = false;


   getTitle() {
    return this.title;
  }

  getPersonName() {
    // if(this.person?.name) {
    //   return this.person.name
    // }
    // else return "no name";
    return this.person.name ?? "no name";
  }

  //
  onClick(event: unknown) {
    console.log(event as PointerEvent, 'clicked');
    // this.isClicked = true
    // asodkoask d
    //$distintEvent()
  }
}
