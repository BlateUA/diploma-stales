import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StalePageComponent } from './stale-page.component';

describe('StalePageComponent', () => {
  let component: StalePageComponent;
  let fixture: ComponentFixture<StalePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StalePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
