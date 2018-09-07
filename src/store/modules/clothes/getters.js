import ClothesAssembler from '@/assemblers/clothes.assembler';

export function getAllClothes(state) {
  return ClothesAssembler.assemblerList(state.allClothesFromService);
}

export const getters = {
  getAllClothes,
};
