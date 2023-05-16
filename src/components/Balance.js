import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

  const {transaction}=useContext(GlobalContext);
  const sum=transaction.reduce(getSum,0);
  function getSum(total,num){
    return total+num.amount;
  }
  return (
    <div className='balance-container'>
        <h2>Your Balance</h2>
        <p id='balance'>$:{sum}</p>
    </div>
  )
}

export default Balance