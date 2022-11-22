import React, {useState} from "react";

// let logoutTimer;

const AuthContext = React.createContext({
    uid: '',
    isLoggedIn: false,
    login: (uid) => {
    },
    logout: () => {
    }
})

// const calculateRemainingTime = (expirationTime) => {
//     const currentTime = new Date().getTime();
//     const adjExpirationTime = new Date(expirationTime).getTime();
//
//     const remainingDuration = adjExpirationTime - currentTime;
//
//     return remainingDuration;
// };

const retrieveStoredToken = () => {
    const storedUid = localStorage.getItem('uid');
    // const storedExpirationDate = localStorage.getItem('expirationTime');

    // const remainingTime = calculateRemainingTime(storedExpirationDate);

    // if (remainingTime <= 3600) {
    //     localStorage.removeItem('uid');
    //     localStorage.removeItem('expirationTime');
    //     return null;
    // }

    return {
        uid: storedUid,
        // duration: remainingTime,
    };
};

export const AuthContextProvider = (props) => {

    const tokenData = retrieveStoredToken();

    let initialUid;
    if (tokenData) {
        initialUid = tokenData.uid;
    }

    const [uid, setUid] = useState(initialUid);

    const userIsLoggedIn = !!uid;

    const logoutHandler = () => {
        setUid(null);
        localStorage.removeItem('uid');
        // localStorage.removeItem('expirationTime');

        // if (logoutTimer) {
        //     clearTimeout(logoutTimer)
        // }
    };

    const loginHandler = (uid) => {
        setUid(uid);
        localStorage.setItem('uid', uid);
        // localStorage.setItem('expirationTime', expirationTime);

        // const remainingTime = calculateRemainingTime(expirationTime);

        // logoutTimer = setTimeout(logoutHandler, remainingTime);
    }

    // useEffect(() => {
    //     if (tokenData) {
    //         console.log(tokenData.duration);
    //         logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    //     }
    // }, [tokenData, logoutHandler]);

    const contextValue = {
        uid: uid,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext