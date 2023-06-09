import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddExpense: React.FC = () => {
    return (
        <div className='m-3'>
            <h3 className='mb-4'>Add Expense</h3>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' required />
                    <Form.Text className='text-muted'>100 out of 100 characters left</Form.Text>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type='number' defaultValue={0} required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                        <option>Food</option>
                        <option>Travel</option> 
                        <option>Groceries</option>
                        <option>Bills</option>
                        <option>Rent</option>
                        <option>Health</option>
                        <option>Others</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type='date' defaultValue={new Date().toISOString().substring(0, 10)} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Notes (Optional)</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                </Form.Group>
                <Button variant='primary' className='mt-3'>Add</Button>
            </Form>
        </div>
    );
}

export default AddExpense;
