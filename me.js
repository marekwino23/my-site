  var images = [];
  let i = 0;
  images[0] = './images/106749555_2942206545888909_3103146048145200271_n (1).jpg' 
  images[1] = './images/106454411_2938087632967467_218408720211065629_n.jpg'

  function changeImg(){
    const photo = document.getElementById("me")
    console.log(photo.src)
    photo.src = images[i]
    if(i< images.length - 1){
      i++
    }
    else if(i==1){
      i=0
    }
  }
setTimeout("changeImg()", 1000)
window.onload = setInterval(changeImg, 3000);