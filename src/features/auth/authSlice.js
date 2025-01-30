import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

//if local storage have user value exist so give it to state , if not then do null
let userExist = JSON.parse(localStorage.getItem("user"))   //localStorage.getItem("user") //but the output is in string we want it in json
// console.log(user);


const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : userExist || null ,   
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : "Error Occured",
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(registerUser.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(registerUser.fulfilled , (state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.user = action.payload
            // console.log(action.payload);
        })
        .addCase(registerUser.rejected , (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


        .addCase(loginUser.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(loginUser.fulfilled , (state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.user = action.payload
            // console.log(action.payload);
        })
        .addCase(loginUser.rejected , (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })



        .addCase(logoutUser.fulfilled, (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = false
            state.user = null
        })
    }
})

export default authSlice.reducer;


//Register User

export const registerUser = createAsyncThunk("AUTH/REGISTER" , async(formData, thunkAPI)=>{
    
    try {
        return await authService.register(formData)
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
        //in thunk catch block doesn't return anything directly... 
        // means u can't use return datatype deirectly like the below one...thats why we have to store it in a variable
        // return error.response.data.message;
    }
})   

// Logout user
export const logoutUser = createAsyncThunk("AUTH/LOGOUT", async() =>{
    localStorage.removeItem("user")

})


//Login User
export const loginUser = createAsyncThunk(
    "AUTH/LOGIN",
    async(formData)=>{
        try {
            // console.log(formData);
            return await authService.login(formData)
        } catch (error) {
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
})   
