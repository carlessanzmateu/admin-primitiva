import ActsService from '@/services/acts.service';

export async function fetchAllActs(context) {
  const actsService = new ActsService();
  const allActs = await actsService.getAllActs();
  context.commit('setAllActs', allActs);
}

export async function fetchActDetail(context, docId) {
  const actsService = new ActsService();
  const act = await actsService.getAct(docId);
  context.commit('setAct', act);
}

export const actions = {
  fetchAllActs,
  fetchActDetail,
};
