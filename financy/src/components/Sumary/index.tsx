import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg';
import outcome from '../../assets/Saidas.svg';
import total from '../../assets/Total.svg';

export function Sumary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcome} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highligh">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}