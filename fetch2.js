function fetchResidents(residentUrls, planetName) {
    Promise.all(residentUrls.map(url => fetch(url).then(response => response.json())))
      .then(residents => {
        const residentsList = document.getElementById(`residents-${planetName.replace(/\s/g, '-')}`);
        residentsList.innerHTML = ''; // Clear the loading message
        residents.forEach(resident => {
          // Extract relevant resident details like name, height, mass, gender
          const { name, height, mass, gender } = resident;
          // Generate HTML for resident details
          const residentHTML = `
            <div class="resident">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Height:</strong> ${height}</p>
              <p><strong>Mass:</strong> ${mass}</p>
              <p><strong>Gender:</strong> ${gender}</p>
            </div>
          `;
          residentsList.innerHTML += residentHTML;
        });
      })
      .catch(error => console.log(error));
  }
  