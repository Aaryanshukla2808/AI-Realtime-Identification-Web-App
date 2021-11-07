gamestatus = "";
function setup() {
    canvas = createCanvas(250,250);
    canvas.center();
    video = createVideo('https://www.bing.com/videos/search?q=wildlife+protection&adlt=strict&view=detail&mid=7CF7F98867391E4B0A207CF7F98867391E4B0A20&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dwildlife%2520protection%26qs%3Dn%26form%3DQBVR%26sp%3D-1%26pq%3Dwildlife%2520protection%26sc%3D8-19%26sk%3D%26cvid%3D0151C4A6A41C47FD9AE5AB42AA37F5FA%26adlt%3Dstrict');
    video.hide();
    video.size(250,250)
}
function start() {
    objectDetector = ml5.objectDetector('cocossd',modalloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    var obnamevalue = document.getElementById("obname").value;
}
function modalloaded() {
    console.log("modal has loaded succsesfully");
    gamestatus = true;
}
function draw() {
    image(video,0,0,250,250);
}