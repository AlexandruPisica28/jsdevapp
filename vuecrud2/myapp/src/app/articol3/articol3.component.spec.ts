import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articol3Component } from './articol3.component';

describe('Articol3Component', () => {
  let component: Articol3Component;
  let fixture: ComponentFixture<Articol3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articol3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articol3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
