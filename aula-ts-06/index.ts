const game = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const meuJogo = {
    id: 2,
    platform: {
      id: 2,
      name: "Windows"
    },
    title: "Worms",
    publisher: "Sei la",
    launch: "2023-09-12"
  };

const games: object[] = [game];

function play(game: { id: number
    platform: {
        id: number
        name: string
    };
    title: string
    publisher: string
    launch: string}){
        
    console.log(game);
}

play(meuJogo)