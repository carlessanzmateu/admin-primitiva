import ActType from '@/models/actType.model';

export default class ActTypeAssembler {
  static assemblerList(actTypes) {
    const assembledActTypes = [];
    if (!actTypes) {
      return [new ActType()];
    }

    actTypes.forEach((actType) => {
      const assembledActType = new ActType();
      assembledActType.id = actType.id ? actType.id : undefined;
      assembledActType.docId = actType.docId ? actType.docId : undefined;
      assembledActType.name = actType.name ? actType.name : undefined;

      assembledActTypes.push(assembledActType);
    });

    return assembledActTypes;
  }
}
