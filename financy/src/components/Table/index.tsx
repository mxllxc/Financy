import { Container } from "./styles"

export function Table(){
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
                    <tr className="title">
                        <td>Site</td>
                        <td>Desenvolvimento</td>
                        <td className="deposit">R$1200,00</td>
                        <td>20/08/2021</td>
                    </tr>
                    <tr className="title">
                        <td>Sorvete</td>
                        <td>Lazer</td>
                        <td className="withdraw">- R$12,00</td>
                        <td>02/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}