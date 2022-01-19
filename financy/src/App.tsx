import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import Modal from 'react-modal';
import { useState } from "react";
import { NewModal } from "./components/NewModal";
import { TransactionProvider } from "../src/Hooks/useTransaction";

Modal.setAppElement('#root');



export function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
      setIsModalOpen(true);
  }

  function handleCloneModal(){
      setIsModalOpen(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenModal={handleOpenModal}/>
      <Dashboard />

      <NewModal 
        isOpen={isModalOpen}
        onRequestClose={handleCloneModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}
