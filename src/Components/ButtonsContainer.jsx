import './ButtonsContainer.css'
export default function ButtonsContainer(props) {
    const { textButton1, textButton2 } = props
    return (
        <>
            <div className="buttons-container">
                <button type="button" className="button-form" onClick={props.onFirstOptionHandler}>{textButton1}</button>
                <button type="button" className="button-form" onClick={props.onSecondOptionHandler}>{textButton2}</button>
            </div>
        </>
    )
}