import downloadIcon from '../../Assets/download.svg'
import arrowIcon from '../../Assets/back_arrow.svg'
import whatsappIcon from '../../Assets/whatsapp.svg'

export default function ScreenShotPreview(props) {
    const { screenShot, nameOfApartmentSelected, endDateOfBillSelected } = props
    const downloadHandler = () => {
        var a = document.createElement('a');
        a.href = screenShot
        a.download = `${nameOfApartmentSelected} - ${endDateOfBillSelected}`;
        a.click();
    }
    const shareHandler = () => {

        //compartir via Wapp
        var a = document.createElement('a');
        a.href = `https://wa.me/send?text=Proximamente enviaremos facturas por WhatsApp`
        a.click();
        //compartir via Wapp
        // window.open(screenShot)
    }
    return (
        <>
            <div className="screenShot-container" id="screenShot-container">
                <div className="chart-buttons-container">
                    <img id='chartButton' src={arrowIcon} alt={arrowIcon} onClick={props.onGoBack} />
                    <img id='chartButton' src={whatsappIcon} alt={whatsappIcon} onClick={shareHandler} />
                    <img id='chartButton' src={downloadIcon} alt={downloadIcon} onClick={downloadHandler} />
                </div>
            </div>
        </>
    )
}