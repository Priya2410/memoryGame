// document.addEventListener('DOMContentLoaded', () => {
// //This is done to make an array of all the cards by giving them a name and associating them with an image
// const cardArray=[
//     {
//      name:'fries',
//      img : 'images/fries.png'
//     },
//     {
//         name:'cheeseburger',
//         img : 'images/cheeseburger.png'
//     },
    
//     {
//         name:'hotdog',
//         img : 'images/hotdog.png'
//      },
    
//     {
//         name:'ice-cream',
//         img : 'images/ice-cream.png'
//      },
    
//     {
//         name:'milkshake',
//         img : 'images/milkshake.png'
//     },
//     {
//         name:'pizza',
//         img : 'images/pizza.png'
//      },
//      {
//         name:'fries',
//         img : 'images/fries.png'
//        },
//        {
//            name:'cheeseburger',
//            img : 'images/cheeseburger.png'
//        },
       
//        {
//            name:'hotdog',
//            img : 'images/hotdog.png'
//         },
       
//        {
//            name:'ice-cream',
//            img : 'images/ice-cream.png'
//         },
       
//        {
//            name:'milkshake',
//            img : 'images/milkshake.png'
//        },
//        {
//            name:'pizza',
//            img : 'images/pizza.png'
//         },
       
// ]
// //We will be selecting the gameboard using querySelector for .grid class
// //We will be creating our game board
// cardArray.sort(() => 0.5 - Math.random())

// const grid=document.querySelector(".grid");
// const resultDisplay = document.querySelector('#result')
// cardsChosen=[];
// cardsChosenId=[];
// cardsWon=[];

// function checkCards()
// {
//     var cards=document.querySelectorAll("img");
//     const optionId1=cardsChosenId[0];
//     const optionId2=cardsChosenId[1];
//     if(optionId1==optionId2)
//     {
//         cards[optionId1].setAttribute('src','images/blank.png');
//         cards[optionId2].setAttribute('src','images/blank.png');
//         alert("you have clicked the same image");
//     }
//     else if(cardsChosen[0] === cardsChosen[1])
//     {
//         alert("you found a matcn!");
//         cards[optionId1].setAttribute('src','images/white.png');
//         cards[optionId2].setAttribute('src','images/white.png');
//         cards[optionId1].removeEventListener('click', flipCard)
//         cards[optionId2].removeEventListener('click', flipCard)

//         cardsWon.push(cardsChosen);
//     }
//     else
//     {
        
//         cards[optionId1].setAttribute('src','images/blank.png');
//         cards[optionId2].setAttribute('src','images/blank.png');
// alert("try again!");

//     }
//     cardsChosen=[];
//     cardsChosenId=[];
//     resultDisplay.textContent = cardsWon.length
//     if  (cardsWon.length === cardArray.length/2) {
//       resultDisplay.textContent = 'Congratulations! You found them all!'
//     }
// }

// function createBoard()
// {
//     for(let i=0;i<cardArray.length;i++)
//     {
//         //this is used to add images to the grid each grid is a small 100px
//         //to 100px image and this covers the entire length
//         var card = document.createElement('img');
//         card.setAttribute('src','images/blank.png');
//         card.setAttribute('data-id',i);
//         card.addEventListener("click",flipCard);
//         grid.appendChild(card);
//     }
//     //This adds all the cards to the grid
// }
// //Funtion for flipping the card
// function flipCard()
// {
//     var cardId=this.getAttribute('data-id');
//     cardsChosen.push(cardArray[cardId].name);
//     cardsChosenId.push(cardId);
//     this.setAttribute('src',cardArray[cardId].img);
//     if(cardsChosen.length===2)
//     {
//         setTimeout(checkCards,500);
//     }
// }

// createBoard();
// })

document.addEventListener('DOMContentLoaded', () => {
const cardsArray=[
    {
    name:'fries',
    img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'  
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'  
    },
    {
        name:'pizza',
        img:'images/pizza.png'  
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
    },
    {
            name:'hotdog',
            img:'images/hotdog.png'
    },
    {
            name:'ice-cream',
            img:'images/ice-cream.png'  
    },
    {
            name:'milkshake',
            img:'images/milkshake.png'  
    },
    {
            name:'pizza',
            img:'images/pizza.png'  
    },
]
cardsArray.sort(() => 0.5 - Math.random());
const grid=document.querySelector(".grid");
cardsChosen=[];
cardsChosenId=[];
cardsWon=[];
var result=document.querySelector("#result");

function checkForMatch()
{
    var cards=document.querySelectorAll('img');
    const optionId1= cardsChosenId[0];
    const optionId2= cardsChosenId[1];
    if(optionId1==optionId2)
    {
        cards[optionId1].setAttribute('src','images/blank.png');
        cards[optionId2].setAttribute('src','images/blank.png');
        alert("You have selected the same card");
    }
    else if(cardsChosen[0]==cardsChosen[1])
    {
        alert("you have found a match");
        cards[optionId1].setAttribute('src',cardsArray[optionId1].img);
        cards[optionId2].setAttribute('src',cardsArray[optionId2].img);
        cards[optionId1].removeEventListener('click',flipCard);
        cards[optionId2].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
    }
    else
    {
            cards[optionId1].setAttribute('src','images/blank.png');
            cards[optionId2].setAttribute('src','images/blank.png');
            alert("try again");
    }
    cardsChosen=[];
    cardsChosenId=[];
    result.textContent=cardsWon.length;
    if(cardsWon.length==cardsArray.length/2)
    {
        result.textContent="You Won Congratssss!!!" ;
    } 
}
function createBoard()
{
    for(let i=0;i<cardsArray.length;i++)
    {
        var card=document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.appendChild(card);
    }
}

function flipCard()
{
   var cardId=this.getAttribute('data-id');
   cardsChosen.push(cardsArray[cardId].name);
   cardsChosenId.push(cardId);
   this.setAttribute('src',cardsArray[cardId].img);
   if(cardsChosen.length===2)
   {
       setTimeout(checkForMatch,500);
   }
}
createBoard()
})
