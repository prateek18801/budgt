import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm';
import useLocalStorage from '../hooks/useLocalStorage';

type formDataType = {
    id: string,
    title: string,
    amount: string,
    category: string,
    date: string,
    notes: string
}

const EditExpense: React.FC = () => {

    const [expenses, setExpenses] = useLocalStorage('EXPENSES', []);

    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<formDataType>(location.state);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const handleSubmit = () => {
        if (!(formData.title && formData.amount)) return;
        setExpenses(prev => prev.map(obj => obj.id === formData.id ? formData : obj));
        navigate(-1);
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
