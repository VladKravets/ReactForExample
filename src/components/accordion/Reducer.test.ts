import {ActionType, reducer, StateType} from "./Reducer";

test('should change collapsed',()=>{
   const state:StateType={
       collapsed:false
   }

   const newState=reducer(state,{type:"TOGGLE-COLLAPSED"})


    expect(newState.collapsed).toBe(true)
})
test('should be Error',()=>{
   const state:StateType={
       collapsed:false
   }


    expect(()=>reducer(state,{type:"FAKE"})).toThrowError()
})