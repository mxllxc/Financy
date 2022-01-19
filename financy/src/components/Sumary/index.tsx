import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg';
import outcome from '../../assets/Saidas.svg';
import total from '../../assets/Total.svg';
import { useTransactions } from "../../Hooks/useTransaction";

export function Sumary() {
    const { transactions } = useTransactions(); // Tambem pode ser com useContext :)


    const summary = transactions.reduce((acc, t) => {
        if(t.type === 'deposit'){
            acc.deposits += t.amound;
            acc.total += t.amound;
        } else {
            acc.withdraw += t.amound;
            acc.total -= t.amound;
        }
        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.deposits)
                }</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcome} alt="Saidas" />
                </header>
                <strong>{
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.withdraw)
                }</strong>
            </div>
            <div className="highligh">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>{
                new Intl.NumberFormat
                    ('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    })
                    .format(summary.total)
                }</strong>
            </div>
        </Container>
    )
}