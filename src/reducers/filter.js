const filterArray = (state = [], action) => {
  
  switch (action.type) {   
    case "ADD_FILTER":
      return [...state, action.filter];
    case "REMOVE_FILTER":
      return state.filter(el => {
        return el.type !== action.filter.type || el.value !== action.filter.value;
      });
    default:
      return state;
  }
};

export default filterArray;
