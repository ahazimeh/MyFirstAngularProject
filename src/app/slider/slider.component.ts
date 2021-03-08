import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import {
  faBell,
  faBed,
  faCar,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
// import * as EventEmitter from 'events';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements AfterViewInit {
  @Output() parentFunction = new EventEmitter();
  @Input() hero;

  message: string;

  constructor() {}

  ngOnInit(): void {
    this.message = 'a';
    this.parentFunction.emit('ali');
    console.log(this.hero);
  }
  @ViewChild('z') z;
  ngAfterViewInit() {
    console.log(this.z);
  }
  ng;
  faBell = faBell;
  faBed = faBed;
  faCar = faCar;
  faPuzzlePiece = faPuzzlePiece;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    '../../assets/test.jpg',
    '../../assets/test.jpg',
    '../../assets/test.jpg',
  ];
}
