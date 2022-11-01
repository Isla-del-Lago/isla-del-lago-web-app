import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import MainMenu from './Pages/MainMenu';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/menu' element={<MainMenu />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
