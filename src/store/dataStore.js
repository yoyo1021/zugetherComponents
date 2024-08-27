import { createContext,useContext,useState } from "react";

const LoginContext = createContext();
export function LoginProvider({children}){
    const [isLogin,setIsLogin] = useState(false);
    console.log(isLogin)
    return(
        <LoginContext.Provider value={{isLogin,setIsLogin}}>
            {children}
        </LoginContext.Provider>
    )
}
export function useLogin(){
    return useContext(LoginContext)
}