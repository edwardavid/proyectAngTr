import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDetailComponent } from './productos-detail.component';

describe('ProductosDetailComponent', () => {
  let component: ProductosDetailComponent;
  let fixture: ComponentFixture<ProductosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
