import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StalesListPageComponent } from './stales-list-page.component';

describe('StalesListPageComponent', () => {
  let component: StalesListPageComponent;
  let fixture: ComponentFixture<StalesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StalesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StalesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
