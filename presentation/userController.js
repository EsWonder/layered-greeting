const userService = require('../service/userService');

// Lógica de presentación
exports.saludar = () => {
  const saludo = userService.getSaludo();
  console.log(saludo);
};
