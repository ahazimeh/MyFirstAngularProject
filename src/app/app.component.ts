import { SliderComponent } from './slider/slider.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  message: string = 'hello world';
  @ViewChild(SliderComponent) child;
  ngAfterViewInit() {
    this.message = this.child.message;
    console.log(this.child.message);
  }
  f() {
    console.log(this.child.message);
  }
  title = 'Project';
  parentFunction(data) {
    console.log(data);
  }
}
