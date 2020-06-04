import React from 'react';
import './App.css'
import CountryList from './components/countryList';
import {Provider} from 'react-redux'
import {createStore} from 'redux'


const initialState={
  countryList:[]
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case "SET_COUNTRY_LIST":{
      return { ...state, countryList: action.payload };
    }
    default:{
      return state}
  }
}
//crear el store para usarlo con redux, con la dependencia createStore
const store = createStore(reducer,initialState);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
