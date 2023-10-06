import { useState, useEffect, createContext } from "react"; 

export const AuthContext = createContext();

export function AuthProvider(props){
    const {children} = props;
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])
    

    const login = async (token) => {
        try {
        //   tokenCtrl.setToken(token);
        //   const response = await userCtrl.getMe();
          setUser({email: "franciscoerramuspe91@gmail.com"});
          setToken(token);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
    

    const data = {
        accessToken: token,
        user,
        login,
        logout: null,
        updateUser: null,
    };

    if (loading) return null;

    return (
    <AuthContext.Provider value={data}> 
        {children}
    </AuthContext.Provider>
    );
}