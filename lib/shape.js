class Shape {
    constructor (color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }    
    setColor (color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor (color, textColor, text) {
        super (color, textColor, text)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor (color, textColor, text) {
        super (color, textColor, text)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor (color, textColor, text) {
        super (color, textColor, text)
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}
module.exports = {
    Circle,
    Triangle,
    Square
}