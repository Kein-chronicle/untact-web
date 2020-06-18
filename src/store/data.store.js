const DATASET = 'DATASET';

const initialState = {
    lastPage: "/"
}

const data = (state = initialState, action) => {

  switch (action.type) {
    case DATASET:
      return {...state, 
        lastPage: action.lastPage
    }
    default:
      return state;
  }
};

export default data;