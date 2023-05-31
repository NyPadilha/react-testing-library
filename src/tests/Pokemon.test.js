import { Pokemon } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Component <Pokemon.js /> test', () => {
  it('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<Pokemon />);
  });
  it('A imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<Pokemon />);
  });
  it('A imagem de favorito star possui o src /star-icon.svg', () => {
    renderWithRouter(<Pokemon />);
  });
  it('A imagem de favorito star possui o alt <name> is marked as favorite', () => {
    renderWithRouter(<Pokemon />);
  });
  it('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<Pokemon />);
  });
  it('É exibido na tela um link com o href /pokemon/<id>', () => {
    renderWithRouter(<Pokemon />);
  });
});
