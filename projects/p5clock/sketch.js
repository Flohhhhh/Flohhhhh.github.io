function setup() {
  createCanvas(800, 800);

  angleMode(DEGREES)
  imageMode(CENTER)

  bg = loadImage('https://i.imgur.com/jbtIgxm.png');
  mnthimg = loadImage('https://i.imgur.com/iAesZeO.png');
  dimg = loadImage('https://i.imgur.com/MNi1OFY.png');
  hrimg = loadImage('https://i.imgur.com/BMJadX7.png');
  miimg = loadImage('https://i.imgur.com/TpJ6mwm.png');
  secimg = loadImage('https://i.imgur.com/dSdQqKn.png');

  frameRate(2)
}

function draw() {

  //get time
  let yr = year();
  let mth = month();
  let d = day();
  let hr = hour();
  let min = minute();
  let sec = second();

  let mthend = map(mth, 1,12,0,360)
  let dend = map(d, 1,30,0,360)
  let hrend = map(hr % 12, 1,12,0,360)
  let minend = map(min, 0,60,0,360)
  let secend =map(sec, 0,60,0,360)


  translate(400,400)
  push()
  background(220);

  image(bg, 0, 0);

  //MONTH
  rotate(mthend)

  print('month ' + mth + ' ' + mthend + '*')
  image(mnthimg, 0, 0);
  pop()

  //DAY
  push()
  rotate(dend)
  print('day ' + d + ' ' + dend + '*')
  image(dimg, 0, 0);
  pop()

  //HOUR
  push()
  rotate(hrend)
  print('hour ' + hr + ' ' + hrend + '*')
  image(hrimg, 0, 0);
  pop()

  //MINUTE
  push()
  rotate(minend)
  print('min ' + min + ' ' + minend + '*')
  image(miimg, 0, 0);
  pop()

  //SECOND
  push()
  rotate(secend)
  print('sec ' + sec + ' ' + secend + '*')
  image(secimg, 0, 0);
  pop()
}
