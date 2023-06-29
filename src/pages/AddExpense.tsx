import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useLocalStorage from '../hooks/useLocalStorage';

const uuid = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const AddExpense: React.FC = () => {

    const [expenses, setExpenses] = useLocalStorage('EXPENSES', []);
    const [formData, setFormData] = useState({
        id: uuid(),
        title: '',
        amount: '',
        category: 'food',
        date: new Date().toISOString().substring(0, 10),
        notes: ''
    });

    return (
        <div className='m-3'>
            <h3 className='mb-4'>Add Expense</h3>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' name='title' value={formData.title} onChange={handleInputChange} />
                    <Form.Text className='text-muted'>100 out of 100 characters left</Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Amount (₹)</Form.Label>
                    <Form.Control type='number' name='amount' value={formData.amount} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Category</Form.Label>
                    <Form.Select name='category' value={formData.category} onChange={handleInputChange}>
                        <option value='food'>Food</option>
                        <option value='travel'>Travel</option>
                        <option value='groceries'>Groceries</option>
                        <option value='bills'>Bills</option>
                        <option value='rent'>Rent</option>
                        <option value='health'>Health</option>
                        <option value='others'>Others</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type='date' name='date' value={formData.date} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Notes (Optional)</Form.Label>
                    <Form.Control as='textarea' name='notes' rows={3} value={formData.notes} onChange={handleInputChange} />
                </Form.Group>

                <Button variant='primary' className='mt-3' onClick={handleSubmit}>Add</Button>
            </Form>
        </div>
    );
}

export default AddExpense;
