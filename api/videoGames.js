const express = require('express');
const router = express.Router();

const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');

// GET - /api/video-games - get all video games
router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (error) {
        next(error);
    }
});

// GET - /api/video-games/:id - get a single video game by id
router.get('/:id', async (req, res, next) => {
    try {
        const videoGame = await getVideoGameById(req.params.id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
router.post('/', async (req, res, next) => {
    // LOGIC GOES HERE 
    // const videoGame = await createVideoGame(req.body);
    try {
        const videoGame = req.body.videoGame;
        const desc = req.body.desc;
        const data = {
            name: videoGame,
            description: desc
        }
        const newVideoGame = createVideoGame(data)
        res.send(newVideoGame)
    }
    catch (err) {
        console.log(err)
    }
});


// PUT - /api/video-games/:id - update a single video game by id
router.put('/:id', async (req, res, next) => {
    // LOGIC GOES HERE 
    const data = {
        id: req.params.id,
        name: req.body.name,
        desc: req.body.desc
    }
    const videoGame = await updateVideoGame(data.id, data)
    res.send(videoGame)
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/:id', async (req, res, next) => {
    // LOGIC GOES HERE
    const id = req.params.id;
    const videoGame = deleteVideoGame(id)
    res.send(videoGame)
});

module.exports = router;
