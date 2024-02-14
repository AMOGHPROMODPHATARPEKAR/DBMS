import {createSlice} from "@reduxjs/toolkit"


const initialState ={
    status:false,
    userData:null,
    admin:false
}


const authSlice = createSlice(
    {  
      name:"auth",
      initialState,
      reducers:{
          login:(state,action)=>{
              state.status = true;
              action.payload.adminId !== undefined ? state.admin= true : state.admin=false ;
              state.userData = action.payload;
            //   console.log(action.payload)
          },
          logout:(state,action)=>{
              state.status =false;
              state.userData =null;
          },
          setMyUser:(state,action)=>{
            // console.log("sddd",action.payload)
              state.userData =action.payload;
          },

      }
  }
  )

  export const {login,logout,setMyUser} = authSlice.actions;
  
  export default authSlice.reducer;