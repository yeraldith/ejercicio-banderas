import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
 box-shadow:0 0 7px 2px rgba(0,0,0,.03);
  text-align: left;
  border-radius: 5px;
  overflow:hidden;
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding: 24px;
  }
  h2 {
    margin: 0px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight:700;
  }
  p {
    font-size: 14px;
    margin-bottom: 8.5px;
  }
`;

function Country({ flag, name, region, capital, population }) {
  return (
    <CountryStyled>
      <img loading="Lazy" alt="Imagen-Bandera" src={flag} />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong>
          {population}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}
export default Country;