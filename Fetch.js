fetch('https://swapi.dev/api/planets/?format=json')
  .then(response => response.json())
  .then(data => {
    // Process the data and generate HTML for planet cards
    const planets = data.results;
    planets.forEach(planet => {
      // Extract relevant information like name, climate, population, terrain
      const { name, climate, population, terrain, residents } = planet;
      // Generate HTML for planet card
      const planetCardHTML = `
        <div class="planet-card">
          <h2>${name}</h2>
          <p><strong>Climate:</strong> ${climate}</p>
          <p><strong>Population:</strong> ${population}</p>
          <p><strong>Terrain:</strong> ${terrain}</p>
          <div class="residents-list" id="residents-${name.replace(/\s/g, '-')}">
            <p>Loading residents...</p>
          </div>
        </div>
      `;
      document.getElementById('planets-container').innerHTML += planetCardHTML;

      // Fetch and display residents for each planet
      fetchResidents(residents, name);
    });
  })
  .catch(error => console.log(error));
