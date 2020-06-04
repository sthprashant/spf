 var exec = require("child_process").exec;
const child = exec("cd .. && cd .. && cd photos && ls && python3 spf_fr.py", function(
    error,
    stdout,
    stderr
  ) {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
