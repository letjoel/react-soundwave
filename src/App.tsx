import Navbar from './components/Navbar/Navbar';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import JoinPage from './pages/JoinPage/JoinPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <div>
            <BrowserRouter>

                <Navbar />

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/discover' element={<DiscoverPage />} />
                    <Route path='/join' element={<JoinPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App;
