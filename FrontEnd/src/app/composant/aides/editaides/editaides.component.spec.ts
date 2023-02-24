import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaidesComponent } from './editaides.component';

describe('EditaidesComponent', () => {
  let component: EditaidesComponent;
  let fixture: ComponentFixture<EditaidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
