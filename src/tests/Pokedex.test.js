import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Component <Pokedex.js /> test', () => {
  it('A página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const h2 = screen.getByRole('heading', { level: 2, name: /encountered pokémon/i });
    expect(h2).toBeInTheDocument();
  });
  it('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    const Eletric = screen.getByRole('button', { name: /electric/i });
    expect(Eletric).toBeInTheDocument();
    const Fire = screen.getByRole('button', { name: /fire/i });
    expect(Fire).toBeInTheDocument();
    const Bug = screen.getByRole('button', { name: /bug/i });
    expect(Bug).toBeInTheDocument();
    const Poison = screen.getByRole('button', { name: /poison/i });
    expect(Poison).toBeInTheDocument();
    const Psychic = screen.getByRole('button', { name: /psychic/i });
    expect(Psychic).toBeInTheDocument();
    const Normal = screen.getByRole('button', { name: /normal/i });
    expect(Normal).toBeInTheDocument();
    const Dragon = screen.getByRole('button', { name: /dragon/i });
    expect(Dragon).toBeInTheDocument();
  });
  it('A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo;', () => {
    renderWithRouter(<App />);
    const Psychic = screen.getByRole('button', { name: /psychic/i });
    expect(Psychic).toBeInTheDocument();

    userEvent.click(Psychic);

    const alakazam = screen.getByText('Alakazam');
    expect(alakazam).toBeInTheDocument();
    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });

    userEvent.click(nextPokemon);

    const mew = screen.getByText('Mew');
    expect(mew).toBeInTheDocument();
  });
  it('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);
    const Eletric = screen.getByRole('button', { name: /electric/i });
    expect(Eletric).toHaveAttribute('data-testid', 'pokemon-type-button');
    const All = screen.getByRole('button', { name: /all/i });
    expect(All).not.toHaveAttribute('data-testid', 'pokemon-type-button');
  });
  it('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const Psychic = screen.getByRole('button', { name: /psychic/i });
    expect(Psychic).toBeInTheDocument();

    userEvent.click(Psychic);
    const All = screen.getByRole('button', { name: 'All' });
    expect(All).toBeInTheDocument();

    userEvent.click(All);

    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    for (let i = 0; i <= 7; i += 1) {
      userEvent.click(nextPokemon);
    }
    const dragonair = screen.getByText('Dragonair');
    expect(dragonair).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
});
