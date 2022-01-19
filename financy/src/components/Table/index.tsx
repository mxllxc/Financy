import { useEffect, useState } from "react"
import { api } from "../../service/api";
import { Container } from "./styles"

interface Transaction {
    id: number;
    title: string;
    category: string;
    type: string;
    amound: number;
    created: string;
}

export function Table(){

    const [transaction, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transaction")
        .then(response => setTransaction(response.data.transactions))
    }, []);

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
                    {transaction.map(t => {
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
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(t.amound))}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}