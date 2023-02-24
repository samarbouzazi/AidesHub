import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaidesComponent } from './listaides.component';

describe('ListaidesComponent', () => {
  let component: ListaidesComponent;
  let fixture: ComponentFixture<ListaidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
