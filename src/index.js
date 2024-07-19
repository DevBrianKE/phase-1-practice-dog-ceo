//wait for the Dom to be fully loaded before running th script
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
    //define the url for fetching random 
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    //fetch the data from the API
    console.log('Fetching data from:', imgUrl)
    fetch(imgUrl)
    .then(response => {
        console.log('Received response:', response)
        //check if the response is okay
        if(!response.ok) {
            throw new Error ('Network response was not Ok')
            
        }console.log('Response is ok')
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

})