import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedgeComponent } from './bedge.component';

describe('BedgeComponent', () => {
  let component: BedgeComponent;
  let fixture: ComponentFixture<BedgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
