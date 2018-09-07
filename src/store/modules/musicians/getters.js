import MusiciansAssembler from '@/assemblers/musicians.assembler';

export function getAllMusicians(state) {
  return MusiciansAssembler.assemblerList(state.musiciansFromService);
}

export const getters = {
  getAllMusicians,
};
