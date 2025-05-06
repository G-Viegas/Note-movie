import { Container, AddMovie, Forms } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';

import { GoArrowLeft } from 'react-icons/go';

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Forms>
        <GoArrowLeft />
        <p>Voltar</p>
      </Forms>

      <AddMovie>
        <div className="input-row">
          <Input title="Titulo"/>
          <Input title="Sua nota (de 0 a 5)" />
        </div>

        <TextArea placeholder="Observações" />
      </AddMovie>
    </Container>
  );
}
