import { useState } from 'react';
import './App.css';
import RWDModal from './ModalPopUp/RWDModal';

function App() {

  const [isModalVisibla, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }
  return (
    <div className="App">
     <button onClick={toggleModal}>Show Modal</button>
     <RWDModal header="Login" message='Please Login!' isModalVisible={isModalVisibla} onBackdropClick={toggleModal} />
    </div>
  );
}

export default App;
