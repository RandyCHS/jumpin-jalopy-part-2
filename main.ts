namespace SpriteKind {
    export const Timer = SpriteKind.create()
    export const Display = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f 1 1 1 1 1 1 f f f f 
f f f f f f 1 1 1 1 1 1 f f f f 
f f f f f f 1 1 1 1 1 1 f f f f 
f f f f f f 1 1 1 1 1 1 f f f f 
f f f f f f 1 1 1 1 1 1 f f f f 
f f f f f f 1 1 1 1 1 1 f f f f 
1 1 1 1 1 1 f f f f f f 1 1 1 1 
1 1 1 1 1 1 f f f f f f 1 1 1 1 
1 1 1 1 1 1 f f f f f f 1 1 1 1 
1 1 1 1 1 1 f f f f f f 1 1 1 1 
1 1 1 1 1 1 f f f f f f 1 1 1 1 
1 1 1 1 1 1 f f f f f f 1 1 1 1 
f f f f f f 1 1 1 1 1 1 f f f f 
f f f f f f 1 1 1 1 1 1 f f f f 
f f f f f f 1 1 1 1 1 1 f f f f 
f f f f f f 1 1 1 1 1 1 f f f f 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectedCar) {
        targetDirection = 3.1415926 * 1.5
        if (currentCar == 0) {
            theCar.setImage(img`
. . . . . . e e c c e e . . . . 
. . . . . e 2 2 2 2 2 2 e . . . 
. . . . 2 c 2 2 2 2 2 2 c 2 . . 
. . . e 2 c 4 2 2 2 2 2 c 2 e . 
. . . f 2 2 4 2 2 2 2 2 c 2 f . 
. . . f 2 2 4 2 2 2 2 2 2 2 f . 
. . . f 2 2 4 2 2 2 2 2 2 2 f . 
. . . f 2 c 2 4 4 2 2 2 c 2 f . 
. . . e 2 c e c c c c e c 2 e . 
. . . e 2 e c b b b b c e 2 e . 
. . . e 2 e b b b b b b e 2 e . 
. . . e e e e e e e e e e e e . 
. . . f e d e e e e e e d e f . 
. . . f e 2 d e e e e d 2 e f . 
. . . f f e e e e e e e e f f . 
. . . . f f . . . . . . f f . . 
`)
        } else if (currentCar == 1) {
            theCar.setImage(img`
. . . . . . 8 8 c c 8 8 . . . . 
. . . . . 8 6 6 6 6 6 6 8 . . . 
. . . . 6 c 6 6 6 6 6 6 c 6 . . 
. . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
. . . f 6 6 9 6 6 6 6 6 c 6 f . 
. . . f 6 6 9 6 6 6 6 6 6 6 f . 
. . . f 6 6 9 6 6 6 6 6 6 6 f . 
. . . f 6 c 6 9 9 6 6 6 c 6 f . 
. . . 8 6 c 8 c c c c 8 c 6 8 . 
. . . 8 6 8 c b b b b c 8 6 8 . 
. . . 8 6 8 b b b b b b 8 6 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . f 8 d 8 8 8 8 8 8 d 8 f . 
. . . f 8 6 d 8 8 8 8 d 6 8 f . 
. . . f f 8 8 8 8 8 8 8 8 f f . 
. . . . f f . . . . . . f f . . 
`)
        } else if (currentCar == 2) {
            theCar.setImage(img`
. . . . . . a a c c a a . . . . 
. . . . . a 3 3 3 3 3 3 a . . . 
. . . . 3 c 3 3 3 3 3 3 c 3 . . 
. . . a 3 c d 3 3 3 3 3 c 3 a . 
. . . f 3 3 d 3 3 3 3 3 c 3 f . 
. . . f 3 3 d 3 3 3 3 3 3 3 f . 
. . . f 3 3 d 3 3 3 3 3 3 3 f . 
. . . f 3 c 3 d d 3 3 3 c 3 f . 
. . . a 3 c a c c c c a c 3 a . 
. . . a 3 a c b b b b c a 3 a . 
. . . a 3 a b b b b b b a 3 a . 
. . . a a a a a a a a a a a a . 
. . . f a d a a a a a a d a f . 
. . . f a 3 d a a a a d 3 a f . 
. . . f f a a a a a a a a f f . 
. . . . f f . . . . . . f f . . 
`)
        } else {
            theCar.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
        }
    }
})
function drawCar (car: number) {
    if (car == 0) {
        theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 4 2 2 2 2 2 2 c 2 . . . 
. . 2 c 4 2 2 2 2 2 2 c c 2 . . 
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
. 2 c 2 e e e e e e e b c 4 2 2 
. 2 2 e b b e b b b e e b 4 2 2 
. 2 e b b b e b b b b e 2 2 2 2 
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
. e e e e e e f e e e f e 2 d d 
. e e e e e e f e e f e e e 2 d 
. e e e e e e f f f e e e e e e 
. e f f f f e e e e f f f e e e 
. . f f f f f e e f f f f f e . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
        carName = "Jumpin' Jalopy"
        acceleration = 4
        maxSpeed = 100
        turnSpeed = 0.06
    } else if (car == 1) {
        theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
        carName = "Blue Steel"
        acceleration = 6
        turnSpeed = 0.04
        maxSpeed = 80
    } else if (car == 2) {
        theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 d 3 3 3 3 3 3 c 3 . . . 
. . 3 c d 3 3 3 3 3 3 c c 3 . . 
. 3 c c d d d d d d 3 c c d 3 d 
. 3 c 3 a a a a a a a b c d 3 3 
. 3 3 a b b a b b b a a b d 3 3 
. 3 a b b b a b b b b a 3 3 3 3 
. a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
. a a a a a a f a a a f a 3 d d 
. a a a a a a f a a f a a a 3 d 
. a a a a a a f f f a a a a a a 
. a f f f f a a a a f f f a a a 
. . f f f f f a a f f f f f a . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
        carName = "Pink Car-nation"
        acceleration = 3
        turnSpeed = 0.05
        maxSpeed = 120
    } else {
        theCar.setImage(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`)
        carName = "Todd"
        acceleration = 3
        turnSpeed = 0.08
        maxSpeed = 80
    }
    turnSpeedBar.value = turnSpeed
    accelerationBar.value = acceleration
    maxSpeedBar.value = maxSpeed
    carNameSprite.say(carName)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    hitCheckpoint = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(selectedCar)) {
        selectedCar = true
        startRace()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectedCar) {
        targetDirection = 3.1415926
        if (currentCar == 0) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . 2 c 2 2 2 2 2 2 4 2 . 
. . . . 2 c c 2 2 2 2 2 2 4 c 2 
. . d 2 4 c c 2 4 4 4 4 4 4 c c 
. d 2 2 4 c b e e e e e e e 2 c 
. 2 2 2 4 b e e b b b e b b e 2 
. 2 2 2 2 2 e b b b b e b b b e 
. 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
. 2 d d 2 e f e e e f e e e e e 
. d d 2 e e e f e e f e e e e e 
. e e e e e e e f f f e e e e e 
. e e e e f f f e e e e f f f f 
. . . e f f f f f e e f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`)
        } else if (currentCar == 1) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . 
. . . . . 6 c 6 6 6 6 6 6 9 6 . 
. . . . 6 c c 6 6 6 6 6 6 9 c 6 
. . d 6 9 c c 6 9 9 9 9 9 9 c c 
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
. 6 6 6 9 b 8 8 b b b 8 b b 8 6 
. 6 6 6 6 6 8 b b b b 8 b b b 8 
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`)
        } else if (currentCar == 2) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 3 3 . . 
. . . . . 3 c 3 3 3 3 3 3 d 3 . 
. . . . 3 c c 3 3 3 3 3 3 d c 3 
. . d 3 d c c 3 d d d d d d c c 
. d 3 3 d c b a a a a a a a 3 c 
. 3 3 3 d b a a b b b a b b a 3 
. 3 3 3 3 3 a b b b b a b b b a 
. 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
. 3 d d 3 a f a a a f a a a a a 
. d d 3 a a a f a a f a a a a a 
. a a a a a a a f f f a a a a a 
. a a a a f f f a a a a f f f f 
. . . a f f f f f a a f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`)
        } else {
            theCar.setImage(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`)
        }
    } else {
        currentCar = (currentCar + 3) % 4
        drawCar(currentCar)
    }
})
function startRace () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101020202020203020202020202010101010202020202030202020202020101010102020202020302020202020201010101020202010101010101020202010101010202020101010101010202020101010102020201010101010102020201010101020202010101010101020202010101010202020101010101010202020101010102020201010101010102020201010101020202010101010101020202010101010202020202040202020202020101010102020202020402020202020201010101020202020204020202020202010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileDarkGrass3,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
    scene.cameraFollowSprite(theCar)
    tiles.placeOnRandomTile(theCar, myTiles.tile1)
    hitCheckpoint = false
    info.setScore(0)
    accelerationBar.destroy()
    turnSpeedBar.destroy()
    maxSpeedBar.destroy()
    carNameSprite.destroy()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectedCar) {
        targetDirection = 0
        if (currentCar == 0) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 4 2 2 2 2 2 2 c 2 . . . 
. . 2 c 4 2 2 2 2 2 2 c c 2 . . 
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
. 2 c 2 e e e e e e e b c 4 2 2 
. 2 2 e b b e b b b e e b 4 2 2 
. 2 e b b b e b b b b e 2 2 2 2 
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
. e e e e e e f e e e f e 2 d d 
. e e e e e e f e e f e e e 2 d 
. e e e e e e f f f e e e e e e 
. e f f f f e e e e f f f e e e 
. . f f f f f e e f f f f f e . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
        } else if (currentCar == 1) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
        } else if (currentCar == 2) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 d 3 3 3 3 3 3 c 3 . . . 
. . 3 c d 3 3 3 3 3 3 c c 3 . . 
. 3 c c d d d d d d 3 c c d 3 d 
. 3 c 3 a a a a a a a b c d 3 3 
. 3 3 a b b a b b b a a b d 3 3 
. 3 a b b b a b b b b a 3 3 3 3 
. a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
. a a a a a a f a a a f a 3 d d 
. a a a a a a f a a f a a a 3 d 
. a a a a a a f f f a a a a a a 
. a f f f f a a a a f f f a a a 
. . f f f f f a a f f f f f a . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
        } else {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 4 b 
b d d c d 5 5 b 5 4 4 4 4 4 b . 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`)
        }
    } else {
        currentCar = (currentCar + 1) % 4
        drawCar(currentCar)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectedCar) {
        targetDirection = 3.1415926 * 0.5
        if (currentCar == 0) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . 
. . . . . 2 2 4 4 2 2 2 2 . . . 
. . . . . c 4 2 2 2 2 2 c . . . 
. . . . 2 c 4 2 2 2 2 2 c 2 . . 
. . . e 2 c 4 2 2 2 2 2 c 2 e . 
. . . f 2 c 4 2 2 2 2 2 c 2 f . 
. . . f e c 2 2 2 2 2 2 c e f . 
. . . f 2 c 2 b b b b 2 c 2 f . 
. . . e 2 2 b c c c c b 2 2 e . 
. . . e e b c c c c c c b e e . 
. . . f e 4 4 4 4 4 4 4 4 e f . 
. . . f e d 2 2 2 2 2 2 d e f . 
. . . . 2 d d 2 2 2 2 d d 2 f . 
. . . . f 2 d 2 2 2 2 d 2 f . . 
. . . . . e 2 2 2 2 2 2 e . . . 
`)
        } else if (currentCar == 1) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 . . . . 
. . . . . 6 6 9 9 6 6 6 6 . . . 
. . . . . c 9 6 6 6 6 6 c . . . 
. . . . 6 c 9 6 6 6 6 6 c 6 . . 
. . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
. . . f 6 c 9 6 6 6 6 6 c 6 f . 
. . . f 8 c 6 6 6 6 6 6 c 8 f . 
. . . f 6 c 6 b b b b 6 c 6 f . 
. . . 8 6 6 b c c c c b 6 6 8 . 
. . . 8 8 b c c c c c c b 8 8 . 
. . . f 8 9 9 9 9 9 9 9 9 8 f . 
. . . f 8 d 6 6 6 6 6 6 d 8 f . 
. . . . 6 d d 6 6 6 6 d d 6 f . 
. . . . f 6 d 6 6 6 6 d 6 f . . 
. . . . . 8 6 6 6 6 6 6 8 . . . 
`)
        } else if (currentCar == 2) {
            theCar.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 . . . . 
. . . . . 3 3 d d 3 3 3 3 . . . 
. . . . . c d 3 3 3 3 3 c . . . 
. . . . 3 c d 3 3 3 3 3 c 3 . . 
. . . a 3 c d 3 3 3 3 3 c 3 a . 
. . . f 3 c d 3 3 3 3 3 c 3 f . 
. . . f a c 3 3 3 3 3 3 c a f . 
. . . f 3 c 3 b b b b 3 c 3 f . 
. . . a 3 3 b c c c c b 3 3 a . 
. . . a a b c c c c c c b a a . 
. . . f a d d d d d d d d a f . 
. . . f a d 3 3 3 3 3 3 d a f . 
. . . . 3 d d 3 3 3 3 d d 3 f . 
. . . . f 3 d 3 3 3 3 d 3 f . . 
. . . . . a 3 3 3 3 3 3 a . . . 
`)
        } else {
            theCar.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f 1 1 1 1 f f . . . . 
. . . f b 1 1 1 1 1 1 b f . . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . f d 1 1 1 1 1 1 1 1 d f . . 
. . f d 1 1 1 1 1 1 1 1 d f . . 
. . f d d d 1 1 1 1 d d d f . . 
. . f b d b f d d f b d b f . . 
. . f c d c f 1 1 f c d c f . . 
. f f f f 1 1 1 1 1 1 b f . . . 
f c 1 1 1 c d b 1 b d f f f . . 
f 1 b 1 b c b f b f c 1 1 1 c f 
f b f b f b f f f f 1 b 1 b 1 f 
. . . . . f f f f f f f b f b f 
. . . . . . f f f f f . . . . . 
. . . . . . . f f f . . . . . . 
`)
        }
    }
})
/**
 * Perplexing racing forest customizable
 */
