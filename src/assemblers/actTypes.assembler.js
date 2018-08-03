import ActType from '@/models/actType.model';

export default class ActTypeAssembler {
  static assemblerList(actTypes) {
    const assembledActTypes = [];
    if (!actTypes) {
      return [new ActType()];
    }

    actTypes.forEach(actType => {
      const assembledActType = new ActType();
      assembledActType.id = actType.id ? actType.id : undefined;
      assembledActType.docId = actType.docId ? actType.docId : undefined;
      assembledActType.name = actType.name ? actType.name : undefined;

      assembledActTypes.push(assembledActType);
    });

    return assembledActTypes;
  }

  static assembler(act) {
    if (!act) {
      return new Act();
    } 

    const assembledAct = new Act();
    assembledAct.id = act.id ? act.id : undefined;
    assembledAct.name = act.name ? act.name : undefined;
    assembledAct.actType = act.actType ? act.actType : undefined;
    assembledAct.description = act.description ? act.description : undefined;
    assembledAct.expectedMusicians = act.expectedMusicians ? act.expectedMusicians : undefined;
    assembledAct.assistantMusicians = act.assistantMusicians ? act.assistantMusicians : undefined;
    assembledAct.instrumentPerMusicians = act.instrumentPerMusicians ? act.instrumentPerMusicians : undefined;
    assembledAct.expenses = act.expenses ? act.expenses : undefined;
    assembledAct.income = act.income ? act.income : undefined;
    assembledAct.date = act.date ? act.date : undefined;
    assembledAct.location = act.location ? act.location : undefined;
    assembledAct.startHour = act.startHour ? act.startHour : undefined;
    assembledAct.finishHour = act.finishHour ? act.finishHour : undefined;
    assembledAct.reinforcements = act.reinforcements ? act.reinforcements : undefined;
    assembledAct.clothes = act.clothes ? act.clothes : undefined;

    return assembledAct;
  }
}