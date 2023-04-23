import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/user-list';
import UserDetail from './pages/user-detail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/user/:id' element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
