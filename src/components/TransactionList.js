import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import TransactionSingle from './TransactionSingle'

const TransactionList = () => {

  const{transaction,deleteTransaction} =useContext(GlobalContext)

  return (
    <div className='list'>
        <h3> History</h3>
        <hr/>
        <ul>
          {
            transaction.map((item)=><TransactionSingle text={item.text} amount={item.amount} id={item.id}/>)
            
          }
        
        </ul>
    </div>
  )
}

export default TransactionList