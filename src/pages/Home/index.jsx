import { Container } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ContentHeader } from './styles';
import { Card } from '../../components/Moviecard';
import { CardList } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <ContentHeader>
        <h1>Meus filmes</h1>
        <Button>+ Adicionar filme</Button>
      </ContentHeader>
      <CardList>
        <Card />
        <Card />
      </CardList>
    </Container>
  );
}