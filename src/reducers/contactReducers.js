"use strict"
import {createStore} from 'redux';
// CART REDUCERS

export function contactReducers(state = { contactMessages: [] }, action) {
    switch (action.type) {
      case "ADD_CONTACT_MESSAGE":
        return {...state, contactMessages:[...state.contactMessages, ...action.payload], msg: 'Message Sent!', style:'success', validation:'success'}
      break;

      case "INITIALIZE_CONTACT":
        return {...state, contactMessages:[...state.contactMessages], msg: null, style:null, validation:null}
      break;
    }
    return state;
}
