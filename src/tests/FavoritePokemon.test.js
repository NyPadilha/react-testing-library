import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Component <FavoritePokemon.js /> test', () => {
  it('É exibido na tela a mensagem No favorite Pokémon found', () => {
    renderWithRouter(<FavoritePokemon />);
    const noFavorite = screen.getByText('No favorite Pokémon found');
    expect(noFavorite).toBeInTheDocument();
  });
  it('São exibidos na tela apenas os Pokémon favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    act(() => {
      userEvent.click(moreDetails);
    });
    const checkbox = screen.getByRole('checkbox');
    act(() => {
      userEvent.click(checkbox);
    });
    const favoritePokemon = screen.getByRole('link', { name: /favorite pokémon/i });
    act(() => {
      userEvent.click(favoritePokemon);
    });
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
});
