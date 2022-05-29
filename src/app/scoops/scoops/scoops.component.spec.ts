import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoopsComponent } from './scoops.component';

describe('ScoopsComponent', () => {
  let component: ScoopsComponent;
  let fixture: ComponentFixture<ScoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
