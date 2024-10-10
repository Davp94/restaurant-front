import { PlatoDto } from "../core/dto/plato.dto";

export type StateItem = {
  userName: string;
  token: string;
  platos: PlatoDto[];
}
