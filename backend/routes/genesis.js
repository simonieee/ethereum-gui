var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

// genesis 파일 저장 경로
const fileDir = path.join(__dirname, "../ethereum");

// 디렉토리 체크 & 생성
const makeFolder = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

/**
 * @method post
 * genesis 파일 생성
 */
router.post("/", (req, res, next) => {
  const title = "genesis.json";
  const genesis = req.body.genesis;
  console.log(JSON.stringify(genesis));
  makeFolder(fileDir);
  fs.writeFile(fileDir + "/" + title, JSON.stringify(genesis), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send({ sussess: false });
    }
  });
  console.log(req.body.genesis);
  res.status(200).json({ sussess: true });
});

module.exports = router;
