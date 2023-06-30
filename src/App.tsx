import { Routes, Route } from 'react-router-dom';
import AddExpense from './pages/AddExpense';
import ExpenseAnalysis from './pages/ExpenseAnalysis';
import ViewModifyExpense from './pages/ViewModifyExpense';
import EditExpense from './pages/EditExpense';
import BottomNav from './components/BottomNav';
import './App.css';

const App = () => {
    return (
        <div className='vh-100 vw-100 d-flex flex-column justify-content-between'>
            <Routes>
                <Route path='/' element={<AddExpense />} />
                <Route path='/view' element={<ViewModifyExpense />} />
                <Route path='/edit' element={<EditExpense />} />
                <Route path='/stats' element={<ExpenseAnalysis />} />
            </Routes>
            <BottomNav />
        </div>
    );
}

export default App;
