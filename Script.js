const gamesListContainer = document.getElementById('mmorpg-games-list');

async function displayMMORPGGames() {
  try {
    const response = await fetch('https://www.freetogame.com/api/games?category=MMORPG');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data && data.length > 0) {
      data.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
          <img src="${game.thumbnail}" alt="${game.title}">
          <div class="game-info">
            <h3>${game.title}</h3>
            <p>Genre: ${game.genre}</p>
            <p>Platform: ${game.platform}</p>
            <p>Publisher: ${game.publisher}</p>
            <p><a href="${game.game_url}" target="_blank">Play Now</a></p>
          </div>
        `;
        gamesListContainer.appendChild(gameCard);
      });
    } else {
      gamesListContainer.innerHTML = '<p>Could not fetch MMORPG games.</p>';
    }
  } catch (error) {
    console.error('Error fetching MMORPG games:', error);
    gamesListContainer.innerHTML = '<p>Error fetching MMORPG games.</p>';
  }
}

displayMMORPGGames();
