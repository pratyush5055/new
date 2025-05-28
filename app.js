const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Node model (simple example)
class Node {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }
}

app.use(express.static('public'));

app.get('/', (req, res) => {
  const node = new Node(1, 'Hello World');
  res.send(node.value);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
