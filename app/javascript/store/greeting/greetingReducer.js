const GREET = '/greeting/GREET';

export default function greetingReducer(state = [], action = {}) {
  switch (action.type) {
    case GREET:
      return action.payload;
    default:
      return state;
  }
}

function fetchGreeting() {
  return async (dispatch) => {
    const response = await fetch('/greeting');
    const greeting = await response.json();

    dispatch({
      type: GREET,
      payload: greeting,
    });
  };
}

export { fetchGreeting };
