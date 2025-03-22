// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Define the URL for fetching random dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    
    // Fetch the data from the API
    fetch(imgUrl)
    .then(response => {
        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Failed to fetch dog images: Network response was not OK');
        }
        // Parse the JSON
        return response.json();
    })
    .then(data => {
        // Extract the array of image URLs from the data
        const imageURLs = data.message;

        // Get the container where images will be displayed
        const imgContainer = document.getElementById('dog-image-container');

        // Iterate over each image URL
        imageURLs.forEach(url => {
            // Create a new image element
            const img = document.createElement('img');

            // Set the image source URL
            img.src = url;

            // Some styling for the images
            img.style.width = '200px';
            img.style.height = 'auto';

            // Append the image to the container
            imgContainer.appendChild(img);
        });
    })
    .catch(error => {
        // Log any errors that occurred during fetch
        console.error('There was a problem with fetching dog images:', error);
    });

    // Define the URL for fetching dog breeds
    const breedURL = "https://dog.ceo/api/breeds/list/all";

    // Fetch the data from the API
    fetch(breedURL)
    .then(response => {
        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Failed to fetch dog breeds: Network response was not OK');
        }
        // Parse JSON
        return response.json();
    })
    .then(data => {
        // Extract the object of breeds from the data
        const breeds = data.message;

        // Get the container where breeds will be displayed
        const breedList = document.getElementById('dog-breeds');

        // Array to store breed list items
        const breedItems = [];

        // Iterate over each breed
        for (let breed in breeds) {
            // Create a new list item element
            const li = document.createElement('li');

            // Set the text content to the breed name
            li.textContent = breed;

            // Append the list item to the breed list
            breedList.appendChild(li);

            // Add breed items array for filtering
            breedItems.push({ breed, li });

            // Add an event listener to change the font color on click
            li.addEventListener('click', () => {
                li.style.color = 'firebrick';
            });
        }

        // Add event listener to the dropdown menu
        const breedDropDown = document.getElementById('breed-dropdown');
        breedDropDown.addEventListener('change', (event) => {
            // Get the selected letter from the dropdown
            const selectedLetter = event.target.value;

            // Filter the breeds based on the selected letter
            breedItems.forEach(item => {
                const { breed, li } = item;
                if (breed.startsWith(selectedLetter)) {
                    li.style.display = ''; // Show breed
                } else {
                    li.style.display = 'none'; // Hide breed
                }
            });
        });
    })
    .catch(error => {
        // Log any errors that occurred during fetch
        console.error('There was a problem with fetching dog breeds:', error);
    });
});
