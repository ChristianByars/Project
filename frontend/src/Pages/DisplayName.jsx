import { BirthdayDrop } from "../Components/BirthdayDrop"
import React from "react"
export function DisplayName(){
    return(
      <div className = "Birthday">
        <div className = "DisplayName">
          <input type="text" placeholder = "Display Name" id = "DisplayName"/></div>
          <BirthdayDrop/>
        
      </div>
    )
}