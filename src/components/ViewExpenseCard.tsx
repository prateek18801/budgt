import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

type props = {
    id: string,
    title: string,
    amount: string,
    category: string,
    date: string,
    notes: string,
    handleDelete: () => void
};

const ViewExpenseCard: React.FC<props> = ({ id, title, amount, category, date, notes, handleDelete }) => {

    const navigate = useNavigate();

    return (
        <Card className='mb-1'>
            <Card.Body className='d-flex align-items-center justify-content-between'>
                <div style={{ width: '45%' }}>{title}</div>
                <div style={{ width: '25%' }}><Badge bg='secondary'>₹{amount}</Badge></div>
                <div className='d-flex'>
                    <Button
                        variant='secondary'
                        className='me-1 p-1 d-flex align-items-center justify-content-center'
                        onClick={() => { navigate('/edit', { state: { id, title, amount, category, date, notes } }) }}
                    >
                        <span className='material-symbols-rounded'>edit</span>
                    </Button>
                    <Button
                        variant='danger'
                        className='p-1 d-flex align-items-center justify-content-center'
                        onClick={handleDelete}
                    >
                        <span className='material-symbols-rounded'>delete_forever</span>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ViewExpenseCard;
