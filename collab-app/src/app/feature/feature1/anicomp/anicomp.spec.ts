import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anicomp } from './anicomp';

describe('Anicomp', () => {
  let component: Anicomp;
  let fixture: ComponentFixture<Anicomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anicomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anicomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