let direction = 0
let angleDiff = 0
let speed = 0
let hitCheckpoint = false
let turnSpeed = 0
let maxSpeed = 0
let acceleration = 0
let carName = ""
let targetDirection = 0
let maxSpeedBar: StatusBarSprite = null
let accelerationBar: StatusBarSprite = null
let turnSpeedBar: StatusBarSprite = null
let carNameSprite: Sprite = null
let theCar: Sprite = null
let selectedCar = false
let currentCar = 0
currentCar = 0
selectedCar = false
theCar = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 4 2 2 2 2 2 2 c 2 . . . 
. . 2 c 4 2 2 2 2 2 2 c c 2 . . 
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
. 2 c 2 e e e e e e e b c 4 2 2 
. 2 2 e b b e b b b e e b 4 2 2 
. 2 e b b b e b b b b e 2 2 2 2 
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
. e e e e e e f e e e f e 2 d d 
. e e e e e e f e e f e e e 2 d 
. e e e e e e f f f e e e e e e 
. e f f f f e e e e f f f e e e 
. . f f f f f e e f f f f f e . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
carNameSprite = sprites.create(img`
b b b b 
b b b b 
b b b b 
b b b b 
`, SpriteKind.Display)
carNameSprite.setFlag(SpriteFlag.Invisible, true)
scene.setBackgroundColor(12)
theCar.y += -30
turnSpeedBar = statusbars.create(40, 4, StatusBarKind.Energy)
turnSpeedBar.setLabel("Turning:")
turnSpeedBar.max = 0.08
turnSpeedBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
turnSpeedBar.right = 120
accelerationBar = statusbars.create(40, 4, StatusBarKind.Energy)
accelerationBar.setLabel("Accel:")
accelerationBar.right = 120
accelerationBar.y += 15
accelerationBar.max = 5
accelerationBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
maxSpeedBar = statusbars.create(40, 4, StatusBarKind.Energy)
maxSpeedBar.setLabel("Max:")
maxSpeedBar.right = 120
maxSpeedBar.y += 30
maxSpeedBar.max = 120
maxSpeedBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
drawCar(currentCar)
game.onUpdate(function () {
    if (selectedCar) {
        if (theCar.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass3)) {
            speed = Math.max(speed - acceleration, 20)
        } else {
            speed = Math.min(speed + acceleration, maxSpeed)
        }
        angleDiff = targetDirection - direction
        if (Math.abs(angleDiff) < 3.1415926) {
            if (targetDirection < direction) {
                direction += 0 - turnSpeed
            } else {
                direction += turnSpeed
            }
        } else {
            if (targetDirection < direction) {
                direction += turnSpeed
            } else {
                direction += 0 - turnSpeed
            }
        }
        if (direction < 0) {
            direction += 6.28
        } else if (direction > 6.28) {
            direction += -6.28
        }
        theCar.vx = Math.cos(direction) * speed
        theCar.vy = Math.sin(direction) * speed
        theCar.say("" + Math.idiv(game.runtime(), 100) / 10)
    }
})
