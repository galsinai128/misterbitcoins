

function getUser(){
    return _loadFromStorage()
}

function signUp(name){
    var newUser = {
        "name": name,
        "coins": 100,
        "moves": []
    }
    _saveToStorage(newUser)
    return newUser  
}

function addMove(contact,amount,currUser){
    // var currUser = getUser();
    var time = Date.now();
    currUser.moves.push({
        toId: contact._id,
        to: contact.name,
        at: time,
        amount: amount       
    })

    currUser.coins -= amount
    _saveToStorage(currUser)
}


export default {
    getUser,
    signUp,
    addMove,
}

function _saveToStorage(user){
    localStorage.setItem("currUser", JSON.stringify(user));
}

function _loadFromStorage(){
    return JSON.parse(localStorage.getItem("currUser"));
}
