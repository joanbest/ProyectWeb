// import React from "react";
// import './Transformations.css'

// const Transformations = ({ user }) => {
//   if (!user) return null;

//   return (
//     <div className="Container">
//       <div className="container-card">
//         <div className="card-father">
//           <div className="card">
//             <div className="card-front">
//               <div>
//                 <div className="container-img">
//                   <img className="imagen" src={user.image} alt={user.name} />
//                 </div>
//                 <div className="text">
//                   <h3>
//                     {user.name}
                    
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transformations;

// src/Components/TransformationCard/TransformationCard.jsx
// src/Components/TransformationCard/TransformationCard.jsx
import React from 'react';
import './Transformations.css';

const Transformations = ({ transformation }) => {
  if (!transformation) return null;

  return (
    <div className="container-card">
      <div className="card-father">
        <div className="card">
          <div className="card-front">
            <div>
              <div className="container-img">
                <img
                  className="imagen"
                  src={transformation.image }
                  alt={transformation.name}
                />
              </div>
              <div className="text">
                <h3>{transformation.name}</h3>
                <p><span>KI:</span> {transformation.ki}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transformations;
