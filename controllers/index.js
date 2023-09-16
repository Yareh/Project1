const newFunction = (req, res, next) => {
    res.json('Juan Quintana');
};

const secondFunction = (req, res, next) => {
    res.json('is very very cool!');
};

module.exports = { newFunction, secondFunction };