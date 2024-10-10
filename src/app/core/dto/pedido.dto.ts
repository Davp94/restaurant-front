import { ClienteDto } from "./cliente.dto";
import { DetallePedidoDto } from "./detalle-pedido.dto";

export interface PedidoDto {
  id: number;
  cliente?: ClienteDto,
  fecha: Date;
  total: number;
  //detallePedido: DetallePedidoDto[];
}
