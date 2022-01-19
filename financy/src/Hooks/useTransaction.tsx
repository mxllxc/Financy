import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../service/api";


interface Transaction {
    id: number;
    title: string;
    category: string;
    type: string;
    amound: number;
    created: string;
}

interface TransactionInput {
    title: string;
    category: string;
    type: string;
    amound: number;
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
    );

export function TransactionProvider({children}: TransactionProviderProps) {

    const [transactions, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transaction")
        .then(response => setTransaction(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transaction', {
            ...transactionInput, createdAt: new Date()
        })
        const { transaction } = response.data;  

        setTransaction([...transactions, transaction]);
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionContext);

    return context
}