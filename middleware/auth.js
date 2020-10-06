const jwt = require('jsonwebtoken');
const config = require('config');

//next is required to move onto next middleware func
module.exports = function(req, res, next) {
	// Get token from header
	const token = req.header('x-auth-token');

	// Check if not token
	// 401 - unauthorized
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	// if there is a token -> verify token
	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};
