import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddConsumption from './Pages/AddConsumption';
import CreateBill from './Pages/CreateBill';
import Login from './Pages/Login';
import MainMenu from './Pages/MainMenu';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/menu' element={<MainMenu />} />
					<Route path='/create-bill' element={<CreateBill />} />
					<Route path='/add-consumption' element={<AddConsumption />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
