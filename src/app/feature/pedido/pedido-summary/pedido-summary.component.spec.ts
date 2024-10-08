import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoSummaryComponent } from './pedido-summary.component';

describe('PedidoSummaryComponent', () => {
  let component: PedidoSummaryComponent;
  let fixture: ComponentFixture<PedidoSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
