// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import homeButton from '../Assets/home_button.svg'
import userButton from '../Assets/user_button.svg'
import helpButton from '../Assets/help_button.svg'

import './BottomMenu.css'
import { useState } from 'react'
export default function BottomMenu() {
    const [buttonSelected, setButtonSelected] = useState("home")
    const handleSelected = (type) => {
        setButtonSelected(type)
    }
    return (
        <>
            <div className="bottomMenu-container">
                <div onClick={() => handleSelected("home")} className={`bottomMenu-item homeBtn ${buttonSelected === "home" ? "selected" : "notSelected"}`}>
                    <img src={homeButton} alt={homeButton} />
                </div>
                <div onClick={() => handleSelected("user")} className={`bottomMenu-item userBtn ${buttonSelected === "user" ? "selected" : "notSelected"}`}>
                    <img src={userButton} alt={userButton} />
                </div>
                <div onClick={() => handleSelected("help")} className={`bottomMenu-item helpBtn ${buttonSelected === "help" ? "selected" : "notSelected"}`}>
                    <img src={helpButton} alt={helpButton} />
                </div>
            </div>
        </>
    )
}