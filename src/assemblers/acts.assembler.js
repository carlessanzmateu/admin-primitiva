import { Act } from '@/models/act.model';
import { ActRequest } from '@/models/act.model';
import FirestoreUtils from '@/utils/firestore.util';

export default class ActsAssembler {
  static assemblerList(acts) {
    const assembledActs = [];
    if (!acts) {
      return [new Act()];
    }

    acts.forEach((act) => {
      const assembledAct = new Act();
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

  static actRequestAssember(act) {
    if (!act) {
      return;
    }

    const firestoreUtils = new FirestoreUtils();
    const actRequest = new ActRequest();

    actRequest.name = act.name ? act.name : undefined;
    actRequest.actType = act.actType ? firestoreUtils.singleDocumentReferenceBuilder('actos', act.actType) : undefined;
    actRequest.description = act.description ? act.description : '';
    actRequest.expectedMusicians = act.expectedMusicians ? firestoreUtils.multipleDocumentReferenceBuilder('actos', act.expectedMusicians) : [];
    actRequest.expenses = act.expenses ? act.expenses : undefined;
    actRequest.income = act.income ? act.income : undefined;
    actRequest.date = act.date ? act.date : undefined;
    actRequest.location = act.location ? act.location : undefined;
    actRequest.reinforcements = act.reinforcements ? firestoreUtils.multipleDocumentReferenceBuilder('actos', act.reinforcements) : undefined;
    actRequest.clothes = act.clothes ? firestoreUtils.singleDocumentReferenceBuilder('actos', act.clothes) : undefined;
    actRequest.assistantMusicians = act.assistantMusicians ? act.assistantMusicians : [];
    actRequest.instrumentPerMusicians = act.instrumentPerMusicians ? act.instrumentPerMusicians : [];

    return actRequest;
  }
}
