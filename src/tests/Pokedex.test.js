import { Pokedex } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Component <Pokedex.js /> test', () => {
  it('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<Pokedex />);
  });
  it('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<Pokedex />);
  });
  it('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<Pokedex />);
  });
});
