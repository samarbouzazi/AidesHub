import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaidesComponent } from './addaides.component';

describe('AddaidesComponent', () => {
  let component: AddaidesComponent;
  let fixture: ComponentFixture<AddaidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddaidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
