import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';

import { Link } from 'react-router-dom';

import { Input } from '../../Components/InputLogin';
import { Button } from '../../Components/Button';

import { Container, Form, Avatar } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
         < Link to='/'><GoArrowLeft />Voltar</Link>
      </header>

      <Form>
        <Avatar>
          <img src='https://github.com/G-Viegas.png' alt='Foto do usuário' />

          <label htmlFor='avatar'>
            <FiCamera />
            <input id='avatar' type='file' />
          </label>
        </Avatar>

        <Input placeholder='Nome' type='text' icon={FiUser} />

        <Input placeholder='E-mail' type='text' icon={FiMail} />

        <Input placeholder='Senha atual' type='password' icon={FiLock} />

        <Input placeholder='Nova senha' type='password' icon={FiLock} />

        <Button children='Salvar' />
      </Form>
    </Container>
  );
}
