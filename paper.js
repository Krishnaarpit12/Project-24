class Paper{
    constructor () {
      
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       this.body.circle(56, 46, 10, options);
    }
    display(){
        this.body.display();

    }
}