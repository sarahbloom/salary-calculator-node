
let express = require('express');
let app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log('app is running on port 5000');
})

app.use(express.static('server/public'));