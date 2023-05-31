import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Component <About.js /> test', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const about = screen.getByRole('heading', { level: 2 });
    expect(about).toHaveTextContent('About Pokédex');
  });
  it('Teste se a página contém a imagem da Pokédex', () => {
    renderWithRouter(<About />);
    const { src } = screen.getByRole('img');
    expect(src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
