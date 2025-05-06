import { Container } from './styles';

export function Input({title}) {
  return (
    <Container>
      <input type='text' placeholder={title} />
    </Container>
  );
}
