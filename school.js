

const imageContainer = document.getElementById('image-container');
        const imageCount = 19; // Total number of images
        const basePath = 'images/'; // Ensure proper path format with a trailing slash

        for (let i = 8; i <= imageCount; i++) {
            const img = document.createElement('img');
            img.src = `${basePath}IMG-20250426-WA00${i}.jpg`; // Correct path concatenation
            img.alt = `Image ${i}`;
            img.loading = 'lazy'; // Enable lazy loading for performance
            img.width = 400; // Set optional width for consistent styling
            img.height=400
            if (img.src)
            {console.log(img.src)
            imageContainer.append(img);
        }}


    
        
        
