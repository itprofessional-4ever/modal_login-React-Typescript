import React from 'react'
import RWDModal from './RWDModal';
import { ReactComponent as LoginIcon} from '../assets/user.svg'
import { ReactComponent as PasswordIcon} from '../assets/padlock.svg'
import InputWithIcon from './InputWithIcon';

interface LoginArgs {
  password: string;
  login: string;
}

export type LoginFunction = (args: LoginArgs) => Promise<void>;

interface LoginModalProps {
  onBackdropClick: () => void;
  isModalVisible: boolean;
  loginError?: string;
  onLoginRequested: LoginFunction;

}

const LoginModal: React.FC<LoginModalProps> = ({loginError,isModalVisible, onBackdropClick, onLoginRequested}) => {
  return (
    <RWDModal 
      onBackdropClick={onBackdropClick}
      isModalVisible={isModalVisible}
      header="Login"
      message="Please log in"
      content={
        <>
          <InputWithIcon 
            type="text" 
            icon={
              <LoginIcon width="24px" height="24px" fill="white" />
            } />
          <InputWithIcon 
            type="password" 
            icon={
              <PasswordIcon width="24px" height="24px" fill="white" />
            } />
          <button>Cancel</button>
          <button>Log in</button>
        </>
      }
    />
  )
}

export default LoginModal