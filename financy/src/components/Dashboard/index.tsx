import { Sumary } from "../Sumary";
import { Table } from "../Table";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>

            <Sumary />
            <Table />

        </Container>
    );
}