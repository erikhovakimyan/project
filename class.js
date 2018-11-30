class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(Math.random() * 50);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
        this.index = 2;
        this.multiply = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.multiply++;
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak && this.multiply >= 20) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--
            this.multiply = 0;
        }
    }
    utel() {
        var vandak = random(this.yntrelVandak(1));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel()
        }
    }
    bazmanal() {
        this.multiply++
        var norVandak = random(this.yntrelVandak(1));
        var vandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.multiply = 5;
            for (var i in grassArr) {
                if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                    grassArr.splice(i, 1)
                }
            }
        }
        if (vandak && this.multiply >= 15) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--
            this.multiply = 0;
        }
    }
    mahanal() {
        console.log("Xotaker");
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
            }
        }
    }
}
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.directions = [];
        this.index = 3;
        this.multiply = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.multiply++;
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak && this.multiply >= 20) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--
            this.multiply = 0
        }

    }
    utel() {
        var vandak = random(this.yntrelVandak(2));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 3;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(2));
        var vandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
            GishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.multiply = 5;
        }
        if (vandak && this.multiply >= 20) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--
            this.multiply = 0;
        }
    }
    mahanal() {
        console.log("Gishatich");
        matrix[this.y][this.x] = 0;
        for (var i in GishatichArr) {
            if (GishatichArr[i].x == this.x && GishatichArr[i].y == this.y) {
                GishatichArr.splice(i, 1);
            }
        }
    }
}
class Haver {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
        this.index = 4;
        this.multiply = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x    , this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y    ],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x    , this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y    ],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.multiply++
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak && this.multiply >= 15) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--
            this.multiply = 0;
        }
    }
    utel() {
        var vandak = random(this.yntrelVandak(1));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 4;

            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(1));
        var vandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norHaver = new Haver(norVandak[0], norVandak[1]);
            HaverArr.push(norHaver);
            matrix[norVandak[1]][norVandak[0]] = 4;
            for (var i in grassArr) {
                if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                    grassArr.splice(i, 1)
                }
            }
        }
        if (vandak && this.multiply >= 15) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--
            this.multiply = 0;
        }
    }
    mahanal() {
        console.log("Haver");
        matrix[this.y][this.x] = 0;
        for (var i in HaverArr) {
            if (HaverArr[i].x == this.x && HaverArr[i].y == this.y) {
                HaverArr.splice(i, 1);
            }
        }
    }
}
class Axvesner {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
        this.index = 5;
        this.multiply = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.multiply++;
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak && this.multiply >= 20) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 5;
            this.energy--
            this.multiply = 0;
        }
    }
    utel() {
        var vandak = random(this.yntrelVandak(4));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 5;

            for (var i in HaverArr) {
                if (HaverArr[i].x == this.x && HaverArr[i].y == this.y) {
                    HaverArr.splice(i, 1)
                }
            }
        }
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(4));
        var vandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norAxves = new Axvesner(norVandak[0], norVandak[1]);
            AxvesnerArr.push(norAxves);
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.multiply = 5;
            for (var i in HaverArr) {
                if (HaverArr[i].x == norVandak[0] && HaverArr[i].y == norVandak[1]) {
                    HaverArr.splice(i, 1)
                }
            }
        }
        if (vandak && this.multiply >= 20) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 5;
            this.energy--
            this.multiply = 0;
        }
    }
    mahanal() {
        console.log("Axvesner");
        matrix[this.y][this.x] = 0;
        for (var i in AxvesnerArr) {
            if (AxvesnerArr[i].x == this.x && AxvesnerArr[i].y == this.y) {
                AxvesnerArr.splice(i, 1);
            }
        }
    }
}
class Gazantip {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [];
        this.index = 6;
        this.multiply = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.multiply++;
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak && this.multiply >= 25) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 6;
            this.energy--
            this.multiply = 0;
        }
    }
    utel() {
        var vandak = random(this.yntrelVandak(4));
        var vandak1 = random(this.yntrelVandak(5));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 6;
            for (var i in HaverArr) {
                if (HaverArr[i].x == this.x && HaverArr[i].y == this.y) {
                    HaverArr.splice(i, 1)
                }
            }
        }
        if (vandak1) {
            matrix[this.y][this.x] = 0;
            this.x = vandak1[0];
            this.y = vandak1[1];
            matrix[this.y][this.x] = 6;
            for (var i in AxvesnerArr) {
                if (AxvesnerArr[i].x == this.x && AxvesnerArr[i].y == this.y) {
                    AxvesnerArr.splice(i, 1)
                }
            }
        }
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(4));
        var norVandak1 = random(this.yntrelVandak(5));
        var vandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norGazantip = new Gazantip(norVandak[0], norVandak[1]);
            GazantipArr.push(norGazantip);
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.multiply = 6;
            for (var i in HaverArr) {
                if (HaverArr[i].x == norVandak[0] && HaverArr[i].y == norVandak[1]) {
                    HaverArr.splice(i, 1)
                }
            }
        }
        if (norVandak1) {
            var norGazantip = new Gazantip(norVandak1[0], norVandak1[1]);
            GazantipArr.push(norGazantip);
            matrix[norVandak1[1]][norVandak1[0]] = 6;
            this.multiply = 6;
            for (var i in AxvesnerArr) {
                if (AxvesnerArr[i].x == norVandak1[0] && AxvesnerArr[i].y == norVandak1[1]) {
                    AxvesnerArr.splice(i, 1)
                }
            }
        }
        if (vandak && this.multiply >= 25) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 6;
            this.energy--
            this.multiply = 0;
        }
    }
    mahanal() {
        console.log("Gazantip");
        matrix[this.y][this.x] = 0;
        for (var i in GazantipArr) {
            if (GazantipArr[i].x == this.x && GazantipArr[i].y == this.y) {
                GazantipArr.splice(i, 1);
            }
        }
    }
}