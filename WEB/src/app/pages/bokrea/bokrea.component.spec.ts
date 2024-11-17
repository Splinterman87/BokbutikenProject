import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokreaComponent } from './bokrea.component';

describe('BokreaComponent', () => {
  let component: BokreaComponent;
  let fixture: ComponentFixture<BokreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BokreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
