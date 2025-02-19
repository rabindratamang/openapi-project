module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send({ error: err?.message || "Something went wrong!" });
  };