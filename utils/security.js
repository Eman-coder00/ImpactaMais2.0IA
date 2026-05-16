const crypto = require('crypto');

/**
 * Gera uma chave de recuperação única e aleatória no formato IMP-XXXX-XXXX
 * @returns {string}
 */
function generateRecoveryKey() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Evitando caracteres ambíguos como 0, O, 1, I
    let part1 = '';
    let part2 = '';
    
    for (let i = 0; i < 4; i++) {
        part1 += chars.charAt(Math.floor(Math.random() * chars.length));
        part2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return `IMP-${part1}-${part2}`;
}

module.exports = {
    generateRecoveryKey
};
