import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type props = {
    title: string,
    amount: string,
    category: string,
    date: string,
    notes: string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
    handleSubmit: () => void
};

const ExpenseForm: React.FC<props> = ({ title, amount, category, date, notes, handleInputChange, handleSubmit }) => {

    return (
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' name='title' value={title} onChange={handleInputChange} />
                <Form.Text className='text-muted'>100 out of 100 characters left</Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Amount (₹)</Form.Label>
                <Form.Control type='number' name='amount' value={amount} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Category</Form.Label>
                <Form.Select name='category' value={category} onChange={handleInputChange}>
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
                <Form.Control type='date' name='date' value={date} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Notes (Optional)</Form.Label>
                <Form.Control as='textarea' name='notes' rows={3} value={notes} onChange={handleInputChange} />
            </Form.Group>

            <Button variant='primary' className='mt-3' onClick={handleSubmit}>Add</Button>
        </Form>
    );
}

export default ExpenseForm;
