import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'

import './style.css';
import logoImg from '../../assets/logo.svg';

function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="new-incident-content">
        <section>
          <header>
            <img src={logoImg} alt="Be The Hero" title="Be The Hero" />
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          </header>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size="16" color="#E02141" />
             Voltar para home
           </Link>
        </section>

        <form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição do caso" />
          <input placeholder="Valor em reais" />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;