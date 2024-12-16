import { createContext, useState } from "react";

// Création d'un contexte pour gérer l'authentification
export const AuthContext = createContext(null);

// Fournisseur du contexte d'authentification
export const AuthProvider = ({ children }) => {
    // Récupération des informations utilisateur (si elles existent) dans le localStorage
    const userInfo = localStorage.getItem('userInfo');
    
    // Initialisation de l'état "user" avec les informations récupérées ou null si non défini
    const [user, setUser] = useState(userInfo);

    // Fonction de connexion : met à jour l'utilisateur dans l'état
    const login = (user) => {
        setUser(user); // Mise à jour de l'utilisateur
    };

    // Fonction de déconnexion : supprime l'utilisateur du localStorage et réinitialise l'état
    const logout = () => {
        localStorage.removeItem('userInfo'); // Supprime les infos utilisateur du localStorage
        setUser(null); // Réinitialise l'utilisateur à null
    };

    // Fournit les données et fonctions d'authentification à toute l'application via un contexte
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children} {/* Affiche les composants enfants */}
        </AuthContext.Provider>
    );
};
