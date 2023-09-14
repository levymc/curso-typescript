import { Game, createGame } from "../protocols/game-protocol";
import { db } from "../database/database.connection.ts";

const games: Game[] = [];

async function getGames(): Promise<Game[]> {
  try {
    const response = await db.query(`
      SELECT * FROM public.games
    `);

    const games: Game[] = response.rows;

    return games;
  } catch (err) {
    throw Error(err);
  }
}


async function createGame(newGame: createGame): Promise<Game> {
  try {
    const query = `
      INSERT INTO public.games (title, platform)
      VALUES ($1, $2)
      RETURNING id, title, platform
    `;

    const values = [newGame.title, newGame.platform];

    const response = await db.query(query, values);

    if (response.rows.length === 1) {
      const createdGame: Game = response.rows[0];
      return createdGame;
    } else {
      throw new Error('Falha ao criar o jogo.');
    }
  } catch (err) {
    throw new Error(err);
  }
}

function getGameByTitleAndPlatform(game: Game) {
  return games.find(({ title, platform }) => {
    return game.title === title && game.platform === platform;
  })
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;