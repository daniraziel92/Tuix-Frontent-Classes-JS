

// "" , false, 0, undefined, null

/*let s = ""
s = 0

const obj = {
    color: {
        blue: null
    }
}


obj.color = true


const getBlue = function () {
    console.log('Blue')
}


const getYellow = function () {
    console.log('Yellow2')
}

(obj.color && getBlue()) || (!(obj.color) && getYellow())*/

const op = 'X'

const calculator = {
    add: function (num1, num2) {
        console.log(op)

        const f1 = function () {
            const innerVar = 'In1'
        }

        return num1 + num2
    }
}


const personGenerator = function (name, lastName) {
    this._name = name
    this._lastName = lastName

    const that = this

    return function () {
        this.getName = function () {
            return that._name
        }

        this.getLastName = function () {
            return that._lastName
        }

        this.setName = function (name) {
            _name = that.name
        }

        this.setLastName = function (lastName) {
            _lastName = that.lastName
        }
    }


}

const p = personGenerator('Juan', 'Vizcaino')
const person = new p()

//console.log(person.getName())
/*person.lastName = 'Vizcaino'
console.log(person.getName(), person.getLastName())

person.setName('Dani')

person.setLastName = function () {
    return '#' + person.getName()
}

person.setLastName('Romero')

console.log(person.getLastName())*/


const hoursHtml = document.getElementById('hours')
const minutesHtml = document.getElementById('minutes')
const secondHtml = document.getElementById('seconds')

StopWatch.start()
StopWatch.counterHasChange = function (hours, minutes, seconds) {
    console.log(hours, minutes, seconds)
    hoursHtml.innerHTML = hours
    secondHtml.innerHTML = seconds
    minutesHtml.innerHTML = minutes
}


