// Name       : ByungChan Park
// Assignment : final_project(making_a_game)
// Course     : CS099
// Spring 2021

class vec2
{
    constructor(x,y)
    {
        this.x = x 
        this.y = y
    }

    getAngle()
    {
        return atan2(this.y,this.x);
    }

    setAngle(angle_in_radians)
    {
        let length = this.getLength()
        this.x = cos(angle_in_radians) * length;
        this.y = sin(angle_in_radians) * length;
    }
        
    getLength()
    {
        const pow_length = this.x * this.x + this.y* this.y;
        return sqrt(pow_length);
    }

    setLength(length)
    {
        const angle_in_radians = this.getAngle();
        this.x = cos(angle_in_radians) * length;
        this.y = sin(angle_in_radians) * length;
    }

    add(v2)
    {
        const new_x = this.x + v2.x;
        const new_y = this.y + v2.y;
        return new vec2(new_x, new_y);
    }

    addTo(v2)
    {
        this.x += v2.x;
        this.y += v2.y ;
    }

    subtract(v2)
    {
        const sub = new vec2(this.x-v2.x,this.y-v2.y);
        return sub;
    }

    subtractFrom(v2)
    {
        this.x -= v2.x;
        this.y -= v2.y;
    }

    multiply(scalar)
    {
        const multi = new vec2(this.x*scalar,this.y*scalar);
        return multi;
    }

    multiplyBy(scalar)
    {
        this.x *= scalar;
        this.y *= scalar;
    }

    divide(scalar)
    {
        const div = new vec2(this.x/scalar, this.y/scalar);
        return div;
    }

    divideBy(scalar)
    {
        this.x /= scalar;
        this.y /= scalar;
    }

        
}

