import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(determineLoggedIn());

  function determineLoggedIn() {
    // FIREBASE-i API PÄRING, KAS ON TEGEMIST VALIIDSE TOKENIga
    if (sessionStorage.getItem("token") !== null) {
      return true;
    } else {
      return false;
    }
  }

  // https://firebase.google.com/docs/reference/rest/auth#section-refresh-token
  // https://firebase.google.com/docs/reference/rest/auth
  //const url = "https://securetoken.googleapis.com/v1/token?key=AIzaSyDdNcxnTCTwrjOGIENHEwlq0jSV4h6ZOXs";

  // useEffect(() => {
  //   if (sessionStorage.getItem("refresh_token") !== null) {
  //     const payLoad = {
  //       "grant_type": "refresh_token",
  //       "refresh_token": sessionStorage.getItem("refresh_token")
  //     }
  
  //     fetch(url, {"method": "POST", "body": JSON.stringify(payLoad)})
  //       .then(res => res.json())
  //       .then(json => {
  //           if (json.id_token !== undefined) {
  //             // return true;
  //             setLoggedIn(true);
  //           } else {
  //             // return false;
  //             setLoggedIn(false);
  //           }
  //       });
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
