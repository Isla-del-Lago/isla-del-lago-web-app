import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './Components/Loader';
import AddConsumption from './Pages/AddConsumption';
import ConsultBill from './Pages/ConsultBill';
import CreateBill from './Pages/CreateBill';
import Login from './Pages/Login';
import MainMenu from './Pages/MainMenu';
import errorIcon from './Assets/error.svg';
import Alert from './Components/Alert';
import { refreshToken } from './Utils/GeneralFunctions';
function App() {
	document.addEventListener("wheel", function(event){
		if(document.activeElement.type === "number"){
			document.activeElement.blur();
		}
	});
	document.querySelector("body").addEventListener("click", function (event) {
		refreshToken()
	})
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/menu' element={<MainMenu />} />
					<Route path='/create-bill' element={<CreateBill verifyNumber={2} />} />
					<Route path='/add-consumption' element={<AddConsumption verifyNumber={2} />} />
					<Route path='/consult-bill' element={<ConsultBill verifyNumber={2} />} />
					<Route
						path='/alert'
						element={
							<Alert
								image={errorIcon}
								title='Ooops!'
								subtitle='Hubo un problema guardando la factura, por favor inteta de nuevo'
								footer='Intentar de nuevo'
							/>
						}
					/>
					<Route path='/loader' element={<Loader />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
