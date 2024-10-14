


function getUserData(names) {
  
    const username = prompt("Please enter your username:");
    
    const age = prompt("Please enter your age:");

    const moviesInput = prompt("Please enter your favorite movies, separated by commas:");
    
    const favoriteMovies = moviesInput.split(',').map(movie => movie.trim());
    
    const userData = {
        username: username,
        age: age,
        favoriteMovies: favoriteMovies
    };

    displayUserData(userData);
}

function displayUserData(data) {
    console.log(`Username: ${data.username}`);
    console.log('Age: ${data.age}');
    
    }
