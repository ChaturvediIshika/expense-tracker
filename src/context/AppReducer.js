export default function AppReducer(state,action){
    switch(action.type){
        case "deleteTransaction":
            return {Transactions:state.Transactions.filter((t)=>t.id!=action.payload)};

        case "addTransaction":
            return {Transactions:[...state.Transactions,action.payload]}

        default:
            return state
    }
}