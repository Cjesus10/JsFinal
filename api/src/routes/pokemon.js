const app = require("express")
const router = app.Router()

const pokemonSchema = require("../models/pokemon")


router.get("/pokemon", (req, res) => {
  pokemonSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})


router.post("/pokemon", (req, res) => {
  const pokemon = pokemonSchema(req.body)
  pokemon.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

router.delete("/pokemon/:id", (req, res) => {
  const { id } = req.params
  pokemonSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router