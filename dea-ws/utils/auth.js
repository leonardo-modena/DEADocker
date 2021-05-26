function authenticate(req, res, next) {
    const token = req.headers['authorization']
  
    if (token == null) return res.sendStatus(401)
  
    if (token == process.env.TOKEN)
        next()
  }

module.exports = authenticate;