import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const TransactionSingle = (item) => {
  const {deleteTransaction}=useContext(GlobalContext);
  return (
    <li>{item.text}<span>$:{item.amount}</span>
    <span onClick={()=>deleteTransaction(item.id)}>X</span>
    </li>
  )
}

export default TransactionSingle