// for iframe stuff? confusin
function createIframeFile(game) {
  var iframe = document.createElement("iframe");
  iframe.src = game.link;
  iframe.classList.add("game-iframe");
  document.body.appendChild(iframe);
}

/*
fetch('games.json')
  .then(response => response.json())
  .then(data => {
    const gamesContainer = document.querySelector('.games');
    const searchInput = document.querySelector('.search-input');

    // Render the initial grid of images
    renderGrid(data);

    // Add an event listener to the search input that filters the grid as the user types
    searchInput.addEventListener('input', event => {
      const searchQuery = event.target.value.toLowerCase();
      const filteredData = data.filter(item => item.title.toLowerCase().includes(searchQuery));
      renderGrid(filteredData);
    });

    function renderGrid(items) {
      // Clear the current contents of the games container
      gamesContainer.innerHTML = '';


      // Render the grid of images
      items.forEach(item => {
        const game = document.createElement('div');
        game.classList.add('game');
        game.innerHTML = `<a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.title}"></a><h2><a href="${item.link}" target="_blank">${item.title}</a></h2>`;
        gamesContainer.appendChild(game);
      });
    }
  });
  */
  fetch('/js/json/games.json')
  .then(response => response.json())
  .then(data => {
    const gamesContainer = document.querySelector('.games');
    const searchInput = document.querySelector('.search-input');

    // Render the initial grid of images
    renderGrid(data);

    // Add an event listener to the search input that filters the grid as the user types
    searchInput.addEventListener('input', event => {
      const searchQuery = event.target.value.toLowerCase();
      const filteredData = data.filter(item => item.title.toLowerCase().includes(searchQuery));
      if (filteredData.length === 0) {
        // Display message when there are no matching search results
        gamesContainer.innerHTML = '<center><p class="no-results-message">No results found. Make sure to double check spelling. Join the <a class="hyperlink" href="discord.gg">Discord server</a> to request a game.</p></center>';
      } else {
        // Render the grid of images for the matching search results
        renderGrid(filteredData);
      }
    });

    function renderGrid(items) {
      // Clear the current contents of the games container
      gamesContainer.innerHTML = '';

      // Render the grid of images
      items.forEach(item => {
        const game = document.createElement('div');
        game.classList.add('game');
        game.innerHTML = `<a href="#" onclick="createIframeFile('${game.link}')"><img src="${item.image}" alt="${item.title}"></a><h2><a href="${item.link}">${item.title}</a></h2>`;
        gamesContainer.appendChild(game);
      });
    }
  });


