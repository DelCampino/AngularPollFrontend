import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgridComponent } from './bgrid.component';

describe('BgridComponent', () => {
  let component: BgridComponent;
  let fixture: ComponentFixture<BgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
