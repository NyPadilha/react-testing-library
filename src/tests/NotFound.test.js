import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

// copia do about
describe('Component <NotFound.js /> test', () => {
  it('Teste se página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const notFound = screen.getByRole('heading', { level: 2 });
    expect(notFound).toHaveTextContent('not found');
  });
  it('Teste se página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const { src } = screen.getByRole('img');
    expect(src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
