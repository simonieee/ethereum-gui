var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");
var { spawn, exec } = require("child_process");

// genesis 파일 저장 경로
const fileDir = path.join(__dirname, "../ethereum");
console.log(fileDir);
// 디렉토리 체크 & 생성
const makeFolder = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

router.post("/", (req, res, next) => {
  try {
    const command =
      "geth account new --datadir ethereum --password ./ethereum/password";
    // 디렉토리 유무 검사 && 없으면 생성
    makeFolder(fileDir);
    // password 파일 생성
    fs.writeFile(fileDir + "/password", JSON.stringify(req.body.pwd), (err) => {
      if (err) {
        console.log(err);
      }
    });
    // 계정 생성
    exec(command, (err, stdout, stderr) => {
      console.log("stdout: ", stdout);
      console.log("stderr", stderr);
      res.status(200).json({ data: stdout });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/run", (req, res, next) => {
  try {
    const command =
      "geth --datadir ethereum --networkid 9302 --http --http.addr '0.0.0.0' --http.port 8545 --port 30303 --http.corsdomain '*' --http.api 'db,eth,net,web3,personal,miner,admin,debug,shh,txpool' --nodiscover --ipcdisable &";
    exec(command, (err, stdout, stderr) => {
      if (stderr) {
        console.log("stderr", stderr);
        res.status(500).json({ sussess: false });
      } else {
        console.log("stdout: ", stdout);
        res.status(200).json({ sussess: true });
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = router;
