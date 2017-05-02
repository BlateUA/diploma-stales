import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelPageComponent } from './steel-page.component';

describe('SteelPageComponent', () => {
  let component: SteelPageComponent;
  let fixture: ComponentFixture<SteelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
