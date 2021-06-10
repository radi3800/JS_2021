function matrix(type, lines, columns) {	
    var m = [];
    for (var i = 0; i < lines; i++) {
        var line = [];
        for (var j = 0; j < columns; j++) {
            line.push(new type());
        }
        m.push(line);
    }
    return m;
};

function randint(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function doisDigitos(n){
    if (n < 10) {
        return "0" + n;
    }
    return "" + n;
}

function Timer() {
    this.stopped = true;
    this.zero();
}

Timer.prototype = {
    Initiation: function () {
        this.stopped = false;
        this.initiate = new Date();
    },

    zero: function () {
        this.end = new Date();
        this.initiate = this.end;
    },

    stop: function () {
        this.stopped = true;
        this.end = new Date();
    },

    time: function () {
        if (!this.stopped) {
            this.end = new Date();
        }
        this.timePassed = new Date(this.end.getTime() - this.initiate.getTime());
        return this.timePassed;
    },

    tempoHMS: function () {
        var t = this.time();
        var h = doisDigitos(t.getUTCHours());
        var m = doisDigitos(t.getUTCMinutes());
        var s = doisDigitos(t.getUTCSeconds());
        return h + ":" + m + ":" + s;
    }
};

function getRandom()
{	
	return Math.random();
};

function getRandomArbitary(min, max){
	return Math.random() * (max-min) + min;
};

function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max-min+1)) + min;
};
