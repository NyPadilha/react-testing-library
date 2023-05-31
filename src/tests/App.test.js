import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Component <App.js /> test', () => {
  it('O primeiro link deve possuir o texto Home e estar na tela', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();
  });
  it('O segundo link deve possuir o texto About e estar na tela', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();
  });
  it('O terceiro link deve possuir o texto Favorite Pokémon e estar na tela', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(favorite).toBeInTheDocument();
  });
  it('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/not-found');
    });
    const notFound = screen.getByText(/not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
