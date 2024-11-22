import React, { useState } from 'react';
import './App.css'; // Assurez-vous d'importer le fichier CSS

function App() {
  const [role, setRole] = useState(null);
  const [showRoleSelection, setShowRoleSelection] = useState(false);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setShowRoleSelection(false);  // Fermer la fenêtre de sélection après le choix
  };

  return (
    <div className="background-container">
      <div className="content">
        <h1 className="hotel-title">Javascript Luxury Hotel</h1> {/* Titre en haut */}
        
        {role === null && !showRoleSelection ? (
          <div className="login-button">
            <button className="role-button" onClick={() => setShowRoleSelection(true)}>Connexion</button>
          </div>
        ) : showRoleSelection ? (
          <div className="role-selection">
            <p className="question-text">Vous êtes ?</p>
            <button className="role-button" onClick={() => handleRoleSelection('client')}>Client</button>
            <button className="role-button" onClick={() => handleRoleSelection('employe')}>Employé</button>
          </div>
        ) : (
          <div className="role-greeting">
            <h2>Bienvenue, {role === 'client' ? 'Client' : 'Employé'} !</h2>
            {role === 'client' && <p>Accédez à votre espace client ici.</p>}
            {role === 'employe' && <p>Accédez à votre espace employé ici.</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
