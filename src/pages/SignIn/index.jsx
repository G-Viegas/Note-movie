import { Input } from '../../components/InputLogin';
import { Button } from '../../Components/Button';

import { Link } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';

import { Background, Container, Form } from './styles';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis. </p>

        <h2>Faça seu Login</h2>

        <Input placeholder='E-mail' type='text' icon={FiMail} />

        <Input placeholder='Senha' type='password' icon={FiLock} />

        <Button children='Entrar' />
        <Link to='/register'>Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
