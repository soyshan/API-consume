document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const activityElement = document.getElementById('activity');
    const typeElement = document.getElementById('type');
    const priceElement = document.getElementById('price');
    const participantsElement = document.getElementById('participants');
    const button = document.getElementById('button');

    async function fetchData() {
        try {
            // Para hacer visible el contenedor
            container.classList.replace('invisible', 'visible');
            button.classList.add('visible');
            // Esto es para la solicitud a la API
            const response = await fetch('https://www.boredapi.com/api/activity/');
            const data = await response.json();

            // Para agregar el texto en las P que tengo en el html
            activityElement.textContent = `Activity: ${data.activity || 'N/A'}`;
            typeElement.textContent = `Type: ${data.type || 'N/A'}`;
            priceElement.textContent = `Price: ${data.price || 'Up to you'}`;
            participantsElement.textContent = `Participants ${data.participants || 'N/A'}`;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Se usa un addEventlistener al botón para llamar a la función fetchData al hacer clic
    button.addEventListener('click', fetchData);
});

