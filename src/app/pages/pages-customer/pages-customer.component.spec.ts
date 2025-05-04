import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCustomerComponent } from './pages-customer.component';

describe('PagesCustomerComponent', () => {
  let component: PagesCustomerComponent;
  let fixture: ComponentFixture<PagesCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
