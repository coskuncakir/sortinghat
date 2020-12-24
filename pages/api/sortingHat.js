export default (req, res) => {
  const houses = ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"];
  const random = Math.floor(Math.random() * houses.length);
  res.statusCode = 200;
  res.json({ house: houses[random] });
};
