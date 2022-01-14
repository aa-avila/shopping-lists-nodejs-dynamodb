const app = require('./app');

const PORT = app.get('port');

app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
