import ClothesService from '@/services/clothes.service';

export async function fetchAllClothes(context) {
  const clothesService = new ClothesService();
  const allClothes = await clothesService.getAllClothes();
  context.commit('setAllClothes', allClothes);
}

export const actions = {
  fetchAllClothes,
};
