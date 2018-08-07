import Clothes from '@/models/clothes.model';

export default class ClothesAssembler {
  static assemblerList(clothes) {
    const assembledClothes = [];
    if (!clothes) {
      return [new Clothes()];
    }

    clothes.forEach(elementFromClothes => {
      const assembledElementClothes = new Clothes();
      assembledElementClothes.id = elementFromClothes.id ? elementFromClothes.id : undefined;
      assembledElementClothes.docId = elementFromClothes.docId ? elementFromClothes.docId : undefined;
      assembledElementClothes.alias = elementFromClothes.alias ? elementFromClothes.alias : undefined;
      assembledElementClothes.description = elementFromClothes.description ? elementFromClothes.description : undefined;

      assembledClothes.push(assembledElementClothes);
    });

    return assembledClothes;
  }

  static assembler(clothes) {
    if (!clothes) {
      return new Clothes();
    } 

    const assembledClothes = new Clothes();
    assembledClothes.id = clothes.id ? clothes.id : undefined;
    assembledClothes.docId = clothes.docId ? clothes.docId : undefined;
    assembledClothes.alias = clothes.alias ? clothes.alias : undefined;
    assembledClothes.description = clothes.description ? clothes.description : undefined;

    return assembledClothes;
  }
}
