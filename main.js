// ### 1. Affiche le h3 qui est le premier enfant de la div content
let exo1 = document.getElementById('content').firstElementChild
console.log(exo1)
let exo1Bis = document.getElementsByTagName("h3")
console.log(exo1Bis[0])


// ### 2. Affiche le titreNiv3
let exo2 = document.getElementById('titreNiv3')
console.log(exo2)
console.log(exo1Bis[1])


// ### 3. Affiche l'élément qui précède le titreNiv3
console.log(exo2.previousElementSibling)
console.log(exo1Bis[1].previousElementSibling)


// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
let exo4 = document.getElementsByClassName('petitParagraphe')[0].nextElementSibling
console.log(exo4)

let exo4Bis = document.getElementsByTagName('p')[1]
console.log(exo4Bis.nextElementSibling)



// ### 5. Affiche le parent des éléments ayant comme class "important" 
let exo5 = document.getElementsByClassName('important')
for (let i = 0; i < document.getElementsByClassName('important').length; i++) {
    console.log(document.getElementsByClassName('important')[i].parentElement)
}

let exo5Bis = document.getElementsByTagName('ul')[0]
console.log(exo5Bis)




// ### 6. Affiche le premier enfant, du parent de "listElements"
let exo6 = document.getElementById('listElements').parentElement.firstElementChild
console.log(exo6) 

console.log(exo5Bis.parentElement.firstElementChild)


// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
let exo7 = document.getElementsByClassName('important')[document.getElementsByClassName('important').length-1].nextElementSibling
console.log(exo7)

let exo7Bis = document.getElementsByTagName('li')[4]
console.log(exo7Bis)





// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let exo8 = exo2.nextElementSibling
console.log(exo8)

let exo8Bis = document.getElementsByTagName('p')[4]
console.log(exo8Bis)



// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let exo9 = document.getElementsByTagName("span")[document.getElementsByTagName("span").length-2]

console.log(exo9.parentElement.nextElementSibling)




// ### 10. En partant de Nicolas, affiche Primo
let exo10 = document.getElementsByTagName("span")[document.getElementsByTagName("span").length-1].firstElementChild

console.log(exo10.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild)




// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
let exo11 = document.querySelector('.grandParagraphe')
console.log(exo11)




// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dans une boucle
let ul = document.getElementsByTagName('ul')[0];
let ul_li = Array.from(ul.getElementsByTagName('li'));
ul_li.forEach(li => {
    console.log(li);
});

let li_all = document.querySelectorAll('li')
li_all.forEach(element => {
    console.log(element)
});
