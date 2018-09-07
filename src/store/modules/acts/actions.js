import ActsService from '@/services/acts.service';

export async function fetchAllActs(context) {
  const actsService = new ActsService();
  const allActs = await actsService.getAllActs();
  context.commit('setAllActs', allActs);
}

export const actions = {
  fetchAllActs,
};
