import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { closeSessionHandler, verifyAuth } from '../Utils/GeneralFunctions';

import CloseButton from '../Components/CloseButton';

import { BarChart } from '@mui/x-charts';

import './UserMenu.css';
import BillInfoButton from '../Components/BillInfoButton';

export default function UserMenu({ verifyNumber }) {
    verifyAuth(verifyNumber);
    const authToken = sessionStorage.getItem('AuthToken').replace('Bearer ', '');
    const userName = jwt_decode(authToken)['user-name'];

    return (
        <>
            <div className="mainMenu">
                <div className="userMenu-header">
                    <div className="" onClick={closeSessionHandler}>
                        <CloseButton />
                    </div>
                    <h1 className="userMenu-header-title">Hola,</h1>
                    <h1 className="mainMenu-header-username">{userName}</h1>
                    <h3 className="userMenu-header-subtitle">
                        Estos es el detalle de tus consumos del servicio de agua en Isla del Lago
                    </h3>
                </div>
                <BarChart
                    xAxis={[
                        {
                            data: [
                                '01/25',
                                '03/25',
                                '05/25',
                                '07/25',
                                '09/25',
                                '10/25',
                                '11/25',
                                '12/25',
                            ],
                        },
                    ]}
                    yAxis={[{ position: 'none' }]}
                    series={[{ data: [2, 5.5, 2, 8.5, 1.5, 3, 3, 3], color: '#577EF2' }]}
                    height={300}
                    borderRadius={10}
                />
                <div className="billList">
                    <BillInfoButton
                        dataTitle="07-07-2025 - 07-07-2025"
                        dataInfo="10m3"
                        billPrice="$100.000"
                    />
                </div>
            </div>
        </>
    );
}
