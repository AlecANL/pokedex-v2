import Image from 'next/image';
import PokemonStat from '../pokemon-stat/pokemon-stat';
import styled from 'styled-components';

const PokemonStyled = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 150px 2fr 1fr;
    min-block-size: 100vh;
  }
`;

const PokemonDescription = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: start;
  padding-block: 1.5rem;

  .heading {
    grid-column: span 3;
    @media screen and (min-width: 768px) {
      span {
        font-weight: bold;
        font-size: 1.25;
      }
      h1 {
        font-size: 2.25rem;
      }
    }
  }
  .region {
    position: absolute;
    inset-block-end: 2rem;
    inset-inline-start: -2.5rem;
    transform: rotate(271deg);
    p {
      margin: 0;
    }
    @media screen and (min-width: 768px) {
      inset-block-end: 4rem;
      font-size: 1.1rem;
    }
  }
  .details {
    padding-block: 1.5rem;
    grid-column: 2 / span 2;
    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  h1 {
    margin: 0;
  }
`;

const PokemonImageStyled = styled.div`
  img {
    inline-size: 200px;
    block-size: 200px;
  }
  @media screen and (min-width: 768px) {
    align-self: center;
    img {
      inline-size: 400px;
      block-size: 400px;
      -webkit-user-drag: none;
    }
  }
`;

const PokemonStatsStyled = styled.div`
  @media screen and (min-width: 768px) {
    align-self: center;
  }
`;

const ShadowPokeNameStyled = styled.p`
  margin: 0;
  position: absolute;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.67);
  opacity: 0.5;
  font-size: 4.5rem;
  inset-block-start: 3rem;
  inset-inline-start: 0rem;
  @media screen and (min-width: 768px) {
    font-size: 15rem;
    inset-block-start: 0rem;
    z-index: 10;
    inset-inline-start: -1rem;
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
      <PokemonImageStyled>
        <ShadowPokeNameStyled>Blastoise</ShadowPokeNameStyled>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
          alt="blastoise pokemon"
          width={400}
          height={400}
        />
      </PokemonImageStyled>
      <PokemonStatsStyled>
        <PokemonStat />
      </PokemonStatsStyled>
    </PokemonStyled>
  );
}

export default Pokemon;
