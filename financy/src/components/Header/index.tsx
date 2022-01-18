import logoImg from '../../assets/Logo.png';
import { Container, Content, Logo } from './styles';

export function Header(){
    return(
        <Container>
            <Content>
            <Logo>
            <img src={logoImg} alt="financy" />
            <h1>Financy</h1>
            </Logo>
            <button type="button">
                Nova transação
            </button>

            </Content>

        </Container>
    )
}