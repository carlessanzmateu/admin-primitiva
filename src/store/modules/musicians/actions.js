import MusiciansService from '@/services/musicians.service';

export async function fetchMusicians(context) {
  const musicianService = new MusiciansService();
  const musicians = await musicianService.getMusicians();
  context.commit('setMusicians', musicians);
}

export async function fetchMusicianDetail(context, docId) {
  const musicianService = new MusiciansService();
  const musician = await musicianService.getMusician(docId);
  context.commit('setMusician', musician);
}

export const actions = {
  fetchMusicians,
  fetchMusicianDetail,
};
