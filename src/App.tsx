import { useState } from 'react';
import './App.css';
import LoginModal, { LoginFunction } from './ModalPopUp/LoginModal';

function App() {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  const onBackdropClick = () => {
    setIsModalVisible(false)
  }

  const onLoginRequest: LoginFunction = async ({password, login}) => {
    console.log(password, login)
  }
  return (
    <div className="App">
     <button onClick={toggleModal}>Show Modal</button>
     <LoginModal
      onBackdropClick={onBackdropClick} 
      isModalVisible={!isModalVisible} 
      onLoginRequested={onLoginRequest} 
    />
    </div>
  );
}

export default App;
