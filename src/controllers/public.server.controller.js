const express = require('express');

const router = express.Router();

router.use(express.static(`${process.cwd()}/src/app`));


module.exports = router;