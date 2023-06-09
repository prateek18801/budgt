import { useState } from 'react';
import AddExpense from './pages/AddExpense';
import ExpenseAnalysis from './pages/ExpenseAnalysis';
import ViewModifyExpense from './pages/ViewModifyExpense';
import BottomNav from './components/BottomNav';
import './App.css';

const App = () => {

    const [page, setPage] = useState(0);

    return (
        <div className='vh-100 vw-100 d-flex flex-column justify-content-between'>
            {page == 0 ? <AddExpense /> : page === 1 ? <ViewModifyExpense /> : <ExpenseAnalysis />}
            <BottomNav page={page} setPage={setPage} />
        </div>
    );
}

export default App;
