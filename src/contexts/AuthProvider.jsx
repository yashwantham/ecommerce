import { createContext, useReducer } from "react"
import axios from "axios";

import {AuthReducer} from "../reducers/AuthReducer"
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../reducers/AuthReducer";

export const AuthContext = createContext();

export function AuthProvider({children}){

    const { SET_LOGIN_TRUE, SET_LOGIN_FALSE, SET_USER_DATA} = ACTIONS;

    const navigate = useNavigate();

    const [authState, dispatchAuth] = useReducer(AuthReducer, {
        isLoggedin: false,
        userData: {}
    })

    const signupAuthUser = async (signupData) => {
        console.log(signupData);
        try{
            const response = await axios.post("/api/auth/signup", signupData);
            if(response.status === 201) {
                localStorage.setItem("userToken", response.data.encodedToken);
                dispatchAuth({type: SET_LOGIN_TRUE});
                dispatchAuth({type: SET_USER_DATA, payload: response.data.createdUser})
                navigate("/");
                // console.log(response);
            }
            console.log(response)
        } 
        catch (error) {
            dispatchAuth({type: SET_LOGIN_FALSE});
            console.error(error)
        }
    }

    const loginAuthUser = async (loginData) => {
        console.log(loginData)
        try{
            const response = await axios.post("/api/auth/login", loginData)
            if(response.status === 200) {
                localStorage.setItem("userToken", response.data.encodedToken)
                dispatchAuth({type: SET_LOGIN_TRUE});
                dispatchAuth({type: SET_USER_DATA, payload: response.data.foundUser});
                navigate("/");
            }
            console.log(response)
        }
        catch (error) {
            dispatchAuth({type: SET_LOGIN_FALSE})
            console.error(error);
        }
    }

    const logoutAuthUser = () => {
        localStorage.removeItem("userToken");
        dispatchAuth({type: SET_LOGIN_FALSE});
        navigate("/logout");
    }

    return(
        <>
            <AuthContext.Provider value={{authState, dispatchAuth, signupAuthUser, loginAuthUser, logoutAuthUser}}>{children}</AuthContext.Provider>
        </>
    )
}