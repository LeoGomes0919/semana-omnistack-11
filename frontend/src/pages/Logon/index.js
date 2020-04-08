import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function hendleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('session', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile')
    } catch (err) {
      alert('ID incorreto ou nao existe!')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" title="Be The Hero" />

        <form onSubmit={hendleLogin}>
          <header>
            <h1>Faça seu logon</h1>
          </header>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size="16" color="#E02141" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heros" title="Heros" />
    </div>
  );
}

export default Logon;