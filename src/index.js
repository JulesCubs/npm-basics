const messages = ["Julián", "David", "Paula", "Stella", "Andrea"];

const randomMsg = () => {
  const msgs = messages[Math.floor(Math.random() * messages.length)];

  console.log("Nombre: ", msgs);
};

module.exports = { randomMsg };
