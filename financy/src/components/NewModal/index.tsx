import Modal from 'react-modal';
import { Container, TransactionContainer, RadioBox } from './styles';
import closeImg from '../../assets/Vector.svg';
import incomeImg from '../../assets/Entradas.svg';
import outCome from '../../assets/Saidas.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../Hooks/useTransaction';

interface NewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewModal({ isOpen, onRequestClose } : NewModalProps){

    const [title, setTitle] = useState('');
    const [amound, setAmoud] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    const { createTransaction } = useTransactions(); // Tambem pode ser com useContext :)

    async function handleCreateTransaction(event: FormEvent){
        event.preventDefault();
        await createTransaction({
            title,
            amound,
            category,
            type,
        })

        setTitle('');
        setAmoud(0);
        setType('deposit');
        setCategory('');
        onRequestClose();
    }

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            >
                <button 
                type="button" 
                onClick={onRequestClose} 
                className='react-modal-close'
                >
                    <img src={closeImg} alt="Fechar" />
                </button>
            <Container onSubmit={handleCreateTransaction}>
            <h2>Cadastrar Transacao</h2>

            <input 
            type="text" 
            placeholder='Titulo' 
            value= {title}
            onChange={event => setTitle(event.target.value)}
            />

            <input 
            type="number" 
            placeholder='Valor'
            value= {amound}
            onChange={event => setAmoud(Number(event.target.value))}
            />

            <TransactionContainer>

                <RadioBox
                type='button'
                onClick={() => { setType('deposit') }}
                isActive={type === 'deposit'}
                activeColor='green'
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                type='button'
                onClick={()=>{setType('withdraw')}}
                isActive={type === 'withdraw'}
                activeColor='red'
                >
                    <img src={outCome} alt="Saida" />
                    <span>Saida</span>
                </RadioBox>

            </TransactionContainer>

            <input 
            type="text" 
            placeholder='Categoria'
            value= {category}
            onChange={event => setCategory(event.target.value)} 
            />

            <button type='submit'>Cadastrar</button>

            </Container>
        </Modal>
    )
}