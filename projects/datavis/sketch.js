let table
let numRows
let lng
let lat
let bright

function preload() {
  table = loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vSUVUSFUjehZMZ1EAwqU2q29sLQsDAxlKH-kzlw6mpP21c3q-ZlSXA7H1c02hybhzcWV0_ffgcy-FxM/pub?gid=1420231870&single=true&output=csv', 'csv', 'header');
  img = loadImage('https://i.imgur.com/LmrG8OV.png');
  bgimg = loadImage('https://i.imgur.com/7fMKAGW.png');
  titleimg = loadImage('https://i.imgur.com/cxqZmKJ.png');
  rangeimg = loadImage('https://i.imgur.com/coYv7gn.png');
}

function setup() {
  createCanvas(800, 800);
  background(15);
  image(bgimg,0,0,width,height);
  image(titleimg,0,0,991/2,225/2);
  image(rangeimg,0,height-167/2,908/2,167/2);
  createP('<p class=link><a href="https://www.kaggle.com/carlosparadis/fires-from-space-australia-and-new-zeland">Data Source: https://www.kaggle.com/carlosparadis/fires-from-space-australia-and-new-zeland</a></p> -->');
  noLoop();

  blendMode(ADD);

  numRows = table.getRowCount();
  print(numRows);

  lat = table.getColumn('latitude');
  lng = table.getColumn('longitude');
  bright = table.getColumn('brightness');

  minLat = min(lat);
  maxLat = max(lat);

  minLng = min(lng);
  maxLng = max(lng);

  minBright = min(bright);
  maxBright = max(bright);

  print (minLat, maxLat);
  print (minLng,maxLng);
  print (minBright, maxBright);

}

function draw() {


  noStroke();

     for (let i = 0; i < numRows; i++) {

     let longMap = map(lng[i], minLng, maxLng, 50, width-50);
     let latMap = map(lat[i], minLat, maxLat, height-50, 50);
     let brightMap = map(bright[i], minBright, maxBright,2,20);

     image(img,longMap, latMap, brightMap, brightMap);

   }

}
