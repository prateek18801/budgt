import { Routes, Route } from 'react-router-dom';
import AddExpense from './pages/AddExpense';
import ExpenseAnalysis from './pages/ExpenseAnalysis';
import ViewExpense from './pages/ViewExpense';
import EditExpense from './pages/EditExpense';
import BottomNav from './components/BottomNav';
import Settings from './pages/Settings';
import TopNav from './components/TopNav';
import './App.css';

const App = () => {
    return (
        <div className='app__container'>
            <TopNav />
            <div className="overflow-y-scroll">
                <Routes>
                    <Route path='/' element={<AddExpense />} />
                    <Route path='/view' element={<ViewExpense />} />
                    <Route path='/edit' element={<EditExpense />} />
                    <Route path='/stats' element={<ExpenseAnalysis />} />
                    <Route path='/config' element={<Settings />} />
                </Routes>
            </div>
            <BottomNav />
        </div>
    );
}

export default App;
