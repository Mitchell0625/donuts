module.exports = {
  updateUser: (req, res) => {
    const dbInstance = req.app.get("db");

    const { name, email, address, city, st, zip } = req.body;

    dbInstance
      .update_user([req.user.id, name, email, address, city, st, zip])
      .then(user => {
        res.status(200).json(user[0]);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
