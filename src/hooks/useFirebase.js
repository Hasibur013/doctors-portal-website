import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initialFirebase from "../Pages/Login/Firebase/firebase.init";

initialFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin,setAdmin]=useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const userRegister = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setAuthError('')
                setUser(newUser)
                // save user to database
                saveUser(email,name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name , 
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    setAuthError(error.message);
                });
                history.replace('/')
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const userSignIn = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/"
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [auth])

    // sign in with google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email,user.displayName, 'PUT')
                setAuthError('')
                const destination = location?.state?.from || "/"
                history.replace(destination)
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const saveUser=(email,displayName, method)=>{
        const user={email,displayName}
        fetch('https://frozen-falls-71389.herokuapp.com/users',{
            method: method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)  
        })
        .then()
    }

    useEffect(()=>{
        fetch(`https://frozen-falls-71389.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])
    return {
        user,
        userRegister,
        userSignIn,
        logOut,
        isLoading,
        authError,
        signInWithGoogle,
        admin
    }
}

export default useFirebase;