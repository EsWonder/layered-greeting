const userData = require('../data/userData');

// Procesamiento lógico del dato
exports.getSaludo = () => {
  const user = userData.getUser();
  return `Hola, ${user.nombre}. Tienes ${user.edad} años.`;
};
