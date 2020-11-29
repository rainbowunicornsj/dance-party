enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Joanna.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Joanna.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Joanna.setPosition(130, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
    count += 1
    if (count == 10) {
        info.changeLifeBy(1)
        count = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Joanna.setPosition(100, 100)
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let count = 0
let Joanna: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile8,myTiles.tile9], TileScale.Sixteen))
effects.bubbles.startScreenEffect()
Joanna = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f d 5 5 5 5 5 5 d f . . 
    . f d 5 5 5 5 5 5 5 5 d f . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    f b 5 5 5 5 5 5 5 5 5 5 b f 
    f b 5 5 5 5 5 5 5 5 5 5 b f 
    f b b 5 5 5 5 5 5 5 5 b b f 
    f b b b d 5 5 5 5 d b b b f 
    f b b b b b b b b b b b b f 
    f f b b b b b b b b b b f . 
    . c c b b b b b b b b c c . 
    . 4 d c f f f f f f c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 b f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
Joanna.setPosition(80, 100)
let speed = 40
info.setScore(0)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    speed += 1
})
game.onUpdateInterval(450, function () {
    lane = randint(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a 1 1 a a a a a a a a 
            a a a a a 1 1 1 a a a a a a a a 
            a a a a 1 1 1 1 1 1 1 1 1 a a a 
            a a a 1 1 1 1 1 1 1 1 1 1 a a a 
            a a a 1 1 1 1 1 1 1 1 1 1 a a a 
            a a a a 1 1 1 1 1 1 1 1 1 a a a 
            a a a a a 1 1 1 a a a a a a a a 
            a a a a a a 1 1 a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a 1 1 a a a a a a 
            a a a a a a a 1 1 1 1 a a a a a 
            a a a a a a 1 1 1 1 1 1 a a a a 
            a a a a a 1 1 1 1 1 1 1 1 a a a 
            a a a a 1 1 1 1 1 1 1 1 1 1 a a 
            a a a a 1 1 1 1 1 1 1 1 1 1 a a 
            a a a a a a 1 1 1 1 1 1 a a a a 
            a a a a a a 1 1 1 1 1 1 a a a a 
            a a a a a a 1 1 1 1 1 1 a a a a 
            a a a a a a 1 1 1 1 1 1 a a a a 
            a a a a a a 1 1 1 1 1 1 a a a a 
            a a a a a a 1 1 1 1 1 1 a a a a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a 1 1 1 1 a a a a a a 
            a a a a a a 1 1 1 1 a a a a a a 
            a a a a a a 1 1 1 1 a a a a a a 
            a a a a a a 1 1 1 1 a a a a a a 
            a a a a 1 1 1 1 1 1 1 1 a a a a 
            a a a a 1 1 1 1 1 1 1 1 a a a a 
            a a a a a 1 1 1 1 1 1 a a a a a 
            a a a a a a 1 1 1 1 a a a a a a 
            a a a a a a a 1 1 a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a 1 a a a a a 
            a a a a a a a a a a 1 1 a a a a 
            a a a a a 1 1 1 1 1 1 1 1 a a a 
            a a a a a 1 1 1 1 1 1 1 1 1 a a 
            a a a a a 1 1 1 1 1 1 1 1 1 a a 
            a a a a a 1 1 1 1 1 1 1 1 a a a 
            a a a a a a a a a a 1 1 a a a a 
            a a a a a a a a a a 1 a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
