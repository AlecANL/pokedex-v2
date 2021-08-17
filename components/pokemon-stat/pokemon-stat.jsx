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
`;

function PokemonStat() {
  return (
    <div>
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
    </div>
  );
}

export default PokemonStat;
