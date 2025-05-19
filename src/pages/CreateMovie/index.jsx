import { Container, AddMovie, Forms } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { GoArrowLeft } from 'react-icons/go';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Forms>
        <GoArrowLeft />
        <p>Voltar</p>
      </Forms>

      <AddMovie>
        <div className='input-row'>
          <Input title='Titulo' />
          <Input title='Sua nota (de 0 a 5)' />
        </div>

        <TextArea placeholder='Observações' />
      </AddMovie>
      <Section title='Marcadores'>
        <div className='tags'>
          <NoteItem value='React' />
          <NoteItem isNew placeholder='Novo Marcador' />
        </div>
      </Section>
      <div class='Buttons'>
        <Button>
          <p>Excluir Filme</p>
        </Button>
        <Button>
          <p>Salvar Alterações</p>
        </Button>
      </div>
    </Container>
  );
}
