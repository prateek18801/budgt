import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useLocalStorage from '../hooks/useLocalStorage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type formDataType = {
    budget: string
};

const Settings: React.FC = () => {

    const navigate = useNavigate();
    const [expenses, setExpenses] = useLocalStorage('EXPENSES', []);
    const [config, setConfig] = useLocalStorage('CASHTRACK_CONFIG', { budget: '10000' });
    const [formData, setFormData] = useState<formDataType>(config);

    const [fromDate, setFromDate] = useState<string>(`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-01`);
    const [toDate, setToDate] = useState<string>(`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const handleSubmit = () => {
        setConfig(formData);
    }

    const clearData = () => {
        if (confirm('This action cannot be undone!')) {
            setExpenses(expenses =>
                expenses.filter(expense =>
                    expense.date < fromDate && expense.date > toDate
                )
            );
        }
    }

    return (
        <div className='m-3'>
            <h3 className='mb-4'>Settings</h3>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Monthly Budget (₹)</Form.Label>
                    <Form.Control type='number' name='budget' value={formData.budget} onChange={handleInputChange} />
                </Form.Group>
                <Button variant='primary' className='mt-3 mb-5 d-flex align-items-center' onClick={handleSubmit}>Save</Button>

                <h3 className='mb-4'>Clear Data</h3>
                <Form.Group className='mb-3'>
                    <Form.Label>Select Range</Form.Label>
                    <Row>
                        <Col><Form.Control type='date' value={fromDate} onChange={e => setFromDate(e.target.value)} /></Col>_
                        <Col><Form.Control type='date' value={toDate} onChange={e => setToDate(e.target.value)} /></Col>
                    </Row>
                </Form.Group>
                <Button variant='danger' className='mt-3 mb-5 d-flex align-items-center' onClick={clearData}>Clear</Button>

            </Form>
        </div>
    );
}

export default Settings;
