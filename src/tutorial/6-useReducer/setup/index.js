import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

//state right before update and the action
//usereducer is looking for function that will change the state
//pass in initial state
//set it as seperate variable or inside reducer


const reducer = (state, action) => {

  //if i dispatch testing
  if (action.type === 'ADD_ITEM') {
    //we always need to return state from here

    //we are not directly affecting state
    //we only control state when we dispatch action
    const newPeople = [...state.people, action.payload];
    return { ...state, people: newPeople, isModalOpen: true, modalContent: "item added" };
  }

  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: "please enter value" };
  }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id !== action.payload);
    return { ...state, people: newPeople };
  }

  throw new Error('no matching action type');

  //in order to effect anything in our state, we would need dispatch



}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}





const Index = () => {

  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(reducer, defaultState);
  // useReducer has two things : state value and dispatch function
  // when we invoke useReducer we are getting state value and dispatch function
  // in useReducer we pass reducer function first
  // we always must use dispatch
  //takes old state , something calls action, and spits back new state.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {

      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
      //once we dispatch action
      //in reducer we need to handle it
      //reducer state right before update
      //what action we want to do
      //the action is testing
      //we always want to return some kind of state from reducer.
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }
  return <React.Fragment>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit"> add </button>
    </form>
    {state.people.map((person) => {
      return (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>Remove</button>
        </div>
      );
    })}
  </React.Fragment>;
};

export default Index;
