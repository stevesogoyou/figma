// src/components/SearchBar.jsx
import { useState } from 'react';
import { FaSearch, FaMicrophone, FaTimes } from 'react-icons/fa';
import './SearchBar.css'; // Importez le fichier CSS

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [showButtons, setShowButtons] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Afficher les boutons si la saisie commence par "lampe"
        setShowButtons(value.toLowerCase().startsWith('lampe'));
    };

    const handleClearInput = () => {
        setInputValue(''); // Vide la barre de recherche
        setShowButtons(false); // Masque les boutons
    };

    return (
        <div style={styles.searchContainer}>
            <div style={styles.searchBar}>
                <FaSearch style={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Recherche"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={styles.input}
                    className="input" // Appliquez la classe CSS
                />
                {/* Affiche l'icône de croix si l'input n'est pas vide, sinon l'icône du micro */}
                {inputValue ? (
                    <FaTimes style={styles.clearIcon} onClick={handleClearInput} />
                ) : (
                    <FaMicrophone style={styles.microphoneIcon} />
                )}
            </div>

            {/* Afficher les boutons uniquement si showButtons est true */}
            {showButtons ? (
                <div style={styles.buttonContainer}>
                    <button style={styles.button}>Lampe de bureau</button>
                    <button style={styles.button}>Lampe artisanale</button>
                    <button style={styles.button}>Lampe fait à la main</button>
                    <button style={styles.button}>Lampe de bureau</button>
                </div>
            ) : (
                // Afficher un message si l'utilisateur n'a pas encore tapé "lampe"
                <p style={styles.message}>Veuillez écrire "lampe" par exemple pour voir les propositions.</p>
            )}
        </div>
    );
};

const styles = {
    searchContainer: {
        display: 'flex',
        flexDirection: 'column', // Aligner les éléments verticalement
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#D1814A',
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '24px',
        padding: '8px 16px',
        width: '400px', // Largeur réduite
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px', // Espace entre la barre de recherche et les boutons
    },
    searchIcon: {
        marginRight: '8px',
        color: '#9AA0A6',
    },
    input: {
        flex: 1,
        border: 'none',
        outline: 'none',
        fontSize: '16px',
        color: '#000', // Couleur du texte saisi (noir)
        backgroundColor: 'transparent', // Fond transparent pour l'input
    },
    microphoneIcon: {
        marginLeft: '8px',
        color: '#9AA0A6',
        cursor: 'pointer', // Change le curseur en pointeur
    },
    clearIcon: {
        marginLeft: '8px',
        color: '#9AA0A6',
        cursor: 'pointer', // Change le curseur en pointeur
    },
    buttonContainer: {
        display: 'flex',
        gap: '10px', // Espace entre les boutons
    },
    button: {
        backgroundColor: '#F2EE6F', // Couleur jaune
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer', // Change le curseur en pointeur
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Ombre légère
        color: '#000', // Couleur du texte (noir)
    },
    message: {
        color: '#fff', // Couleur du texte (blanc)
        fontSize: '16px',
        marginTop: '10px',
    },
};

export default SearchBar;