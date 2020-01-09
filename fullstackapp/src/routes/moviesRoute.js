var express = require('express');
var moviesRouter = express.Router();

var movies = [
    {
       "_id": "5ab12612f36d2879268f284a",
       "name": "Black Panther",
       "language": "ENGLISH",
       "rate": 4.5,
       "type": "Action Adventure Fantasy",
       "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
     },
     {
       "_id": "5ab12666f36d2879268f2902",
       "name": "Death Wish",
       "language": "ENGLISH",
       "type": "Action Crime Thriller",
       "rate": 3.2,
       "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
     },
     {
       "_id": "5ab12678f36d2879268f291d",
       "name": "Coco",
       "language": "ENGLISH",
       "type": "Adventure Animation Family",
       "rate": 5,
       "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
     },
     {
       "_id": "5ab126b6f36d2879268f2943",
       "name": "Avengers",
       "language": "ENGLISH",
       "type": "Actione",
       "rate": 2,
       "imageUrl": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg"
     },
     {
       "_id": "5ab4e66b0c1d2b27846c6407",
       "name": "Black Friday",
       "language": "ENGLISH",
       "rate": 4.5,
       "type": "Action Adventure Fantasy",
       "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
     },
     {
       "_id": "5ab12686f36d2879268f2930",
       "name": "Mission Impossible",
       "language": "English",
       "rate": 2.5,
       "type": "Horror Thriller",
       "imageUrl": "https://pre00.deviantart.net/5d3b/th/pre/f/2017/313/2/b/mission_impossible__dark_directive_teaser_poster_by_themadbutcher-dbt9wav.png"
     }
   ]


function router(menu){
    
    moviesRouter.route('/')
        .get((req,res) => {
            res.render('movies',{title:'Movies Page',menu:menu,movies:movies})
    });


    moviesRouter.route('/details')
        .get((req,res) => {
            res.render('moviesDetails',{title:'Movies Details Page',menu:menu,movies:movies})
    });

    return moviesRouter
}



module.exports = router;