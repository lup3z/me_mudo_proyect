import React, { useState, useEffect } from 'react';

const LargeImageModal = ({ product, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>
          <span className="material-symbols-outlined">cancel</span>
        </span>
        <div className="image-gallery">
          <div className="image-container">
            <button className="navigation-button" onClick={goToPreviousImage}>&lt;</button>
            <img src={product.images[currentImageIndex]} alt={`Imagen ${currentImageIndex}`} className="gallery-image" />
            <button className="navigation-button" onClick={goToNextImage}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeImageModal;
