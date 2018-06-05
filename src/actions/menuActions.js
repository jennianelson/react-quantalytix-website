export function collapseMenu() {
  return (dispatch) => {
    dispatch({type: 'COLLAPSE_MENU', menu});
  }
}