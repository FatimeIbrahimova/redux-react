export function sort(state){
    const newArr=[...state]
    newArr.sort((a,b)=>a-b)
    return {
        type:"SORT",
        payload:newArr
    };
}