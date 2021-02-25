const {Router} = require('express')

const router = new Router()

router.get('/', (req,res) => {
    res.send('CLIENT! CODENINJAH WAS HERE, B*TCHES!!! SO WHATS UP!!!!')
})

module.exports = router