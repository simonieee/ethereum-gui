var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");
var exec = require("child_process").exec;

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
  console.log(req.body.cmd);
  // const command = req.body.cmd + " && " + "lsof -i :30303";
  makeFolder(fileDir);
  exec(req.body.cmd, (err, stdout, stderr) => {
    console.log("stdout: ", stdout);
    console.log("stderr", stderr);
    res.status(200).json({ title: "Express", data: stdout });
  });
});

module.exports = router;
