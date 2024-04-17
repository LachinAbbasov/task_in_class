async function logMovies() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const movies = await response.json();
        
        const container = document.querySelector('.container');
        const row = document.createElement('div');
        row.classList.add('row');

        movies.forEach((movie) => {
            const col = document.createElement('div');
            col.classList.add('col-md-3');

            col.innerHTML = `
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" height="250" alt="Kart">
                    <div class="card-body">
                        <h5 class="card-title" >${movie.title}</h5>
                        <p class="card-text"><b>Price:</b> ${movie.price}</p>
                        <p class="card-text"><b>Category:</b> ${movie.category}</p>
                        <p class="card-text"><b>Rating:</b> ${movie.rating.rate} <i class="fa-solid fa-star" style="color: #FFD43B;"></i></p>
                        
                    </div>
                    <a href="open.html" class="btn btn-outline-warning" >Open</a>
                </div>
            `;

            row.appendChild(col);
        });

        container.appendChild(row);
    } catch(err) {
        console.log(err);
    }
};

logMovies();
