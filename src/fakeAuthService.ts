import { LoginArgs } from './ModalPopUp/LoginModal'


const loginUser = ({password, login}: LoginArgs) => new Promise<boolean>((resolve, reject) => setTimeout(()=>  {
  if(login === 'CyberPotato' && password === 'test1234') {
    resolve(true)
  } else {
    reject('Credentials are wrong!')
  }
}, 1500))
export default loginUser;