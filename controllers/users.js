const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

exports.signup = (req, res, next) => {
    if (!req.body.password || !req.body.email)
        return res.status(401).json({ message: 'Missing params.' });
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                admin: false,
            });
            user.save()
                .then(() => res.status(201).json({ message: 'User created !' }))
                .catch(error => res.status(401).json({ error }));
        })
        .catch(error => res.status(401).json({ error }));
  };

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User not found.' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Wrong password.' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        email: user.email,
                        admin: user.admin,
                        token: jwt.sign(
                            { userId: user._id },
                            'greengroup_secret_token_2l|.*8pou]X-m32r',
                        )
                    });
                })
                .catch(error => res.status(401).json({ error }));
        })
        .catch(error => res.status(401).json({ error }));
};
