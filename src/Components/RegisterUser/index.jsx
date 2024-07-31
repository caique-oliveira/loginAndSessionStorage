import React, { useState, useEffect } from 'react';
import * as S from './RegisterUser.styles';

const RegisterUser = ({ onClick = () => {}, Children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Recuperar as informações dos usuários do localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []); // Executando apenas uma vez no carregamento da página

  const [userInfo, setUserInfo] = useState({
    image: null, // Adicionando image ao estado do usuário
    fullName: '',
    age: '',
    cpf: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    gender: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setUserInfo(prevState => ({ ...prevState, image }));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convertendo a imagem para base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const newUser = { ...userInfo, image: reader.result };
      setUsers(prevUsers => [...prevUsers, newUser]);
      // Armazenando as informações dos usuários no localStorage
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      closeModal();
    };
    if (userInfo.image) {
      reader.readAsDataURL(userInfo.image);
    }
  };

  // Função para inserir quebras de linha após 35 caracteres
  const insertLineBreaks = (text) => {
    if (!text) return text;

    const maxLength = 35;
    let result = '';
    for (let i = 0; i < text.length; i += maxLength) {
      result += text.substring(i, i + maxLength) + '\n';
    }
    return result;
  };

  return (
    <>
      <S.ContainerButton className="container">
        <S.Button className="interior">
          <a className="btn" onClick={openModal}>Cadastrar Novo Usuário</a>
        </S.Button>
      </S.ContainerButton>
      {modalOpen && (
        <S.BoxModal id="open-modal" className="modal-window">
          <div>
            <S.IconClose>
              <S.CloseModal title="Close" onClick={closeModal}>X</S.CloseModal>
            </S.IconClose>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Insira sua foto</span>
                <br />
                <br />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </label>
              <br />
              <br />
              <label>
                <span>Nome Completo</span>
                <S.InputEstilizado
                  className='InputForm'
                  type="text"
                  name="fullName"
                  value={userInfo.fullName}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
              <span>Idade</span>
                <S.InputEstilizado
                  className='InputForm'
                  type="text"
                  name="age"
                  value={userInfo.age}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
              <span>CPF</span>
                <S.InputEstilizado
                  className='InputForm'
                  type="text"
                  name="cpf"
                  value={userInfo.cpf}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
              <span>E-mail</span>
                <S.InputEstilizado
                  className='InputForm'
                  type="text"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
              <span>Telefone</span>
                <S.InputEstilizado
                  className='InputForm'
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
              <span>Endereço</span>
                <S.InputEstilizado
                  className='InputForm'
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
              <span>Data de nascimento</span>
                <S.InputEstilizado
                  className='InputForm'
                  type="date"
                  name="date"
                  value={userInfo.date}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
                <span>Gênero</span>
                <select
                  className="SelectName"
                  name="gender"
                  value={userInfo.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outros">Outros</option>
                </select>
              </label>
              <br />
              <br />
              <S.BtnCancelar type="button" onClick={closeModal}>Cancelar</S.BtnCancelar>
              <S.BtnCadastrar type="submit" className="btnSuccess">Cadastrar</S.BtnCadastrar>
            </form>
          </div>
        </S.BoxModal>
      )}

      {/* Exibir informações dos usuários em cards */}
      <S.userCardsContainer>
      {users.map((user, index) => (
        <S.Cards key={index} className="card">
          <S.SpaceCard>
          <div className="card-body">
          {user.image && <img style={{ width: '150px'}} src={user.image} alt="Imagem do usuário" />}
            <S.TextLeft className="card-title">{user.fullName}</S.TextLeft>
            <S.TextLeft  className="card-text">Idade: {user.age}</S.TextLeft>
            <S.TextLeft className="card-text">CPF: {user.cpf}</S.TextLeft>
            <hr></hr>
            <S.RightCard>
            <S.TextCard className="card-text">{insertLineBreaks(`Email: ${user.email}`)}</S.TextCard>
            <S.TextCard className="card-text">{insertLineBreaks(`Telefone: ${user.phone}`)}</S.TextCard>
            <S.TextCard className="card-text">{insertLineBreaks(`Endereço: ${user.address}`)}</S.TextCard>
            <S.TextCard className="card-text">{insertLineBreaks(`Data de Nascimento: ${user.date}`)}</S.TextCard>
            <S.TextCard className="card-text">{insertLineBreaks(`Gênero: ${user.gender}`)}</S.TextCard>
            </S.RightCard>
          </div>
          </S.SpaceCard>
        </S.Cards>
      ))}
      </S.userCardsContainer>
    </>
  );
};

export default RegisterUser;
