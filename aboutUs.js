let opener = document.querySelector('.opener')
let circle = document.querySelector('.circle')
let innerFace = document.querySelector('.inner-face')
let cardName = document.querySelector('#cardName')
let cardDescription = document.querySelector('#cardDescription')
let flipCard = document.querySelector('.flip-card')


let teachers = [
    { name: 'Luke Skywalker', description: 'è un giovane Jedi coraggioso e idealista, simbolo di speranza nella galassia. Determinato, leale, impulsivo, guidato dalla Forza, affronta sfide impossibili, trasformandosi da contadino a eroe leggendario.',category:'buono', url:'./media/5.png'},
    { name: 'Darth Vader', description: 'è un potente Signore dei Sith, oscuro e temibile. Un tempo Jedi, caduto al lato oscuro, freddo, spietato, corazzato, obbediente all’Imperatore, guidato dalla rabbia e dal potere della Forza.', category:'cattivo', url:'./media/4.png'},
    { name: 'Stormtrooper', description: ' sono soldati d’élite dell’Impero Galattico, corazzati, armati, anonimi, disciplinati e letali. Obbedienti senza domande, simbolo di potere imperiale, spietati, organizzati, uniformi, implacabili, temuti in tutta la galassia.', category:'cattivo', url:'./media/3.png'},
    { name: 'R2-D2', description: 'è un droide astromeccanico coraggioso e ingegnoso. Leale, intelligente, intraprendente, silenzioso ma comunicativo a suo modo, spesso salva i protagonisti, partecipa a missioni cruciali e affronta pericoli galattici.',category:'buono', url:'./media/2.png'},
    
]

teachers.forEach((docente)=> {
    let div = document.createElement ('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${docente.url})`
    
    if(docente.category ==='cattivo'){
        div.classList.add('cattivo')
    } else if(docente.category === 'buono'){
        div.classList.add('buono')
    }
    circle.appendChild(div)
    
})

let movedDivs = document.querySelectorAll('.moved')

let check = false

opener.addEventListener('click',()=>{
    if(check == false){
        
        opener.style.transform =`rotate(45deg)`
        movedDivs.forEach((moved, i)=>{
            
            let angle = (360 * i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`
        })
        check = true
    } else{
        opener.style.transform =``
        movedDivs.forEach((moved, i)=>{
            
            moved.style.transform = ``
        })
        check = false
        flipCard.classList.add('d-none');
        
    }
})
movedDivs.forEach((moved, i)=>{
    moved.addEventListener('click', ()=>{
        flipCard.classList.remove('d-none');
        
        let docente = teachers[i];
        innerFace.style.backgroundImage = `url(${docente.url})`;
        cardName.textContent = docente.name;
        cardDescription.textContent = docente.description;
        
        flipCard.classList.remove(`buono-custom`, 'cattivo-custom');
        
        flipCard.classList.add(`${docente.category}-custom`);
    })
})

