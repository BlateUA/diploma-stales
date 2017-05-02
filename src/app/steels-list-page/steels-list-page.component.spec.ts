import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelsListPageComponent } from './steels-list-page.component';

describe('SteelsListPageComponent', () => {
  let component: SteelsListPageComponent;
  let fixture: ComponentFixture<SteelsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteelsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
