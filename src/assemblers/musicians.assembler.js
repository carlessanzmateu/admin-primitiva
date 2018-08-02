export default class MusiciansAssembler {
  static assembler(musicians) {
    const assembledMusicians = [];

    musicians.forEach((musician) => {
      assembledMusicians.push({
        title: `${musician.name} ${musician.firstSurname} ${musician.secondSurname}`,
        subtitle: '',
        description: this.instrumentsToString(musician.instruments),
      });
    });

    return assembledMusicians;
  }

  static instrumentsToString(instruments) {
    let instrumentsAsString = '';

    instruments.forEach((instrument, index) => {
      if (index === 0) {
        instrumentsAsString += `${instrument.id}`;
      } else {
        instrumentsAsString += ` ${instrument.id}`;
      }
    });

    return instrumentsAsString;
  }
}
