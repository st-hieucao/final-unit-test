import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/user-list';
import UserDetail from './pages/user-detail';

function App() {
  return (
    <div className='App' data-testid="app">
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/user/:id' element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
