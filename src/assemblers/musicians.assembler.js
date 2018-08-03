export default class MusiciansAssembler {
  static assembler(musicians) {
    const assembledMusicians = [];

    musicians.forEach((musician) => {
      assembledMusicians.push({
        raw: {
          ...musician,
        },
        assembled: {
          title: `${musician.name} ${musician.firstSurname} ${musician.secondSurname}`,
          subtitle: '',
          description: this.instrumentsToString(musician.instruments),
        },
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

  static musicianAliasBuilder(musicianInfo) {
    let { name, firstSurname, secondSurname } = musicianInfo;

    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');
    firstSurname = firstSurname.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');
    secondSurname = secondSurname.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');

    return name + firstSurname + secondSurname;
  }
}
