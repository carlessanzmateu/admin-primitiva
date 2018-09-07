import InstrumentsAssembler from '@/assemblers/instruments.assembler';

export function getAllInstruments(state) {
  return InstrumentsAssembler.assemblerList(state.instrumentsFromService);
}

export const getters = {
  getAllInstruments,
};
