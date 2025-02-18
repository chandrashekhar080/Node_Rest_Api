const router= require('express').Router();

router.get("/", (req,res)=>{
    res.send("Hey its User Routes");
});

module.exports = router;