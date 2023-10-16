const client = require('./client');
const util = require('util');

// GET - /api/video-games - get all video games
async function getAllVideoGames() {
    try {
        const { rows: videoGames } = await client.query("SELECT * FROM videoGames");
        return videoGames;
    } catch (error) {
        throw new Error("Make sure you have replaced the REPLACE_ME placeholder.")
    }
}

// GET - /api/video-games/:id - get a single video game by id
async function getVideoGameById(id) {
    try {
        const { rows: [videoGame] } = await client.query(`
            SELECT * FROM videoGames
            WHERE id = $1;
        `, [id]);
        return videoGame;
    } catch (error) {
        throw error;
    }
}

// POST - /api/video-games - create a new video game
async function createVideoGame(newGame) {
    // LOGIC GOES HERE
    try {
        const name = newGame.name
        const desc = newGame.description
        const sql = `INSERT INTO videoGames (name, description) VALUES ($1, $2)`
        client.query(sql, [name, desc])
    }
    catch (err) {
        console.log(err)
    }
}

// PUT - /api/video-games/:id - update a single video game by id
async function updateVideoGame(id, { name, desc }) {
    // LOGIC GOES HERE
    try {
        const sql = "UPDATE videoGames SET name = $2, description = $3 WHERE id = $1";
        client.query(sql, [id, name, desc])
    }
    catch (err) {
        console.log(err)
    }
}

// DELETE - /api/video-games/:id - delete a single video game by id
async function deleteVideoGame(id) {
    // LOGIC GOES HERE
    try {
        const sql = "DELETE FROM videoGames where id = $1";
        client.query(sql, [id])
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}