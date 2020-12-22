export default (req, res) => {
  const houses = ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"];
  const random = Math.floor(Math.random() * 4);
  res.statusCode = 200;
  res.json({ house: houses[random] });
};
