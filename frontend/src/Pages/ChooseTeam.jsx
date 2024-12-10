import React from "react"
import '../App.css'
import catGIF from '../assets/cat-space.gif'
import humanGIF from '../assets/giphy.webp'
import { Link } from "react-router-dom"
export function ChooseTeam(){
    return(
        <div className = "Teams"><h1>Choose Your Team!</h1>
        <center><p>Who is this account for?</p>
        <div className = "catIF">
            <img src={catGIF} alt = "catGIf" id = "catGIF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={humanGIF} alt = "humanGIF" id = "humanGIF"/>
        </div>
        <Link to = '/Sign'><button id = 'TeamCat'>Team Cat</button></Link> &nbsp;&nbsp;&nbsp;
        <Link to = '/Sign'><button id = 'TeamHuman'>Team Human</button></Link></center>
        </div>
        

    )
}