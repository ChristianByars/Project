import {useState} from "react"
import React from "react";

export function LoginButton(){
  function handleLogin(){
    console.log("Testing");
}

    return(
     
    <button onClick = {handleLogin} type="submit" id="login" >
      Login!
    </button>
)
}
