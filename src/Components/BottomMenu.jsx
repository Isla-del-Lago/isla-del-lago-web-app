import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import homeButton from '../Assets/home_button.svg'
import userButton from '../Assets/user_button.svg'
import helpButton from '../Assets/help_button.svg'

import './BottomMenu.css'
export default function BottomMenu() {
    return (
        <>
            <div className="bottomMenu-container">
                <div className="bottomMenu-item homeBtn">
                    <img src={homeButton} alt={homeButton} />
                </div>
                <div className="bottomMenu-item userBtn selected">
                    <img src={userButton} alt={userButton} />
                </div>
                <div className="bottomMenu-item helpBtn">
                    <img src={helpButton} alt={helpButton} />
                </div>
            </div>
        </>
    )
}