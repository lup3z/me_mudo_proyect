import React, { useState } from 'react';
import IMG from "../../images/WhatsApp2.jpeg";
import IMG2 from "../../images/WhatsApp1.jpeg";
import IMG3 from "../../images/pexels-andres-ayrton-6578835.jpg";
import IMG4 from "../../images/pexels-cottonbro-studio-6928667.jpg";
import IMG5 from "../../images/pexels-mikhail-nilov-6740527.jpg";
import IMG6 from "../../images/pexels-yan-krukau-5216812.jpg";

import IMG7 from "../../images/pexels-gene-ortega-12379927.jpg";
import IMG8 from "../../images/pexels-mikhail-nilov-6707693.jpg";
import IMG9 from "../../images/pexels-nadin-sh-17292508.jpg";
import IMG10 from "../../images/pexels-nataliya-vaitkevich-5425876.jpg";
import IMG11 from "../../images/pexels-olia-danilevich-9004729.jpg";
import LargeImageModal from './LargeImageModal';

export const Productos = () => {
  const [selectedProduct, setSelectedProduct] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const products = [
    { 
      title: 'Juego de mesa y sillas', 
      images: [IMG, IMG2], 
      description: 'Descripción de la tarjeta 1',
      medidas: "10 x 15 x20"
    },
    { title: 'Banqueta desayunador', 
      images: [IMG6, IMG11], 
      description: 'Descripción de la tarjeta 2', 
      medidas: "10 x 15 x20"
    },
    { title: 'Heladera', 
      images: [IMG3, IMG6], 
      description: 'Descripción de la tarjeta 3', 
      medidas: "10 x 15 x20"
    },
    { title: 'Sommier 1 plaza', 
      images: [IMG4, IMG7], 
      description: 'Descripción de la tarjeta 4',
      medidas: "10 x 15 x20"
    },
    { title: 'Horno electrico', 
      images: [IMG5, IMG9], 
      description: 'Descripción de la tarjeta 5', 
      medidas: "10 x 15 x20"
    },
    { title: 'Biblioteca', 
      images: [IMG6, IMG10], 
      description: 'Descripción de la tarjeta 6', 
      medidas: "10 x 15 x20"
    },
    { title: 'Escritorio PC', 
      images: [IMG, IMG8], 
      description: 'Descripción de la tarjeta 7', 
      medidas: "10 x 15 x20"
    },
    { title: 'Sillon con cama Marinera', 
      images: [IMG4, IMG5], 
      description: 'Descripción de la tarjeta 7', 
      medidas: "10 x 15 x20"
    },
    { title: 'Secarropas', 
      images: [IMG5, IMG5], 
      description: 'Descripción de la tarjeta 7', 
      medidas: "10 x 15 x20"
    },
    { title: 'Maniquies', 
      images: [IMG6, IMG5], 
      description: 'Descripción de la tarjeta 7', 
      medidas: "10 x 15 x20"
    },
    { title: 'Cortinas Blackout', 
      images: [IMG3, IMG5], 
      description: 'Descripción de la tarjeta 7', 
      medidas: "10 x 15 x20"
    },
    { title: 'Mesa ratona / Cajon de colmenas', 
      images: [IMG4, IMG5], 
      description: 'Descripción de la tarjeta 7', 
      medidas: "10 x 15 x20"
    },
    { title: 'Cuadro Azuka Evangelion 3.0', 
      images: [IMG3, IMG5], 
      description: 'Descripción de la tarjeta 7', 
      medidas: "10 x 15 x20"
    }
  ];

  return (
    <div>
      <h1 className="title">Cosillas:</h1>
      <div className="productos">
        {products.map((product, index) => (
          <div key={index} className="producto" onClick={() => openModal(product)}>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <h3>{product.medidas}</h3>
            <img className="producto_img" src={product.images[0]} alt={product.title}/>
          </div>
        ))}
      </div>
          
      {selectedProduct && (
        <LargeImageModal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
}
