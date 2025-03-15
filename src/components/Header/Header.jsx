import React, { useEffect, useState } from 'react';
import './Header.css';
import { FaSpotify } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const Toggle = () => {
    setOpen(!open);
  };
  const MenuToogle = () => {
    setOpen(!open);
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/Artists')
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Filtrar artistas com base no termo de busca (opcional para mostrar todos no datalist inicialmente)
  const filteredArtists = post.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header>
      <div className="logo"><FaSpotify /></div>
      <div className="buscar-inicio">
        <NavLink className="logo-inicio" to='/'><FaHouse /></NavLink>
        <div className="buscar">
          <IoIosSearch />
          <input
            type="text"
            placeholder="O que você quer ouvir?"
            value={searchTerm}
            onChange={handleInputChange}
            list="artist-list"
          />
          <datalist id="artist-list">
            {filteredArtists.map((item) => (
              <option key={item.id} value={item.title} />
            ))}
          </datalist>
        </div>
      </div>
      <div className={open ? "active" : "inative"} onClick={Toggle}>
        <button className='hamburguer'></button>
      </div>
      <div className={open ? "menu-active" : "menu-inative"} onClick={MenuToogle}>
        <div className="login">
          <div className="login-painel">
            <div className="inscreva"><h2>Inscreva-se</h2></div>
            <button className='entrar'>Entrar</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
