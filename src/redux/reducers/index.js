const tokens = (state = [], action) => {
  console.log(state,action);
    switch (action.type) {
      case 'SET_GuardValue':
        return [
          ...state,
          {
            id: action.id,
            res: action.res,
          }
        ]
      default:
        return state
    }
  }
  
  export default tokens
