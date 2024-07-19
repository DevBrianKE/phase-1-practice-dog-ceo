//wait for the Dom to be fully loaded before running th script
document.addEventListener('DOMContentLoaded', () => {
    //console.log('DOM fully loaded and parsed')
    //define the url for fetching random 
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    //fetch the data from the API
    //console.log('Fetching data from:', imgUrl)
    fetch(imgUrl)
    .then(response => {
    //console.log('Received response:', response)
        //check if the response is okay
        if(!response.ok) {
            throw new Error ('Network response was not Ok')
            
        }//console.log('Response is ok')
        //parse the json
        return response.json()
    })
    .then(data => {
        //console.log(data)
        //extract the array of image URLs from the data
        const imageURLs = data.message

        //get the container where images will be displayed
        const imgContainer = document.getElementById('dog-image-container')

        //iterate over each image URL
        imageURLs.forEach(url => {
            //create a new image element
            const img = document.createElement('img')

            //set the image source url
            img.src = url

            //some styling for the images
            img.style.width = '200px'
            img.style.height = 'auto'

            //append the image to the container
            imgContainer.appendChild(img)
            
        })
    })
    .catch(error => {
        //log any errors that occurred during fetch
        console.error('There was a problem with fetch operation', error)
    })


    // Define the URL for fetching random dog images
    const breedURL = "https://dog.ceo/api/breeds/list/all"

    //fetch the data from the API
    fetch(breedURL)
    .then(response => {
        //check if repsonse is okay
        if(!response.ok) {
            throw new Error('Network response was not OK')
        }
        //parse JSON
        return response.json()
    })
    .then(data => {
         // Extract the object of breeds from the data
        const breeds = data.message
        //console.log('Fetched Breeds:', breeds)

        //get the container where breeds will be displayed
        const breedList = document.getElementById('dog-breeds')
        //console.log('Breed List Element:', breedList)

        // Array to store breed list items
        const breedItems = []
        //iterate over each breed
        for (let breed in breeds) {
            //create a new list item element
            const li = document.createElement('li')

            //set the text content to the breed name
            li.textContent = breed
            //console.log('Created List Item:', li)

           //append the list to the breed list
           breedList.appendChild(li)

           //add breed items array for filtering
           breedItems.push({breed, li})

           //add an event listiner to change the font color on click
           li.addEventListener('click', () => {
            li.style.color = 'firebrick' 
           })

        }

        //add event listiner to the dropdown menu
        const breedDropDown = document.getElementById('breed-dropdown')
        breedDropDown.addEventListener('change', (event) => {
            //get the selected letter from the dropdown
            const selectedLetter = event.target.value
            console.log('Selected Letter:', selectedLetter)

            //filter the breeds based on the selected letter
            breedItems.forEach(item => {
                const { breed, li } = item;
                if (breed.startsWith(selectedLetter)) {
                    li.style.display = ''; // Show breed
                } else {
                    li.style.display = 'none'; // Hide breed
                }
            })
        })

    })
    .catch(error =>{
        //log any errors that occurred during fetch
        console.error('There was a problem with fetch operation', error)
    })

 })
 