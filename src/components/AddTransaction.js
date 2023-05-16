import React,{useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const [text,setText]=useState("");
  const [amount,setAmount]=useState(0);
  const {addTransaction,transaction}=useContext(GlobalContext);

  function add(e){
    e.preventDefault();
    const trans={
      id:transaction.length+1,
      text,
      amount:+amount
    }
    addTransaction(trans);
  }

  return (
    <form onSubmit={add}>
        <h3>Add a new Transaction</h3>
        <hr></hr>
        <div>
            <label htmlFor=''>Items</label><br/>
            <input onChange={(e)=>setText(e.target.value)} value={text} type='text' placeholder='Enter Text...'></input>
        </div>
        <div>
            <label htmlFor=''>Amount <br/>(negative -expense, positive- income)</label><br/>
            <input onChange={(e)=>setAmount(e.target.value)} value={amount} type='Number'></input>
        </div>
        <p><button>Add Transaction</button></p>
    </form>
  )
}

export default AddTransaction