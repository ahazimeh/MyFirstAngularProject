import { SearchBarComponent } from './../search-bar/search-bar.component';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  faBell,
  faBed,
  faCar,
  faPuzzlePiece,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  faUser = faUser;

  constructor() {}
  @ViewChild('logo') logo: ElementRef;
  // @ViewChild('z') z: ElementRef;
  @ViewChild(SearchBarComponent, { read: ElementRef }) private z: ElementRef;
  // private z: ElementRef;
  ngAfterViewInit() {
    // const navElement = this.z.nativeElement;
    // console.log(navElement);
  }
  ngOnInit(): void {}
  get() {
    // this.z.nativeElement.style.backgroundColor = 'green';
    // alert('it worked:)');
    console.log('hi');
    // console.log(this.logo.nativeElement.innerHtml);
    this.logo.nativeElement.innerHtml = 'Logo';
    console.log(this.logo.nativeElement.innerHtml);
    this.logo.nativeElement.style.backgroundColor = 'red';
    this.logo.nativeElement.style.height = '200px';
    this.logo.nativeElement.style.width = '200px';
    // this.logo.nativeElement.nativeElement.innerHtml = 'adasdsd';

    // this.logo.nativeElement.
  }
}
