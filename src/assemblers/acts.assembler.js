import Act from '@/models/act.model';

export default class ActsAssembler {
  static assemblerList(acts) {
    const assembledActs = [];
    if (!acts) {
      return [new Act()];
    }

    acts.forEach(act => {
      const assembledAct = new Act();
      assembledAct.id = act.id ? act.id : undefined;
      assembledAct.docId = act.docId ? act.docId : undefined;
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

      assembledActs.push(assembledAct);
    });

    return assembledActs;
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