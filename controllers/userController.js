const jwt = require('jsonwebtoken');
require('dotenv/config')
const bcrypt = require('bcryptjs');

const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword })
        await user.save();
        res.json(user);
    } catch (error) {
        res.json({ message : error.message });
    }

};