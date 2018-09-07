import ActTypeService from '@/services/actType.service';

export async function fetchActTypes(context) {
  const actTypeService = new ActTypeService();
  const actTypes = await actTypeService.getAllActTypes();
  context.commit('setActTypes', actTypes);
}

export const actions = {
  fetchActTypes,
};
