import ButtonsContainer from "../ButtonsContainer";
import data from '../../Utils/data.json'
import { useEffect, useState } from "react";
import errorIcon from '../../Assets/error.svg';
import Alert from "../Alert";
import Loader from "../Loader";

export default function SelectBillForm(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [processAlert, setProcessAlert] = useState(0);
    const [listOfBills, setListOfBills] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetch('https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/bill',
            {
                method: 'GET',
                headers: {
                    'user-id': sessionStorage.getItem('UserId'),
                    'Authorization': sessionStorage.getItem('AuthToken'),
                },
            })
            .then((response) => response.json())
            .then(data => {
                setIsLoading(false)
                if (data[0].bill_id && listOfBills.length < data.length) {
                    data.forEach(bill => {
                        listOfBills.unshift(
                            {
                                fullDate: bill.start_date + " / " + bill.end_date,
                                bill_id: parseInt(bill.bill_id)
                            }
                        )
                    });
                    setListOfBills(listOfBills)
                    props.onSelectFirstBill(listOfBills[0])
                }
                else if (!data[0].bill_id) {
                    setProcessAlert(2)
                }
            })
            .catch((error) => {
                setIsLoading(false)
                setProcessAlert(2)
            })
    }, [])
    return (
        <>
            {isLoading && <Loader />}
            {processAlert === 2 && (
                <Alert
                    image={errorIcon}
                    title='Ooops!'
                    subtitle='Hubo un problema cargando las facturas, por favor intenta de nuevo.'
                    footer='Intentar de nuevo'
                    onCloseAlert={() => {
                        setProcessAlert(0)
                    }}
                />
            )}
            <div className="labels-section">
                <label htmlFor="bills">Selecciona una factura</label>
                <select onChange={props.onSetBillSelected} name="bills" id="bills" className="bill-selecter" >
                    {listOfBills.map((bill, index) => (
                        <option key={index} value={[bill.fullDate,bill.bill_id]}>{bill.fullDate}</option>
                    ))}
                </select>
            </div>
            <ButtonsContainer
                path={'/menu'}
                textButton1='Cancelar'
                textButton2='Continuar'
            />
        </>
    )
}