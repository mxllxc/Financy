import { useTransactions } from "../../Hooks/useTransaction";
import { Container } from "./styles"


export function Table(){

    const { transactions } = useTransactions(); // Tambem pode ser com useContext :)


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(t => {
                        return(
                            <tr key={t.id}>
                                <td>{t.title}</td>
                                <td>{t.category}</td>
                                <td className={t.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(t.amound)}
                                    </td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date())}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}