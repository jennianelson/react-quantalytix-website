export default function menuReducer(state={collapsed: false}, action) {
  switch (action.type) {
    case 'COLLAPSE_MENU':
      return {...state, collapsed: true}
    default:
      return state;
  }
}