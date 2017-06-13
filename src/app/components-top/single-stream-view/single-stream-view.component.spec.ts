import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStreamViewComponent } from './single-stream-view.component';

describe('SingleStreamViewComponent', () => {
  let component: SingleStreamViewComponent;
  let fixture: ComponentFixture<SingleStreamViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStreamViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStreamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
