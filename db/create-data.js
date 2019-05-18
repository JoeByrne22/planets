const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/solar-system');

const Planet = require('../models/planet');


const newPlanet = [
  {
    id: 0,
    name: 'Mercury',
    orbitTime: 87.97,
    img: 'http://4.bp.blogspot.com/-nEHTj8afz3Q/UCWd0FapXxI/AAAAAAAADSY/AKqjHXVHdPM/s1600/mercuryglobe.jpg',
    natives: 'Goopy shoopers'
  },
  {
    id: 1,
    name: 'Venus',
    orbitTime: 224.7,
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
    natives: 'Amazonians'
  },
  {
    id: 2,
    name: 'Earth',
    orbitTime: 365,
    img: 'http://2.bp.blogspot.com/_xjcwwA-nj8k/S9D9ixh0QqI/AAAAAAAAANw/Or6ldDwxI0k/s1600/earth.jpg',
    natives: 'Hoomanz'
  },
  {
    id: 3,
    name: 'Mars',
    orbitTime: 687,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1280px-OSIRIS_Mars_true_color.jpg',
    natives: 'Creepers'
  },
  {
    id: 4,
    name: 'Jupiter',
    orbitTime: 4332,
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
    natives: 'Long-tooth Fowl Mouths'
  },
  {
    id: 5,
    name: 'Saturn',
    orbitTime: 10759 ,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/2560px-Saturn_during_Equinox.jpg',
    natives: 'Smuggles'
  },
  {
    id: 6,
    name: 'Uranus',
    orbitTime: 30688,
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
    natives: 'Lordy Pops'
  },
  {
    id: 7,
    name: 'Neptune',
    orbitTime: 60182,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1280px-Neptune_Full.jpg',
    natives: 'Nettle-tunas'
  }
];

Planet.create(newPlanet);
