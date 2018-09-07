import ActsAssembler from '@/assemblers/acts.assembler';

export function getAllActs(state) {
  return ActsAssembler.assemblerList(state.actsFromService);
}

export const getters = {
  getAllActs,
};
