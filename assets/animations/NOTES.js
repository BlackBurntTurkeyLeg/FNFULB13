const path = "NOTES.png"

const grayArrows = {
    down: { x: 0, y: 235, width: 157, height: 153 },
    right: { x: 157, y: 235, width: 153, height: 157 },
    up: { x: 784, y: 232, width: 157, height: 153 },
    left: { x: 310, y: 235, width: 153, height: 157 }
}

const arrows = {
    blue: { x: 1850, y: 154, width: 157, height: 154 },
    red: { x: 476, y: 232, width: 154, height: 157 },
    green: { x: 1850, y: 0, width: 157, height: 154 },
    purple: { x: 630, y: 232, width: 154, height: 157 },
}

const holdEnd = {
    blue: { x: 1170, y: 447, width: 50, height: 64 },
    red: { x: 1070, y: 442, width: 50, height: 64 },
    green: { x: 1120, y: 442, width: 50, height: 64 },
    purple: { x: 1220, y: 447, width: 50, height: 64 }
}

const holdPiece = {
    blue: { x: 1370, y: 449, width: 50, height: 44 },
    green: { x: 1320, y: 447, width: 50, height: 44 },
    purple: { x: 1420, y: 449, width: 50, height: 44 },
    red: { x: 1270, y: 447, width: 50, height: 44 }
}

const confirm = {
    down: [
        { x: 0, y: 0, width: 238, height: 235 },
        // { x: 238, y: 0, width: 238, height: 235 },
        // { x: 1176, y: 230, width: 219, height: 208, frameX: -6, frameY: -12, frameWidth: 238, frameHeight: 235 },
        { x: 1176, y: 230, width: 219, height: 208, frameX: -6, frameY: -12, frameWidth: 238, frameHeight: 235 },
    ],
    left: [
        { x: 948, y: 0, width: 228, height: 231 },
        { x: 1402, y: 228, width: 218, height: 221, frameX: -5, frameY: -5, frameWidth: 228, frameHeight: 231 },
        { x: 1402, y: 0, width: 225, height: 221, frameX: -2, frameY: -1, frameWidth: 228, frameHeight: 231 },
        // { x: 1402, y: 0, width: 225, height: 221, frameX: -2, frameY: -1, frameWidth: 228, frameHeight: 231 },
    ],
    right: [
        { x: 1627, y: 0, width: 223, height: 226, frameX: -1, frameY: -3, frameWidth: 226, frameHeight: 230 },
        { x: 1627, y: 226, width: 223, height: 226, frameX: -1, frameY: -3, frameWidth: 226, frameHeight: 230 },
        { x: 1176, y: 0, width: 226, height: 230 },
        { x: 1176, y: 0, width: 226, height: 230 }
    ],
    up: [
        { x: 476, y: 0, width: 236, height: 232 },
        { x: 712, y: 0, width: 236, height: 232 },
        { x: 948, y: 231, width: 214, height: 206, frameX: -11, frameY: -10, frameWidth: 236, frameHeight: 232 },
        { x: 948, y: 231, width: 214, height: 206, frameX: -11, frameY: -10, frameWidth: 236, frameHeight: 232 }
    ]
}

const press = {
    down: [
        // { x: 149, y: 392, width: 142, height: 140, frameX: -4, frameY: -2, frameWidth: 149, frameHeight: 146 },
        { x: 149, y: 392, width: 142, height: 140, frameX: -4, frameY: -2, frameWidth: 149, frameHeight: 146 },
        { x: 0, y: 388, width: 149, height: 146 },
        // { x: 0, y: 388, width: 149, height: 146 },
    ],
    left: [
        // { x: 291, y: 392, width: 140, height: 142, frameX: -3, frameY: -3, frameWidth: 146, frameHeight: 149 },
        { x: 291, y: 392, width: 140, height: 142, frameX: -3, frameY: -3, frameWidth: 146, frameHeight: 149 },
        // { x: 463, y: 389, width: 146, height: 149 },
        { x: 463, y: 389, width: 146, height: 149 }
    ],
    right: [
        // { x: 932, y: 442, width: 138, height: 141, frameX: -3, frameY: -7, frameWidth: 148, frameHeight: 151 },
        { x: 932, y: 442, width: 138, height: 141, frameX: -3, frameY: -7, frameWidth: 148, frameHeight: 151 },
        // { x: 784, y: 385, width: 148, height: 151 },
        { x: 784, y: 385, width: 148, height: 151 }
    ],
    up: [
        // { x: 609, y: 389, width: 144, height: 141, frameX: -5, frameY: -4, frameWidth: 153, frameHeight: 150 },
        { x: 609, y: 389, width: 144, height: 141, frameX: -5, frameY: -4, frameWidth: 153, frameHeight: 150 },
        // { x: 1850, y: 308, width: 153, height: 150 },
        { x: 1850, y: 308, width: 153, height: 150 }
    ]
}

export { path, press, holdEnd, holdPiece, arrows, grayArrows, confirm}