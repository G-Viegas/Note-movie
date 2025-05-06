import { Container, Profile, Brand, User } from './styles';
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <Brand>Rocket Movies</Brand>
      <Input title='Pesquisar pelo título' />
      <Profile>
        <User>
          <strong>Guilherme Viegas</strong>
          <span>Sair</span>
        </User>
        <img src='https://github.com/G-Viegas.png' alt='Foto do usuario'></img>
      </Profile>
    </Container>
  );
}
