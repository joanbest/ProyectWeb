import React from 'react';
import "./CardDragon.css";

const CardDragon = ({ user, showDetails = false }) => {
  if (!user) return null;

  return (
    <div className="Container">
      <div className="container-card">
        <div className="card-father">
          <div className="card">
            <div className="card-front">
              <div>
                <div className="container-img">
                  <img className="imagen" src={user.image} alt={user.name} />
                </div>
                <div className="text">
                  <h3>
                    {user.name}
                    <br />
                    {user.race}
                  </h3>
                  <p>
      {showDetails && (
        <>
          <span>Genero:</span> {user.gender}
          <br/>
          <span>Afiliación:</span> {user.affiliation}
          <br/>
          <span>Descripcion:</span> {user.description}
          
          {user.transformations?.length > 0 ? (
        <>
          <span></span>
          
        </>
      ) : (
        <span>Este personaje no tiene transformaciones registradas.</span>
      )}

        </>
      )}
      </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDragon;