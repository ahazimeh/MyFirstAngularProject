import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHomePageComponent } from './top-home-page.component';

describe('TopHomePageComponent', () => {
  let component: TopHomePageComponent;
  let fixture: ComponentFixture<TopHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
