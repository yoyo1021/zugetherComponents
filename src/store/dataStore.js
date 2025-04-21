import { createContext,useContext,useEffect,useState } from "react";

const LoginContext = createContext();
export function LoginProvider({children}){
    const [isLogin,setIsLogin] = useState(false);
    const [member,setMember] = useState({});
    useEffect(()=>{
        console.log(isLogin);
        console.log(member)
    },[isLogin,member])
    
    return(
        <LoginContext.Provider value={{isLogin,setIsLogin,member,setMember}}>
            {children}
        </LoginContext.Provider>
    )
}
export function useLogin(){
    return useContext(LoginContext)
}