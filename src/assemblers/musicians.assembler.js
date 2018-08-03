import Musician from '@/models/musician.model';

export default class MusiciansAssembler {
  static assemblerList(musicians) {
    const assembledMusicians = [];
    if (!musicians) {
      return [new Musician()];
    }

    musicians.forEach((musician) => {
      const assembledMusician = new Musician();
      assembledMusician.docId = musician.docId;
      assembledMusician.name = musician.name;
      assembledMusician.firstSurname = musician.firstSurname;
      assembledMusician.secondSurname = musician.secondSurname;
      assembledMusician.instruments = musician.instruments;

      assembledMusicians.push(assembledMusician);
    });

    return assembledMusicians;
  }
}
