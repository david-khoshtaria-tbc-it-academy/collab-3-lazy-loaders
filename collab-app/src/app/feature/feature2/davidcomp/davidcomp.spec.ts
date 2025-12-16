import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Davidcomp } from './davidcomp';

describe('Davidcomp', () => {
  let component: Davidcomp;
  let fixture: ComponentFixture<Davidcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Davidcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Davidcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
