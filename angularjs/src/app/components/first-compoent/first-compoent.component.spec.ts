import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompoentComponent } from './first-compoent.component';

describe('FirstCompoentComponent', () => {
  let component: FirstCompoentComponent;
  let fixture: ComponentFixture<FirstCompoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompoentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
