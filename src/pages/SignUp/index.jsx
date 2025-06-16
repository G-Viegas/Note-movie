import {Input} from '../../Components/InputLogin';
import {Button} from '../../Components/Button';

import { GoArrowLeft } from 'react-icons/go';

import { Link } from 'react-router-dom';

import {FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Background, Container, Form } from "./styles";

export function SignUp(){
  return(
    <Container>
      <Form>

        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis. </p>

        <h2>Crie sua conta</h2>
        <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
        />

        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        />

        <Input
        placeholder="Senha"
        type="password"
        icon={FiLock}
        />
   
        <Button children="Criar"/>
         < Link to='/'><GoArrowLeft />Voltar para o login</Link>
      </Form>
      <Background/>
    </Container>
  )
}