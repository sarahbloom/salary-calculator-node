
let express = require('express');
let app = express();
const PORT = 5005;

app.listen(PORT, () => {
    console.log('app is running on port 5005');
})

app.use(express.static('server/public'));