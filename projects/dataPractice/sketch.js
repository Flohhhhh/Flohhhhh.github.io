let data;
//let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDbK3uw7rK2eXZQa5wml5opFJzHjyET3U5M5X-al1En2LPZ4-OupFYk-b2XWd_G0q2abk5InYDhiKP/pub?output=csv'
let colors = ['#7D7DFF', '#70FFBC','#FF7080']
let Labels = ['Chipotle', 'Qdoba', 'Moes']
function preload() {
    //data = loadTable(url, 'csv', 'header');
  data = loadTable('dataPractice.csv', 'csv', 'header');

}
//
function setup() {
    createCanvas(windowWidth,windowHeight);
    background(20);
    noLoop();


}
//
function draw() {

  noStroke()
  fill('#FFFFFF')

  //this makes sure there is content in the data
   if (data) {

     //get the amount of rows in the CSV
     let numRows = data.getRowCount();

     //get the column titled Miles
     let Restaurant = data.getColumn('Restaurant');
     let Votes = data.getColumn("Votes");

     //debug
     print(Restaurant);
     print(Votes);

     //iterate over the number of rows
     for (let i = 0; i < numRows; i++) {

       fill(colors[i])
       let w = Votes[i]*80;  //miles by itself was small, so * to get a bigger #

      text(Labels[i],100,100+i*20)

      ellipse(windowWidth/2,windowHeight/2,w);
     }
   }
 }
