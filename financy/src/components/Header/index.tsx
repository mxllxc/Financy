import logoImg from '../../assets/Logo.png';
import { Container, Content, Logo } from './styles';

interface HeaderProps {
    onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps){


    return(
        <Container>
            <Content>
            <Logo>
            <img src={logoImg} alt="financy" />
            <h1>Financy</h1>
            </Logo>
            <button type="button" onClick={onOpenModal}>
                Nova transação
            </button>



            </Content>

        </Container>
    )
}