const init=[1,2,3]

export const todoReducer=(state=init,action)=>{

    switch(action.type){
        case "ADD":{
            return [...state,action.payload]
        }
        case "SORT":{
            // const newArr=[...state]
            // newArr.sort((a,b)=>a-b)
            // return newArr;
            return action.payload
        }
        default:  return state;
    }
  
}