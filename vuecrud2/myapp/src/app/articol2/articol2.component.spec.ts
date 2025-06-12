import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articol2Component } from './articol2.component';

describe('Articol2Component', () => {
  let component: Articol2Component;
  let fixture: ComponentFixture<Articol2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articol2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
