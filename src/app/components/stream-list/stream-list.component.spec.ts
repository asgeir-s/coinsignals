import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamListComponent } from './stream-list.component';

describe('StreamListComponent', () => {
  let component: StreamListComponent;
  let fixture: ComponentFixture<StreamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
