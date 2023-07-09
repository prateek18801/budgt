import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import useLocalStorage from '../hooks/useLocalStorage';

const ExpenseAnalysis: React.FC = () => {

    const [expenses] = useLocalStorage('EXPENSES', []);

    const [month, setMonth] = useState<string>((new Date().getMonth() + 1).toString());
    const [year, setYear] = useState<string>(new Date().getFullYear().toString());

    const categoryAmountSum = {};
    const dateAmountSum = {};
    const months: Set<string> = new Set();
    const years: Set<string> = new Set();

    expenses.forEach(expense => {
        if (+month === +expense.date.split('-')[1] && year === expense.date.split('-')[0]) {
            // distribute by category for pi chart
            if (expense.category in categoryAmountSum) categoryAmountSum[expense.category] += (+expense.amount);
            else categoryAmountSum[expense.category] = +expense.amount;

            // distribute by date for line chart
            if (expense.date in dateAmountSum) dateAmountSum[expense.date] += (+expense.amount);
            else dateAmountSum[expense.date] = +expense.amount;
        }
        months.add(expense.date.split('-')[1]);
        years.add(expense.date.split('-')[0]);
    });

    const pieChartData = Object.keys(categoryAmountSum).map(key => ({ category: key, amount: categoryAmountSum[key] }));
    const lineChartData = Object.keys(dateAmountSum).sort().map(key => ({ date: key, amount: dateAmountSum[key] }));

    return (
        <div className='m-3'>
            <h3 className='mb-4'>Spend Analysis</h3>
            <Form.Group className='mb-3'>
                <Row>
                    <Col>
                        <Form.Select onChange={(e) => { setMonth(e.target.value) }}>
                            {[...months].map(month => (
                                <option key={month} value={month}>{new Date(new Date().setMonth(+month - 1)).toLocaleString('default', { month: 'long' })}</option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select onChange={(e) => { setYear(e.target.value) }}>
                            {[...years].map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
            </Form.Group>

            <Card className='mb-4'>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>₹ 6490</Card.Title>
                    <Button variant='link'>More Details</Button>
                </Card.Body>
            </Card>

            <h6 className='text-center'>Monthly category wise analysis</h6>
            <PieChart pieChartData={pieChartData} />

            <h6 className='mb-5 text-center'>Monthly day wise analysis</h6>
            <LineChart lineChartData={lineChartData} />
        </div>
    );
}

export default ExpenseAnalysis;
