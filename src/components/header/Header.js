import React from 'react';
import azuka from '../../images/pngwing.png';


export const Header = () => {
  return (
    <header>
      <div className='header-content'>
        <div className="header-left">
          <img className="azuka" src={azuka} alt="" />
        </div>
        <div className="header-right">
          <h1>Hola vos!</h1>
          <h2>Hago la mudación, y vendo cosas</h2>
          <h2>si te gusta algo, manda mail a quierocompraralgodelamudacion@gmail.com, o manda wasap.</h2>
          <h3>
            no tengo con qué enviar las cosas, así que tendrías que venir a buscarlo, o se envía con flete.
          </h3>

          <p>*(la azuka enojada porque vendo su cuadro de Evangelion: 3.0)*</p>
        </div>
      </div>
    </header>
  )
}

