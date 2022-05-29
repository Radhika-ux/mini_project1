import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettoknowusComponent } from './gettoknowus.component';

describe('GettoknowusComponent', () => {
  let component: GettoknowusComponent;
  let fixture: ComponentFixture<GettoknowusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettoknowusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettoknowusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
