import { Container } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ContentHeader } from './styles';
import { Card } from '../../components/Moviecard';
import { CardList } from './styles';

import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container>
      <Header />
      <ContentHeader>
        <h1>Meus filmes</h1>

        <Link to='/createMovie'>+ Adicionar filme </Link>
      </ContentHeader>
      <CardList>
        <Card />
        <Card />
      </CardList>
    </Container>
  );
}