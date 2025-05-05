import { Container, Profile, Brand, Search, User} from './styles';

export function Header() {
  return (
    <Container>
      <Brand>Rocket Movies</Brand>
      <Search>
        <input type='text' placeholder='Pesquisar pelo título' />
      </Search>

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
