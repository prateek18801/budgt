import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import ExpenseDetailCard from '../components/ExpenseDetailCard';
import useLocalStorage from '../hooks/useLocalStorage';

const ExpenseAnalysis: React.FC = () => {

    const [expenses] = useLocalStorage('EXPENSES', []);
    const [fromDate, setFromDate] = useState<string>(`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-01`);
    const [toDate, setToDate] = useState<string>(`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`);

    const categoryAmountSum = {};
    const dateAmountSum = {};
    let totalExpenditure = 0;

    expenses.forEach(expense => {
        if (expense.date >= fromDate && expense.date <= toDate) {
            // distribute by category for pi chart
            if (expense.category in categoryAmountSum) categoryAmountSum[expense.category] += (+expense.amount);
            else categoryAmountSum[expense.category] = +expense.amount;

            // distribute by date for line chart
            if (expense.date in dateAmountSum) dateAmountSum[expense.date] += (+expense.amount);
            else dateAmountSum[expense.date] = +expense.amount;

            totalExpenditure += +expense.amount;
        }
    });

    const pieChartData = Object.keys(categoryAmountSum).map(key => ({ category: key, amount: categoryAmountSum[key] }));
    const lineChartData = Object.keys(dateAmountSum).sort().map(key => ({ date: key, amount: dateAmountSum[key] }));

    return (
        <div className='m-3'>
            <h3 className='mb-4'>Spend Analysis</h3>
            <Form.Group className='mb-3'>
                <Row>
                    <Col><Form.Control type='date' value={fromDate} onChange={e => setFromDate(e.target.value)} /></Col>_
                    <Col><Form.Control type='date' value={toDate} onChange={e => setToDate(e.target.value)} /></Col>
                </Row>
            </Form.Group>

            <ExpenseDetailCard categoryAmountSum={categoryAmountSum} totalExpenditure={totalExpenditure} />

            <h6 className='text-center'>Monthly category wise analysis</h6>
            <PieChart pieChartData={pieChartData} />

            <h6 className='mb-5 text-center'>Monthly day wise analysis</h6>
            <LineChart lineChartData={lineChartData} />
        </div>
    );
}

export default ExpenseAnalysis;
