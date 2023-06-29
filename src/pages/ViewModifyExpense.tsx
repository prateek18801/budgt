import useLocalStorage from '../hooks/useLocalStorage';
import ViewExpenseCard from '../components/ViewExpenseCard';

const ViewModifyExpense: React.FC = () => {

    const [expenses, setExpenses] = useLocalStorage('EXPENSES', []);

    return (
        <div className='m-3'>
            <h3 className='mb-4'>Expense History</h3>
            <h4>Today</h4>
            {expenses.filter(expense => expense.date === new Date().toISOString().substring(0, 10)).map(expense => {
                return <ViewExpenseCard
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                />
            })}

            <h4 className='mt-4'>Yesterday</h4>
            {expenses.filter(expense => expense.date === new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10)).map(expense => {
                return <ViewExpenseCard
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                />
            })}

            <h4 className='mt-4'>Earlier</h4>
            {expenses.filter(expense => {
                return expense.date !== new Date().toISOString().substring(0, 10) &&
                    expense.date !== new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
            }).map(expense => {
                return <ViewExpenseCard
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                />
            })}
        </div>
    );
}

export default ViewModifyExpense;
