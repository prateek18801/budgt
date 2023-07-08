import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type formDataType = {
    id: string,
    title: string,
    amount: string,
    category: string,
    date: string,
    notes: string
}

type props = {
    formData: formDataType
    setFormData: React.Dispatch<React.SetStateAction<formDataType>>,
    handleSubmit: () => void
};

const ExpenseForm: React.FC<props> = ({ formData, setFormData, handleSubmit }) => {

    const titleRef = useRef<HTMLInputElement>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    return (
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' name='title' value={formData.title} ref={titleRef} onChange={handleInputChange} />
                <Form.Text className='text-muted'>{50 - (titleRef.current?.value.length || 0)} out of 50 characters left</Form.Text>
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
                    <option value='investment'>Investment</option>
                    <option value='clothing'>Clothing</option>
                    <option value='loan'>Loan</option>
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

            <Button variant='primary' className='mt-3 d-flex align-items-center' onClick={handleSubmit}>Save</Button>
        </Form>
    );
}

export default ExpenseForm;
