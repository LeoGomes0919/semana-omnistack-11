import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon(){
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" title="Be The Hero"/>
      
        <form>
          <header>
            <h1>Faça seu logon</h1>
          </header>

          <input placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size="16" color="#E02141"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
        <img src={heroesImg} alt="Heros" title="Heros"/>
    </div>
  );
}

export default Logon;