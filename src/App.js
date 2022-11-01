import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddConsumption from './Pages/AddConsumption';
import ConsultBill from './Pages/ConsultBill';
import CreateBill from './Pages/CreateBill';
import Login from './Pages/Login';
import MainMenu from './Pages/MainMenu';
// import Alert from './Components/Alert';
// import succesIcon from './Assets/success.svg';
// import warningIcon from './Assets/warning.svg';
// import errorIcon from './Assets/error.svg';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				{/* <Alert
					image={errorIcon}
					title='Ooops!'
					subtitle='Hubo un problema guardando la factura, por favor inteta de nuevo'
					footer='Intentar de nuevo'
				/> */}
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/menu' element={<MainMenu />} />
					<Route path='/create-bill' element={<CreateBill />} />
					<Route path='/add-consumption' element={<AddConsumption />} />
					<Route path='/consult-bill' element={<ConsultBill />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
