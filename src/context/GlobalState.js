import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

const initialTransaction={
    Transactions:[
        {id:1,text:"Salary",amount:400},
        {id:2,text:"Shopping",amount:-200},
        {id:3,text:"other kharche",amount:-150},
        {id:4,text:"vasooli",amount:400}
    ]
}

export const GlobalContext=createContext(initialTransaction);

//provider component
export const GlobalProvider=({children})=>{

const [state,dispatch]=useReducer(AppReducer,initialTransaction)
    
//delete transaction
const deleteTransaction=(id)=>{
    dispatch({
        type:"deleteTransaction",
        payload:id
    })
}
const addTransaction=(transaction)=>{
    dispatch({
        type:"addTransaction",
        payload:transaction
    })
}

    return(<GlobalContext.Provider value={{transaction:state.Transactions,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}