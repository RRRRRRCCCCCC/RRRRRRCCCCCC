// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x1 = 0, y1 = 0, dx1 = 1, dy1 = 1, r1 = 50, color1 = "	#D2E9FF", m1=3;
let x2 = canvas.width, y2 = 0, dx2 =-3, dy2 = 5, r2 = 25, color2 = "#FFDAC8", m2=1;
let adx1 = (m1-m2)*dx1 + 2*m2*dx2 / (m1+m2) , ady1 = (m1-m2)*dy1 + 2*m2*dy2 / (m1+m2) , adx2 = (m2-m1)*dx2 + 2* m1*dx1 / (m1+m2) , ady2 = (m2-m1)*dy2 + 2*m1*dy1 / (m1+m2);
// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x1 = x1 + dx1;
    y1 = y1 + dy1;

    x2 = x2 + dx2;
    y2 = y2 + dy2;
  
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
  
  if (x1 < 0 || x1 > canvas.width) dx1= -dx1;
  if (y1 < 0 || y1 > canvas.height) dy1=-dy1;
  
  if (x2 < 0 || x2 > canvas.width) dx2= -dx2;
  if (y2 < 0 || y2 > canvas.height) dy2= -dy2;

  if((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)<(r1+r2)*(r1+r2))
  {
    [dx1, dy1, dx2, dy2] = [adx1, ady1, adx2, ady2];
  }
    drawBall(x1, y1, r1, color1);
    drawBall(x2, y2, r2, color2);
  
    requestAnimationFrame(draw);
}
draw();