//.json: JavaScript Object Notification; 

//API : sono chiavi che ci permettono di raggiungere un .json online

// fetch(): chiata aasincrona che ci permette di collegarci ad un JSON e da esso estrae il dato che lo sotto forma di in una Promise

//then(): questo metodo ci permette di convertire la Promise nel dato strutturale e di poterlo utilizzare come tale su JS

//1. fetch() = mi collego al .json e ne ottengo una promise

//2. .then()= converto la promise in un dato strutturale JS

//3. .then()= utilizzare il dato ottenuto

// .json(): metodo delle Promise che mi permette di convertirla in Oggetto JS



fetch('./annunci.json').then( (response)=> response.json() ).then((data)=>{
    
    
    // querySelctor
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');
    
    
    function radioCreate() {
        let categories = data.map( (annuncio )=> annuncio.category );
        
        
        //prendere una sola categoria
        // let uniqueCategories=[];
        
        
        // categories.forEach((category) => {
            //     if ( !uniqueCategories.includes(category)) {
        //         uniqueCategories.push(category)
        
        //     }
        //     console.log(uniqueCategories);
        
        
        // });
        
        
        // Set(): e una classe che mi restituisce, partendo da un array, un nuovo oggetto di tipo Set il quale contiene solo valori univoci
        
        // Array.from(): mi permette di covertire un array-like in un array
        
        let uniqueCategories = Array.from(new Set(categories))
        
        uniqueCategories.forEach((category)=> {
            let div = document.createElement('div');
            div.classList.add('form-chek');
            div.innerHTML =`<input class="form-check-input" type="radio" name="categories" id="${category}">
                                    <label class="form-check-label" for="${category}">
                                       ${category}
                                    </label>`;
            radioWrapper.appendChild(div)
        })
        
        
        
        
    }
    radioCreate()

    // funzione che ci permette di rendere una stringa piu breme per massimizare lo spazio nella card
    function truncateWord(string) {
        if(string.length > 15){
            return string.split(' ')[0] + '...';

        } else {
            return string;
        }
        
    }
    

    // funzione che ci permette di creare una card con immagini casuali 

    function showCards() {
    data.forEach((annuncio, i)=> {
        let div = document.createElement('div');
        div.classList.add('card-custom');
        div.innerHTML =`
                    <img src="https://picsum.photos/${300 + i}" alt="imagine casuale" class="img-fluid img-card">
                    <p class="h2" title="${annuncio.name}">${truncateWord(annuncio.name)}</p>
                    <p class="h4">${annuncio.category}</p>
                    <p class="lead">${annuncio.price}€</p>`;
                cardWrapper.appendChild(div)
            });
        };
        
        showCards()

    
    
});





    
    
    