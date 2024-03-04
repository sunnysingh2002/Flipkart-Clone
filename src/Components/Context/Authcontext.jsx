import { createContext, useState } from "react";
export const Authcontext = createContext();

const AuthContextProvider = ({ children }) => {

  let loginCheck = JSON.parse(localStorage.getItem("loginCheck")) || false

    const [correct, setCorrect] = useState(loginCheck)

    localStorage.setItem("loginCheck", JSON.stringify(correct));
    return (
      <Authcontext.Provider value={{ correct, setCorrect }}>
        {children}
      </Authcontext.Provider>
    );
  };
  
  export default AuthContextProvider;
  