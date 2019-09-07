var getClosest;

document.addEventListener('DOMContentLoaded', function(event) {

    if ( ! Modernizr.objectfit ) {

        var objectFitImages,
            objectFitParent,
            imageList;

        // Find all images - put them in an array
        objectFitImages = document.querySelectorAll('.kx-objectfit .kx-objectfit__img');

        // Create empty array for img-urls
        imageList = [];

        // For each image found in objectFitImages...
        for (var i = 0; i < objectFitImages.length; i++) {
            // Find img-url and push it to imageList[]
            imageList.push(objectFitImages[i].getAttribute('data-fallback'));

            if (imageList[i]) {
                // Find image parent container
                objectFitParent = getClosest(objectFitImages[i], '.kx-objectfit');

                // Add background-image and class
                objectFitParent.style.backgroundImage = 'url("' + imageList[i] + '")';
                objectFitParent.classList.add('kx-objectfit--compat');
            }
        }
    }
});