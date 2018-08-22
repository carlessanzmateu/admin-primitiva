import RehearsalPlaces from '@/models/rehearsalPlaces.model';

export default class RehearsalPlacesAssembler {
  static assemblerList(rehearsalPlaces) {
    const assembledRehearsalPlaces = [];
    if (!rehearsalPlaces) {
      return [new RehearsalPlaces()];
    }

    rehearsalPlaces.forEach((rehearsalPlace) => {
      const assembledRehearsalPlace = new RehearsalPlaces();
      assembledRehearsalPlace.docId = rehearsalPlace.docId ? rehearsalPlace.docId : undefined;
      assembledRehearsalPlace.name = rehearsalPlace.name ? rehearsalPlace.name : undefined;

      assembledRehearsalPlaces.push(assembledRehearsalPlace);
    });

    return assembledRehearsalPlaces;
  }

  static assembler(rehearsalPlace) {
    const assembledRehearsalPlace = new RehearsalPlaces();

    if (!rehearsalPlace) {
      return assembledRehearsalPlace;
    }

    assembledRehearsalPlace.docId = rehearsalPlace.docId ? rehearsalPlace.docId : undefined;
    assembledRehearsalPlace.name = rehearsalPlace.name ? rehearsalPlace.name : undefined;

    return assembledRehearsalPlace;
  }
}
