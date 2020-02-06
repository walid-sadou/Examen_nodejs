const db = require('../models');

//Create a sock
exports.createBike = async (req, res) => {
    try {
        let newSock = await db.Bike.create(req.body);
        console.log(newSock);
        return res.status(200).json({
            message: 'New bike created !',
            newSock
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! could not create your bike',
            error: err
        });
    }
};

//Get all socks
exports.getAllBikes = async (req, res) => {
    try {
        let socks = await db.Bike.find();
        return res.status(200).json(socks);
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not find your bikes',
            error: err
        });
    }
};

exports.readFiltered= async (req, res) => {
    try {
        let bikesByBrand = await db.Bike.find({"brand": req.query.brand}, "name realeaseDate brand");
        return res.status(200).json(bikesByBrand.sort("realeaseDate"));
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not find your bikes',
            error: err
        });
    }
};

//Get one sock
exports.getOneBike = async (req, res) => {
    try {
        let thisSock = await db.Bike.findById(req.params.id);
        return res.status(200).json(thisSock);
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not find your bike',
            error: err
        });
    }
};

//Update one sock
exports.updateOneBike = async (req, res) => {
    try {
        let sockToUpdate = await db.Bike.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
        );
        return res.status(200).json({
            message: 'Bike updated !',
            sockToUpdate
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not update your bike',
            error: err
        });
    }
};
/*
exports.getTrueBikes = async (req, res) => {
    try {
        trueElectric = await db.Bike.find({isElectric})
    }
};
*/
//Delete one sock
exports.deleteOneBike = async (req, res) => {
    try {
        await db.Bike.findByIdAndRemove(req.params.id);
        return res.status(200).json('Bike deleted !');
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not delete your bike',
            error: err
        });
    }
};