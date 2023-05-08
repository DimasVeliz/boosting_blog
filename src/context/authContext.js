import { createContext, useEffect, useState } from "react"
import api from "../service/api";

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
        await api.logout(authenticationDto);
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