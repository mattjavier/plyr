const games1 = ['League', 'Valorant', 'Pokemon', 'Monster Hunter', 'Dark Souls', "Zelda"]

const games2 = ['Starcraft', 'League', 'Monster Hunter', 'Smash']

const systems1 = ['Switch', 'PC']

const systems2 = ['Ps4', 'PC']

const genre1 = ['FPS', 'MOBA', 'Adventure']

const genre2 = ['RPG', 'MOBA', 'Fighting']

const arr1 = games1.concat(systems1).concat(genre1)
const arr2 = games2.concat(systems2).concat(genre2)


function match(arr1, arr2) {
    const finalarray = []

    arr1.forEach((i) => arr2.forEach((j) => {
        {
            if (i === j) {
                finalarray.push(i)
            }
            
        }
        
    }))
    console.log(finalarray)
    let points = (finalarray.length / arr1.length) * 100
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


match(arr1, arr2)





