import { createContext,useContext,useEffect,useState } from "react";

const LoginContext = createContext();
export function LoginProvider({children}){
    const [isLogin,setIsLogin] = useState(false);
    useEffect(()=>{
        console.log(isLogin)
    },[isLogin])
    
    return(
        <LoginContext.Provider value={{isLogin,setIsLogin}}>
            {children}
        </LoginContext.Provider>
    )
}
export function useLogin(){
    return useContext(LoginContext)
}