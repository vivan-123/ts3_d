class Rectangle1
{
    constructor(x,y,w,h)
    {
        var options =
        {
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.width = w;
        this.body.height = h;
        this.Visiblity = 255;
        World.add(world, this.body);
    }

    score()
    {
        if (this.Visiblity < 0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    display()
    {
        /*this.Score = 0;
            if ())
                {
                    this.Score = this.Score + 1;          
                }
            text ("Score : "+this.Score,750,50  )
            */
        if (this.body.speed < 3)
        {
            fill("red");
            rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
        }
        else
        {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 1;
            tint(255,this.Visiblity);
            pop();
        }
    }
}
