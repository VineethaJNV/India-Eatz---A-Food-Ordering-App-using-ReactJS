import {useState, useEffect} from "react";

const useOnline = ()=>{
    const handleOnline = ()=>{
        setIsOnLine(true);
    };
    const handleOffline = ()=>{
        setIsOnLine(false);
    }
    const[isOnLine, setIsOnLine] = useState(true);
    useEffect(()=>{
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return()=>{
            window.removeEventListener("online" ,handleOnline);
            window.removeEventListener("offline" ,handleOffline);

        }

    }, []);
    
    return isOnLine;
}
export default useOnline;