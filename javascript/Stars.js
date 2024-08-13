class Stars {
    constructor(image_name) {
        this.image_name = image_name;
        this.filename = image_name + '_peaks.json';
        this.n_stars = 0;

        this.star_data= loadJSON('./data/' + this.filename); //JSON data of star positions and sizes 
        this.star_data_sorted = {};
    }

    // sort(playhead) {
    //     sort_param = sort_dict[playhead.type];

    //     const combined = this.star_data.x_norm.map((value, index) => ({
    //         x_norm: this.star_data.x_norm[index],
    //         y_norm: this.star_data.y_norm[index],
    //         size_norm: this.star_data.size_norm[index],
    //         r_norm: this.star_data.r_norm[index],
    //         theta_norm: this.star_data.theta_norm[index]
    //     }));

    //     combined.sort((a, b) => a[sort_param] - b[sort_param]);

    //     // if (direction in ['right', 'down', 'cw', 'out']) {
    //     //     combined.sort((a, b) => a[sort_param] - b[sort_param]);
    //     // } else {
    //     //     combined.sort((a, b) => b[sort_param] - a[sort_param]);
    //     // }
        

    //     const sortedData = {
    //         x_norm: combined.map(item => item.x_norm),
    //         y_norm: combined.map(item => item.y_norm),
    //         size_norm: combined.map(item => item.size_norm),
    //         r_norm: combined.map(item => item.r_norm),
    //         theta_norm: combined.map(item => item.theta_norm)
    //     };

    //     this.star_data_sorted = sortedData;
    //     console.log('sorted by ' + sort_param);
    // }

    
    
}

