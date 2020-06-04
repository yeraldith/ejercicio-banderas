import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 37px;
  background: var(--gray);
  padding: 65px 24px;
  border: 1px solid black;
  justify-content: center;
`;
const CountryList = () => {
  const dispatch = useDispatch();
  //recibir el estado global de la app
  const countryList = useSelector((state) => state.countryList);

  //se maneja la informacion con los estados de redux
  //   const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        // setCountryList(data)
        console.log(list.length);
      })
      .catch(() => console.log("Hubo un error"));
  }, []);
  return (
    <CountryListStyled>
      {countryList.map(({ flag, name, region, capital, population }) => {
        return (
          <Country
            key={name}
            flag={flag}
            name={name}
            region={region}
            capital={capital}
            population={population}
          />
        );
      })}
    </CountryListStyled>
  );
};

export default CountryList;
