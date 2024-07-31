import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 230px;
  height: 60px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  margin: 0 auto;
  display: block;
  &:hover {
    background-color: #21a1f1;
  }
`;
export const IconClose = styled.div`
    float: right;
    width: 100%;
    display: flex;
    justify-content: right;
    margin-bottom: 15px;
    font-family: sans-serif;
`;
export const CloseModal = styled.a`
  font-size: 30px;
  cursor: pointer;
  padding-top: 15px;
  margin-right: -15%;
`;

export const ImageUser = styled.image`
    width:150px;
`;
export const InputEstilizado = styled.input`
    width: 100%;
    height: 20px;
    border-radius: 10px;
    border: 1px solid;
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: sans-serif;
`;
export const InputFile = styled.input`
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const labelPicture = styled.label`
  width: 100%;
  display: block;
  cursor: pointer;
`;

export const BtnCancelar = styled.button`
    background: red;
    border: none;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    margin-right: 10px;
    color: #fff;
    font-size: 15px;
    font-family: sans-serif;
    font-weight: bold;
    cursor: pointer;
`;

export const BtnCadastrar = styled.button`
    background: green;
    border: none;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    font-family: sans-serif;
    font-weight: bold;
    float: right;
    cursor: pointer;
    margin-bottom: 20px;
`;
export const BoxModal = styled.div`
    background: silver;
    border-radius: 10px;
    position: fixed;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 40%;
    font-weight: bold;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0px);
`;
export const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
`;

export const userCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  flex-direction: column;
  align-items: center;
  margin-left: 16%;
  width: 80%;
`;
export const Cards = styled.div`
  width: 98%;
  min-height: 300px;
  background: silver;
  border-radius: 10px;
  margin: 15px auto;
`;
export const SpaceCard = styled.div`
  
`;
export const TextLeft = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
  font-family: sans-serif;
`;
 
export const RightCard = styled.div`
  float: right;
  margin-top: -35%;
`;

export const TextCard = styled.p`
    word-break: break-word;
    width: 280px;
    margin-right: 15px;
    font-weight: 700;
    margin-bottom: 10px;
    font-family: sans-serif;
`;


