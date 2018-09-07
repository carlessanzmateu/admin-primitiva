import InstrumentsService from '@/services/instruments.service';

export async function fetchAllInstruments(context) {
  const instrumentsService = new InstrumentsService();
  const allInstruments = await instrumentsService.getAllInstruments();
  context.commit('setAllInstruments', allInstruments);
}

export const actions = {
  fetchAllInstruments,
};
