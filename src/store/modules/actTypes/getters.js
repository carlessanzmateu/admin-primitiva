import ActTypeAssembler from '@/assemblers/actTypes.assembler';

export function getAllActTypes(state) {
  return ActTypeAssembler.assemblerList(state.actTypesFromService);
}

export const getters = {
  getAllActTypes,
};
