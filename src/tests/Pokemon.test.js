import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Component <Pokemon.js /> test', () => {
  it('A imagem do pokemon possui o src e alt correto', () => {
    renderWithRouter(<App />);
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img).toHaveAttribute(
      'src',
      'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png',
    );
  });
  it('A imagem de favorito star possui o src /star-icon.svg e alt<name> is marked as favorite', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    const favorite = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favorite).toHaveAttribute('src', '/star-icon.svg');
  });
  it('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent('Electric');
    const name = screen.getByTestId('pokemon-name');
    expect(name).toHaveTextContent('Pikachu');
    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toHaveTextContent('Average weight: 6.0 kg');
  });
  it('É exibido na tela um link com o href /pokemon/<id>', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    expect(link).toHaveAttribute('href', '/pokemon/25');
  });
});
