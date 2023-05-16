import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {

  const {transaction}=useContext(GlobalContext);
  const inc=transaction.reduce(getIn,0);
  function getIn(total,num){
      if(num.amount>0)
        return total+num.amount;
      return total;
  }
  const exp=transaction.reduce(getExp,0);
  function getExp(total,num){
      if(num.amount<0)
        return total+num.amount*(-1);
      return total;
  }

  return (
    <div className='income'>
        <div>
            <h3>Income</h3>
            <p>$:{inc}</p>
        </div>
        <div>
            <h3>Expense</h3>
            <p>$:{exp}</p>
        </div>
    </div>
  )
}

export default IncomeExpense