import styled from 'styled-components';

const StatsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    margin: 0;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }
  span {
    display: inline-block;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const StatsContainerStyled = styled.div`
  h2 {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

function PokemonStat() {
  return (
    <StatsContainerStyled>
      <div className="icon-type"></div>
      <h2>Base stats:</h2>
      <StatsStyled>
        <p>
          <strong>hp: </strong>
          <span>79</span>
        </p>
        <p>
          <strong>attack: </strong>
          <span>83</span>
        </p>
        <p>
          <strong>defense: </strong>
          <span>100</span>
        </p>
        <p>
          <strong>sp. attack: </strong>
          <span>85</span>
        </p>
        <p>
          <strong>sp. defense: </strong>
          <span>78</span>
        </p>
        <p>
          <strong>speed:</strong>
          <span>78</span>
        </p>
      </StatsStyled>
    </StatsContainerStyled>
  );
}

export default PokemonStat;
