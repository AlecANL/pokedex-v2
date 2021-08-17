import Image from 'next/image';
import PokemonStat from '../pokemon-stat/pokemon-stat';
import styled from 'styled-components';

const PokemonStyled = styled.div`
  text-align: center;
`;

const PokemonDescription = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* outline: 1px solid red; */
  text-align: start;
  padding-block: 1.5rem;
  .heading {
    grid-column: span 3;
  }
  .region {
    position: absolute;
    inset-block-end: 2rem;
    inset-inline-start: -2.5rem;
    transform: rotate(271deg);
    p {
      margin: 0;
    }
  }
  .details {
    padding-block: 1.5rem;
    grid-column: 2 / span 2;
  }
  h1 {
    margin: 0;
  }
`;

function Pokemon() {
  return (
    <PokemonStyled>
      <PokemonDescription>
        <div className="heading">
          <span>#009</span>
          <h1>Blastoise</h1>
        </div>
        <div className="region">
          <p>
            <strong>Region: </strong>
            <span>Kanto</span>
          </p>
        </div>
        <div className="details">
          <p>
            <strong>Heigth</strong>
            <span>255</span>
          </p>
          <p>
            <strong>Weigth</strong>
            <span>255</span>
          </p>
        </div>
      </PokemonDescription>
      <div className="pokemon-image">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
          alt="blastoise pokemon"
          width={200}
          height={200}
        />
      </div>
      <div className="pokemon-stats">
        <PokemonStat />
      </div>
    </PokemonStyled>
  );
}

export default Pokemon;
