var express = require("express");
var app = express();
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});

//DEFAULT ROUTE
app.get("", (req, res, next) => {
    var characters = [`Keqing`,`Benny Boi`,`Zhongli`,`Ganyu`,`Diluc`,`Paimon`,` Albedo`,`Aloy`,`Barbara`,`Beidou`,`Xiao`,`Jean`,`Lisa`,`Mona`,`Noelle`,`Qiqi`,`Sayu`,`Sucrose`,`Venti`];
    var response = characters[Math.floor(Math.random() * characters.length)];
    res.send(response);
});
