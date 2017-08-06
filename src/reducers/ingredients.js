import uuidV4  from 'uuid/v4';

export default function ingredients(state = [], action){
  switch (action.type) {
    case 'CREATE_INGREDIENT':
      let ingredient = Object.assign({}, action.payload, {id: uuidV4()});
      return state.concat(ingredient);
    default:
      return state;
  }
}
