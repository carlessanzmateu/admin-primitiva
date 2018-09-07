import ActsAssembler from '@/assemblers/acts.assembler';

export function getAllActs(state) {
  return ActsAssembler.assemblerList(state.actsFromService);
}

export function getAct(state) {
  return ActsAssembler.assembler(state.actDetail);
}

export const getters = {
  getAllActs,
  getAct,
};
