import { Routes, Route } from 'react-router-dom';
import AddExpense from './pages/AddExpense';
import ExpenseAnalysis from './pages/ExpenseAnalysis';
import ViewModifyExpense from './pages/ViewModifyExpense';
import EditExpense from './pages/EditExpense';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';
import './App.css';

const App = () => {
    return (
        <div className='app__container'>
            <TopNav />
            <div className="overflow-y-scroll">
                <Routes>
                    <Route path='/' element={<AddExpense />} />
                    <Route path='/view' element={<ViewModifyExpense />} />
                    <Route path='/edit' element={<EditExpense />} />
                    <Route path='/stats' element={<ExpenseAnalysis />} />
                </Routes>
            </div>
            <BottomNav />
        </div>
    );
}

export default App;
