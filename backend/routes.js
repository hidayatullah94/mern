const akses = require("express").Router();
const BukuModel = require("./model.js");
// route home
akses.route("/").get((req, res) => {
  BukuModel.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message));
});

//route add
akses.route("/add").post((req, res) => {
  BukuModel.create(req.body)
    .then((createbook) => res.status(200).json(createbook))
    .catch((error) => res.status(400).json(error.message));
});

// route update

akses.route("/update/:id").put((req, res) => {
  BukuModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatebook) => res.status(200).json(updatebook))
    .catch((error) => res.status(400).json(error.message));
});

//route delete

akses.route("/delete/:id").delete((req, res) => {
  BukuModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Buku dihapus"))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = akses;
