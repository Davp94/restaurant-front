import { PlatoDto } from "../core/dto/plato.dto";
import { StateItem } from "./state.model";
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
const initialState: StateItem = {
  userName: '',
  token: '',
  platos: []
}

export const StateStore = signalStore(
  { providedIn: 'root'},
  withState(initialState),
  withMethods(store => ({
    addPlato(platoDto: PlatoDto){
      patchState(store, {
        platos: [...store.platos(), platoDto]
      })
    }
  }))

)
