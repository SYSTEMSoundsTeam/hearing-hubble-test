class Playhead {
    constructor(himage) {
        // Initialize any properties here
        this.crossing_time = 30; //crossing time in seconds (the speed slider will change this)
        delta_n_position = 1/this.crossing_time/framerate; //speed in units of normalized position per frame

        this.himage = himage;
    }

    setHimage(himage) {
        this.himage = himage;
    }

    // Add methods here
    setSpeed(speed) {
        this.crossing_time = crossing_time_max + (crossing_time_min - crossing_time_max) * (speed / 100)**0.5;
        delta_n_position = 1/this.crossing_time/framerate;
    }

    incrementPosition() {
        n_position += direction_sign * delta_n_position;

        // Reset n_position if it gets too big
        if (n_position >= 1) {
            n_position = 0;
        }
        else if (n_position <= 0) {
            n_position = 1;
        }
    }

    reverse() {
        direction_sign *= -1;
        // switch (direction) {
        //     case 'left':
        //         direction = 'right';
        //         break;
        //     case 'right':
        //         direction = 'left';
        //         break;  
        //     case 'up':  
        //         direction = 'down';
        //         break;  
        //     case 'down':                
        //         direction = 'up';
        //         break;  
        //     case 'ccw': 
        //         direction = 'cw';
        //         break;  
        //     case 'cw':
        //         direction = 'ccw';
        //         break;  
        //     case 'in':  
        //         direction = 'out';
        //         break;  
        //     case 'out':
        //         direction= 'in';
        //         break;
        // }
        // console.log('switched to ' + direction);    
            
    }

    draw() {
        // Draw the playhead based on the type
        switch (playhead_type) {
            case 'leftright':
                this.drawLinear();
                break;
            case 'updown':
                this.drawLinear();
                break;
            case 'outin':
                this.drawRadial();
                break;
            case 'cwccw':
                this.drawPolar();
                break;
            
        }
    }


    drawLinear() {
        stroke(255, 255, 255, line_alpha); // Red color for the line
        strokeWeight(3); // Set the stroke width 

        if (playhead_type == 'leftright') {
            let x = n_position * this.himage.width +this.himage.widthShift;
            line(x, this.himage.heightShift, x, this.himage.height  + this.himage.heightShift);
        } else if (playhead_type == 'updown') {
            let y = n_position * this.himage.height + this.himage.heightShift;
            line(this.himage.widthShift, y, this.himage.width + this.himage.widthShift, y);
        }
            
    }

    drawRadial() {
        
        let x = this.himage.widthShift + this.himage.width/2;
        let y = this.himage.heightShift + this.himage.height/2;
        let radius = n_position * sqrt(this.himage.width**2 + this.himage.height**2) / 2;

        //blendMode(DODGE); // Set the blend mode to DODGE


        noFill(); // No fill for the circle, just the outline
        stroke(255, 255, 255, line_alpha); // Red color for the circle outline
        strokeWeight(3); // Set the stroke width 

        ellipse(x, y, radius * 2, radius * 2);
        //blendMode(BLEND); // Reset the blend mode to BLEND
    }

    drawPolar() {
        let centerX = this.himage.widthShift + this.himage.width / 2;
        let centerY = this.himage.heightShift + this.himage.height / 2;
        let angle = n_position * TWO_PI - HALF_PI;

        let halfWidth = this.himage.width / 2;
        let halfHeight = this.himage.height / 2;

        let radius = sqrt(halfWidth**2 + halfHeight**2);

        let endX = centerX + radius * Math.cos(angle);
        let endY = centerY + radius * Math.sin(angle);
        stroke(255, 255, 255, line_alpha); // Red color for the line
        strokeWeight(3); // Set the stroke width 

        line(centerX, centerY, endX, endY);
    }
    
}
