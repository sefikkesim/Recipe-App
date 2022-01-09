import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #e1f1dd;
  /* height: calc(100vh - 300px); */
  @media (max-width: 1250px) {
    /* justify-content: center;
    background-color: red;
    border: 1px solid red; */
  }
`;

export const ImgContainer = styled.div`
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  font-size: 3rem;
  h1 {
    font-size: 3rem;
  }
  img {
    width: 200px;
  }
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
export const Button = styled.button`
  
  width: 200px;
  background-color: #e1f1dd;
  padding: 2px;
  outline: none;
  height: 3rem;
  border: none;
  margin: auto;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    background-color: #00adb5;
    transition: all 0.2s ease-in;
    border: 1px solid white;
  }`