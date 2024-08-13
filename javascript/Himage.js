

class Himage {
    // Constructor method
    constructor(filename) {
        this.filename = filename;
        
        const image_path_filename = filename + '/' + filename;
        this.image = loadImage('./assets/hubble-images/' + image_path_filename + '.jpg');  //original color image

        //load image data
        this.LR_grey_data = loadJSON('./data/' + image_path_filename +'_LR_grey.json'); //JSON data of star positions and sizes 
        this.LR_color_data = loadJSON('./data/' + image_path_filename +'_LR_color.json'); //JSON data of star positions and sizes 
        this.UD_grey_data = loadJSON('./data/' + image_path_filename +'_UD_grey.json'); //JSON data of star positions and sizes 
        this.UD_color_data = loadJSON('./data/' + image_path_filename +'_UD_color.json'); //JSON data of star positions and sizes 
        this.polar_grey_data = loadJSON('./data/' + image_path_filename +'_polar_grey.json'); //JSON data of star positions and sizes 
        this.polar_color_data = loadJSON('./data/' + image_path_filename +'_polar_color.json'); //JSON data of star positions and sizes 
        this.radial_grey_data = loadJSON('./data/' + image_path_filename +'_radial_grey.json'); //JSON data of star positions and sizes 
        this.radial_color_data = loadJSON('./data/' + image_path_filename +'_radial_color.json'); //JSON data of star positions and sizes 
        

        //load star data
        this.star_data = loadJSON('./data/' + image_path_filename +'_peaks.json'); //JSON data of star positions and sizes 

        loadTable('./data/image_data.csv', 'csv', 'header', (table) => {
            this.image_info = table;
            this.caption = this.getDescription();
        });
        console.log('loaded ' + this.filename );

    }

    getDescription() {
        const table = this.image_info;
        const filenameIndex = table.columns.indexOf('filename');
        const descriptionIndex = table.columns.indexOf('description');

        for (let i = 0; i < table.getRowCount(); i++) {
            const row = table.getRow(i);
            if (row.arr[filenameIndex] === this.filename) {
                return row.arr[descriptionIndex];
            }
        }

        return 'Description not found';
    }


    //
    resizeImage(canvasWidth,canvasHeight) {    
        
        this.aspectRatio = this.image.width/this.image.height;

        // Calculate the new dimensions to fit the canvas
        if (this.image.width >= this.image.height) {
            this.width = canvasWidth;
            this.height = canvasWidth / this.aspectRatio;
        } else {
            this.width = canvasHeight;
            this.height = canvasHeight * this.aspectRatio;
        }
        this.centerImage();
    }

    centerImage() {
        if (this.width >= this.height) {
            this.widthShift = 0;
            this.heightShift = (canvasHeight - this.height) / 2;
        } else {
            this.widthShift = (canvasWidth - this.width) / 2;
            this.heightShift = 0;
        }

    }
}
