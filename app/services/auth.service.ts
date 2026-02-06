

import { LoginCredentials ,LoginRespons} from "../types";
import { fetchAPI } from "../lib/api";


 export const login = async (credentials:LoginCredentials,):Promise <LoginRespons> => {
    const res = await fetchAPI <LoginRespons>("/auth/signin",{
       method: "POST",
       headers: {
      "Content-Type": "application/json",
    },
       body: JSON.stringify(credentials),
    });

    if(res.token){
        localStorage.setItem("token",res.token),
        localStorage.setItem("user",JSON.stringify(res.user))
    }
     return res;
};


export const logout =() =>{
 localStorage.removeItem("token");
  localStorage.removeItem("user");

}
  

