import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ironman from "../images/ironman.jpg";
import avatar from "../images/avatar.jpg";
import memory from "../images/memory.jpg";
import hobbit from "../images/hobbit.jpg";
import tenet from "../images/tenet.jpg";
import godfather from "../images/godfather.jpg";
import johnwick from "../images/johnwick.jpg";
import oblivion from "../images/oblivion.jpg";
function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src={avatar} />
        </Wrap>
        <Wrap>
          <img src={memory} />
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src={ironman} />
          </Link>
        </Wrap>
        <Wrap>
          <img src={hobbit} />
        </Wrap>
        <Wrap>
          <img src={tenet} />
        </Wrap>
        <Wrap>
          <img src={godfather} />
        </Wrap>
        <Wrap>
          <img src={johnwick} />
        </Wrap>
        <Wrap>
          <img src={oblivion} />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding-bottom: 2%;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms / cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
