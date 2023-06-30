import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm';
import useLocalStorage from '../hooks/useLocalStorage';

const EditExpense: React.FC = () => {

    const [expenses, setExpenses] = useLocalStorage('EXPENSES', []);

    const location = useLocation();

    const [formData, setFormData] = useState(location.state);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const handleSubmit = () => {
        if (!(formData.title && formData.amount)) return;

        setExpenses(prev => [formData, ...prev]);
    }


    return (
        <div className='m-3'>
            <h3 className='mb-4'>Edit Expense</h3>
            <ExpenseForm
                title={formData.title}
                amount={formData.amount}
                category={formData.category}
                date={formData.date}
                notes={formData.notes}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default EditExpense;
