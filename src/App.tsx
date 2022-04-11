import { useState } from 'react';
import './App.css';
import loginUser from './fakeAuthService';
import LoginModal, { LoginFunction } from './ModalPopUp/LoginModal';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loginError, setLoginError] = useState<string | undefined>()

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible =>  !wasModalVisible)
  }

  const onBackdropClick = () => {
    setIsModalVisible(false)
  }

  const onLoginRequest: LoginFunction = async ({password, login}) => {
    try {
      const result = await loginUser({password, login})
      console.log(result)
    } catch (error) {
      setLoginError('something went wrong when you login')
      console.log(error)
      console.log(JSON.stringify(error))
    }
  }

  return (
    <div className="App">
     <button onClick={toggleModal}>Show Modal</button>
     <LoginModal
      loginError={loginError}
      onClose={onBackdropClick} 
      isModalVisible={isModalVisible} 
      onLoginRequested={onLoginRequest} 
    />
    </div>
  );
}

export default App;
