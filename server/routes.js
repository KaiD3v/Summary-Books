const pool = require("./dbconifg");
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

router.get("/books/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [
      bookId,
    ]);

    if (result.rows.length > 0) {
      const bookDetails = result.rows[0];
      res.json(bookDetails);
    } else {
      res.status(404).json({ message: "Livro não encontrado" });
    }
  } catch (err) {
    console.error(`Erro ao buscar detalhes do livro: ${err}`);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

router.delete("/books/:id", async (req, res) => {
  const bookId = req.params.id;
  try {
    await pool.query(`DELETE FROM books WHERE id = $1`, [bookId]);
    res.json({ message: "Livro deletado com sucesso!" });
  } catch (err) {
    console.error(`Erro ao deletar livro ${err}`);
    res.status(500).send("Erro no servidor");
  }
});

router.post("/postbook", async (req, res) => {
  const { title, author, summary, imageUrl } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO books (title, author, summary, imageurl) VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, author, summary, imageUrl]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(`Ocorreu um erro ao postar livro: ${err}`);
    res.status(500).send("Erro no servidor");
  }
});

router.put("/books/updatebook/:id", async (req, res) => {
  const bookId = req.params.id;
  const { title, author, summary, imageUrl } = req.body;

  try {
    const response = await pool.query(
      `UPDATE books SET title = $1, author = $2, summary = $3, imageurl = $4 WHERE id = $5`,
      [title, author, summary, imageUrl, bookId]
    );

    res.json({ message: "Livro atualizado com sucesso!" });
  } catch (err) {
    console.error(`Ocorreu um erro ao editar livro: ${err}`);
    res.status(500).send("Erro no servidor");
  }
});


module.exports = router;
