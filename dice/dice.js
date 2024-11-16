let dice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]

let IMG = document.getElementById('image')
IMG.src = dice[0]

const roll = () => {
    let r = Math.random() * 6
    r  = Math.floor(r)

    IMG.src = dice[r]
}