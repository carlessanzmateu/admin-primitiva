import MusiciansAssembler from '@/assemblers/musicians.assembler';

export function getAllMusicians(state) {
  return MusiciansAssembler.assemblerList(state.musiciansFromService);
}

export function getNotExpectedMusicians(state) {
  if(!state.musiciansFromService || !state.expectedMusicians) {
    return;
  }

  let musiciansFromState = state.musiciansFromService;
  let locatedMusiciansFromState = [];

  /* ESTE BUCLE COGE LOS MUSICOS DE FIREBASE
  Y LOS MACHEA CON LA STORE PARA NO TENER QUE HACER
  LA PETICION Y TENER SUS DATOS */
  for(var k = 0; k < state.expectedMusicians.length; k++) {
    locatedMusiciansFromState.push(state.musiciansFromService.find(musician => musician.docId === state.expectedMusicians[k].id));
  }

  /* AQUI SE TRANSFORMA A OBJETO MUSICO */
  const parsedExpectedMusicians = MusiciansAssembler.assemblerList(locatedMusiciansFromState);

  /* ESTE BUCLE RECORRE LOS MUSICOS DEL ARRAY ORIGINAL DE LA STORE */
  for(var j = 0; j < state.musiciansFromService.length; j++) {

    /* ESTE BUCLE RECORRE LOS MUSICOS LOCALIZADOS DE LA LISTA DE LOS ESPERADOS */
    for(var i = 0; i < parsedExpectedMusicians.length; i++) {

      /* ESTE IF BUSCA LOS ESPERADOS Y LOS DEL STATE */
      if(state.musiciansFromService[j].docId === parsedExpectedMusicians[i].docId) {
        console.log(musiciansFromState, j);
        musiciansFromState.splice(j, 1);
      }
    }
  }
  
  return {
    notExpected: musiciansFromState,
    expected: parsedExpectedMusicians
  };
}

export const getters = {
  getAllMusicians,
  getNotExpectedMusicians,
};
