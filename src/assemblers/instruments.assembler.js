import Instrument from '@/models/instrument.model';

export default class InstrumentsAssembler {
  static assemblerList(instruments) {
    const assembledInstruments = [];
    if (!instruments) {
      return [new Instrument()];
    }

    instruments.forEach(instrument => {
      const assembledInstrument = new Instrument();
      assembledInstrument.docId = instrument.docId ? instrument.docId : undefined;
      assembledInstrument.alias = instrument.alias ? instrument.alias : undefined;
      assembledInstrument.family = instrument.family ? instrument.family : undefined;
      assembledInstrument.name = instrument.name ? instrument.name : undefined;

      assembledInstruments.push(assembledInstrument);
    });
    return assembledInstruments;
  }

  static assembler(instrument) {
    if (!instrument) {
      return new Instrument();
    } 

    const assembledInstrument = new Instrument();
    assembledInstrument.docId = clothes.docId ? clothes.docId : undefined;
    assembledInstrument.alias = clothes.alias ? clothes.alias : undefined;
    assembledInstrument.family = clothes.family ? clothes.family : undefined;
    assembledInstrument.name = clothes.name ? clothes.name : undefined;

    return assembledInstrument;
  }
}
