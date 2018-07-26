// init images array
var images = [
    { caption: "Beach", url: "https://static.boredpanda.com/blog/wp-content/uploads/2017/04/taken-bydoyoutravel-1-png__700.jpg" },
    { caption: "London", url: "https://guarantee-tours.com/wp-content/uploads/2016/03/munich_isar_germany_bavaria_98059_3840x2160-500x500.jpg" },
    { caption: "Water", url: "http://www.anewyorkchapter.com/wp-content/uploads/2017/08/FullSizeRender-2-e1502472525754-500x500.jpg" },
    { caption: "Pyramid", url: "http://www.globotours.net/wp-content/uploads/2016/10/Egypt-500.jpg" },
    { caption: "Planes", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfI_LgCXKMWinS9fFKlF1kQP84qQVM3fr7BmKLYnyZYILE-1U"}, 
    { caption: "Cambodia", url: "https://www.theultimatetravelcompany.co.uk/wp-content/uploads/2015/04/shutterstock_289362896-500x500.gif"},
    { caption: "Berlin", url: "http://cdn.web30s.vn/datafiles/5008/upload/images/14776258948456_Berlin-500x500.jpg"}
];
// init container variabled
var container = document.querySelector('.image-list');
var modal = document.querySelector('.modal');
// imageIndex is current index
var backdrop = document.querySelector('.backdrop');
// loop through images, add to DOM dynamically
images.forEach( function (image, imageIndex) {
    // image
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.url);
    newImage.classList.add('img');
    // caption
    var caption = document.createElement('p');
    caption.textContent = image.caption;
    caption.classList.add('caption');
    // list item
    var listItem = document.createElement('li');
    listItem.appendChild(newImage);
    listItem.appendChild(caption);
    listItem.classList.add('listItem');

    // light box image
    var lightBoxImage = document.querySelector('.lightBoxImage');
    // on click
    listItem.addEventListener('click', function () {
        lightBoxImage.setAttribute('src', (image.url));
        modal.classList.toggle('open');
        backdrop.classList.toggle('open');
    });
    // 
    container.appendChild(listItem);
    var currentImage = newImage.getAttribute('src');
    console.log(currentImage);
});
// 
 var closeModal = function () {
     modal.classList.toggle('open');
     backdrop.classList.toggle('open');
 };
// 
backdrop.addEventListener('click', closeModal);
// modal handles carousal
currentImg = images[2];