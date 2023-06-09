import { createContext, useEffect, useState } from "react"
import api from "../service/api";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
      );

    const login = async(authenticationDto) =>{
        const response = await api.login(authenticationDto);
        setCurrentUser(response.data.userDto)
    };

    const logout = async (authenticationDto) => {
        await axios.post("api/v1/auth/logout");
        setCurrentUser(null);
      };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
          {children}
        </AuthContext.Provider>
      );

};