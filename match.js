const games1 = ['League', 'Valorant', 'Pokemon', 'Monster Hunter', 'Dark Souls', "Zelda"]

const games2 = ['Starcraft', 'League', 'Monster Hunter', 'Smash']

const systems1 = ['Switch', 'PC']

const systems2 = ['Ps4', 'PC']

const genre1 = ['FPS', 'MOBA', 'Adventure']

const genre2 = ['RPG', 'MOBA', 'Fighting']


//combining three separate arrays into one large one contatining games, systems and genres. 
const userArr = games1.concat(systems1).concat(genre1)
const matchArr = games2.concat(systems2).concat(genre2)


//this function will compare all the matches between the two arrays and push them into one. 
function match(userArr, matchArr) {
    const finalarray = []

    userArr.forEach((i) => matchArr.forEach((j) => {
        {
            if (i === j) {
                finalarray.push(i)
            }
            
        }
        
    }))
    //the final array contains all the similarities between two people and will give a number-percentage based on the user's and other person's interests on how much theyd match
    console.log(finalarray)
    let points = Math.round((finalarray.length / userArr.length) * 100)
    // if (finalarray.length <= 1) {
    //     points++
    // }
    // else if (finalarray.length <= 2) {
    //     points += 2
    // }
    // else {
    //     points += 3
    // }
    console.log(points)
}


match(userArr, matchArr)





