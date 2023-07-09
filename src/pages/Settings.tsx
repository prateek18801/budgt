import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useLocalStorage from '../hooks/useLocalStorage';

type formDataType = {
    budget: string
};

const Settings: React.FC = () => {

    const [config, setConfig] = useLocalStorage('CASHTRACK_CONFIG', { budget: '10000' });
    const [formData, setFormData] = useState<formDataType>(config);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const handleSubmit = () => {
        setConfig(formData);
        navigate(-1);
    }

    return (
        <div className='m-3'>
            <h3 className='mb-4'>Settings</h3>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Monthly Budget (₹)</Form.Label>
                    <Form.Control type='number' name='budget' value={formData.budget} onChange={handleInputChange} />
                </Form.Group>

                <Button variant='primary' className='mt-3 d-flex align-items-center' onClick={handleSubmit}>Save</Button>
            </Form>
        </div>
    );
}

export default Settings;
