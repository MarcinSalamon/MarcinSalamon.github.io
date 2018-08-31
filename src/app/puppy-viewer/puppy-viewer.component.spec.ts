import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyViewerComponent } from './puppy-viewer.component';

describe('PuppyViewerComponent', () => {
  let component: PuppyViewerComponent;
  let fixture: ComponentFixture<PuppyViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
