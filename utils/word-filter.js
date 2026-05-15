/**
 * Utilitário para filtragem de palavras ofensivas e termos inadequados.
 */

// Lista de termos proibidos (pode ser expandida)
const forbiddenWords = [
    // Baixo calão comum
    'porra', 'caralho', 'foda', 'buceta', 'pau', 'cu', 'merda', 'puta', 'piru', 'cacete',
    // Termos discriminatórios e ofensivos
    'viado', 'bicha', 'traveco', 'preto', 'macaco', 'arrombado', 'desgraçado', 'imbecil', 'idiota',
    // Termos específicos detectados anteriormente como inadequados para o contexto
    'cura gay', 'jalin rabei', 'chupa', 'mamada'
];

/**
 * Verifica se um texto contém alguma palavra ofensiva.
 * @param {string} text - O texto a ser verificado.
 * @returns {boolean} - True se contiver termos proibidos, false caso contrário.
 */
function hasOffensiveWords(text) {
    if (!text || typeof text !== 'string') return false;
    
    const normalizedText = text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Remove acentos para burlar variações
    
    return forbiddenWords.some(word => {
        const normalizedWord = word.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
            
        // Melhoria: Usar Regex com limites de palavra (\b) para evitar falsos positivos
        // Exemplo: 'cu' não deve bloquear 'cuidado' ou 'curtir'
        const regex = new RegExp(`\\b${normalizedWord}\\b`, 'i');
        return regex.test(normalizedText);
    });
}

/**
 * Sanitiza um texto substituindo palavras ofensivas por asteriscos (opcional).
 * @param {string} text 
 */
function sanitizeText(text) {
    if (!text || typeof text !== 'string') return text;
    let sanitized = text;
    
    forbiddenWords.forEach(word => {
        const regex = new RegExp(word, 'gi');
        sanitized = sanitized.replace(regex, '***');
    });
    
    return sanitized;
}

module.exports = {
    hasOffensiveWords,
    sanitizeText,
    forbiddenWords
};
