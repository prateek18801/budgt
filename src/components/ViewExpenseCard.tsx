import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import edit from '../assets/icons/edit.png';
import delete_forever from '../assets/icons/delete_forever.png';

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
                        <img src={edit} height="25" alt="edit" />
                    </Button>
                    <Button
                        variant='danger'
                        className='p-1 d-flex align-items-center justify-content-center'
                        onClick={handleDelete}
                    >
                        <img src={delete_forever} height="25" alt="delete" />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ViewExpenseCard;
