export default function manageBand(state = {
  bands: []
}, action) {
  let newBands;
  console.log(state)
  switch (action.type) {
    case 'ADD_BAND':
    
      return { ...state, bands: [...state.bands, action.band] }

    case 'DELETE_BAND':
      newBands = state.bands.filter(band => band.id !== action.id)
      return {...state, bands: newBands}
    default:
      return state;
  }
};
