import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPositionComponent } from './open-position.component';

describe('PostPositionComponent', () => {
  let component: OpenPositionComponent;
  let fixture: ComponentFixture<OpenPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
