import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelsSearchPageComponent } from './steels-search-page.component';

describe('SteelsSearchPageComponent', () => {
  let component: SteelsSearchPageComponent;
  let fixture: ComponentFixture<SteelsSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteelsSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelsSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
