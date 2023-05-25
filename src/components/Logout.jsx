import React, { useEffect } from "react";

const Logout = () => {
    useEffect(() => {
      localStorage.clear()
      window.location = "/login"
    }, [])

    return (<></>)
    
}

export default Logout