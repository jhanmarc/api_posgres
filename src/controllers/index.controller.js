const getHola = async(req, res) => {

    res.status(200).json({
        message: 'Hola api restFull node js and posgrest'
    })
}

module.exports = {
    getHola,
}