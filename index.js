// code your solution here
function saturdayFun(defaultActivity = "roller-skate"){
    return `This Saturday, I want to ${defaultActivity}!`
}
function mondayWork(mondayActivity='go to the office'){
        return `This Monday, I will ${mondayActivity}.`
}

function wrapAdjective(wordArt= "||"){
    return function(adjective = "a dedicated programmer "){
        return `You are ${wordArt}${adjective}${wordArt}!`
    }
}