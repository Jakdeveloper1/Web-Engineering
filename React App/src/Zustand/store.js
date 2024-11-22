import {create} from "zustand"


export const store = create ((set)=>({
    count : 0,
    incremenetFunction:() => 
        set((state)=>({ count: state.count+1 }))

}
))
