import React, { useContext } from 'react';
import { AuthContext } from '../backend/context/Auth'; // Importation du contexte d'authentification
import { Navigate } from 'react-router-dom'; // Importation de "Navigate" pour rediriger les utilisateurs

// Composant RequireAuth
const RequireAuth = ({ children }) => {
    // Récupère les données utilisateur du contexte AuthContext
    const { user } = useContext(AuthContext);

    // Si l'utilisateur n'est pas authentifié (user est null), redirige vers la page de connexion
    if (!user) {
        return <Navigate to="/admin/login" />;
    }

    // Si l'utilisateur est authentifié, affiche les composants enfants
    return children;
};

export default RequireAuth;

