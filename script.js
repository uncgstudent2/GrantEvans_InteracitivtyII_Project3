let imgArr=["https://npr.brightspotcdn.com/dims4/default/d0fefd8/2147483647/strip/true/crop/2560x1707+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F67%2F7c%2F6165e3d642faa8b5ecc33aa92e2c%2Fdsc09529.jpg","https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg"]
let imgIndex=0;

const button = document.getElementById('thisButton');

function clickThisButton(){
    document.getElementById('message').innerText = "button was clicked!";
    alert("hello guys!")
}

function changeImage(){
    document.getElementById('imgChange').src=imgArr[imgIndex];
    imgIndex+=1;
    if(imgIndex>imgArr.length-1){
        imgIndex=0;
    }
    console.log("image changed");
}