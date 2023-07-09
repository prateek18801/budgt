import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

type props = {
    totalExpenditure: number,
    categoryAmountSum: {}
}

const ExpenseDetailCard: React.FC<props> = ({ totalExpenditure, categoryAmountSum }) => {

    const [showDetail, setShowDetail] = useState<boolean>(false);
    const CONFIG_EXPENDITURE_LIMIT = 10000;

    return (
        <Card className='mb-4'>
            <Card.Body className='d-flex flex-column'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h2 className='m-0 text-danger'>₹ {totalExpenditure}</h2>
                        <div className='small fw-bold'>Expense</div>
                    </div>
                    <div>
                        <h4 className='m-0 text-success'>₹ {CONFIG_EXPENDITURE_LIMIT - totalExpenditure}</h4>
                        <div className='small fw-bold'>Balance</div>
                    </div>
                </div>


                {showDetail && <Table striped bordered className='mt-4'>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(categoryAmountSum).map(category => (
                            <tr key={category}>
                                <td>{category.charAt(0).toUpperCase() + category.slice(1)}</td>
                                <td>{categoryAmountSum[category]}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                }

                <Button variant='link'
                    onClick={() => { setShowDetail(prev => !prev) }}>
                    <small>{showDetail ? 'Less' : 'More'} Details</small>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ExpenseDetailCard;
