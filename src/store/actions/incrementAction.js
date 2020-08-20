export default (dispatch) => ({
  customIncrement: (number) => {
    dispatch({ type: 'CUSTOM_INCREMENT', payload: number });
  }
})