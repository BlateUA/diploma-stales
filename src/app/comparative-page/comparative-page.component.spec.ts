import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativePageComponent } from './comparative-page.component';

describe('ComparativePageComponent', () => {
  let component: ComparativePageComponent;
  let fixture: ComponentFixture<ComparativePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
