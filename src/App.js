import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <AppProvider>
        <div className='container'>
            <div><CartValue /></div>
            <div><Location /></div>
            <div><ExpenseItem /></div>
            <div><ExpenseList /></div>
            <div><ItemSelected /></div>
        </div>
    </AppProvider>

  );
}

export default App;
