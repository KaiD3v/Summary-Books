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

router.post('/postbook', async(req, res) => {
  
  const {title, author, summary ,imageUrl} = req.body

  try {
    const result = await pool.query(`INSERT INTO books (title, author, summary, imageurl) VALUES ($1, $2, $3, $4) RETURNING *`,
    [title, author, summary, imageUrl])
    res.json(result.rows[0])
  } catch (err) {
    console.error(`Ocorreu um erro ao postar livro: ${err}`)
    res.status(500).send("Erro no servidor");
  }
})

module.exports = router;