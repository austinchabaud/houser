module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_houses().then(houses => {
      res.status(200).send(houses);
    });
  },
  addHouse: (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip } = req.body;
    db.add_house([name, address, city, state, zip]).then(house => {
      res.status(200).send(house);
    });
  },
  deleteHouse: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_house(id).then(() => {
      res.status.send(200);
    });
  }
};
