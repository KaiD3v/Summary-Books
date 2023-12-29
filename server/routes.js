const pool = require('./dbconifg')
const express = require("express");
const router = express.Router();

router.get("/books", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM books`);
    res.json(result.rows);
  } catch (err) {
    console.error(`Houve um erro ao consultar livros: ${err}`);
    res.status(500).send("Erro no servidor");
  }
});

module.exports = router;