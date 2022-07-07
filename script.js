class Item {
    constructor(id, image, author, date, camera) {
      this.id = id
      this.image = image;
      this.author = author;
      this.date = date;
      this.camera = camera;
    }
  }
  
  const galleryData = [
    ['Heidi Kaden', 'October 3, 2019', 'SONY, ILCE-6000'],
    ['Tânia Mousinho', 'February 15, 2021','Apple, iPhone 8 Plus'],
    ['Ryan', 'August 1, 2018', 'LEICA CAMERA AG, LEICA Q (Typ116)'],
    ['Vesela Vaclavikova', 'January27 2019', 'FUJIFILM, X-T10'],
    ['Philip Jahn', 'October 31, 2020', 'SONY, ILCE-7'],
    ['Massimiliano Donghi', 'April 12, 2018', 'Canon, EOS 750D'],
    ['Claudia Aguilar', 'October 21, 2020', 'NIKON CORPORATION, NIKON D3300'],
    ['Zuzanna Krawczyk', 'March 15, 2021', 'OLYMPUS CORPORATION, E-PL9'],
    ['Eryka-Ragna', 'August 6, 2021', 'Apple, iPhone 12 Pro'],
    ['David Tip', 'July 30, 2019', 'Canon, EOS 550D'],
    ['Andre Benz', 'June 12, 2017', 'Canon, EOS 5D Mark IV'],
    ['Andreas M', 'April 18, 2020', 'Canon, EOS 80D']
  ]
  
  const $gallery = document.getElementById('gallery');
  const $showroom = document.getElementById('showroom')
  const gallery = []
  
  // create all images
  for (let index = 0; index < 12; index++) {
    const item = new Item
    item.id = index+1
    item.author = galleryData[index][0]
    item.image = new Image()
    item.image.src = './images/gallery'+item.id+'.jpg'
  
    const $item = `
      <div class='gallery-item'>
        <picture>
          <source srcset="images/gallery${item.id}-320_x_240.jpg 320w"
                  media="(max-width: 320px)">
          <source srcset="images/gallery${item.id}-640_x_480.jpg 640w"
                  media="(max-width: 640px)">
          <source srcset="images/gallery${item.id}-1024_x_768.jpg 1024w,"
                  media="(max-width: 1024px)">
          <img class='gallery-item-img' src="images/gallery${item.id}-1024_x_768.jpg" data-id="${item.id}" alt="placeholder">
        </picture>
        <p>${item.author}</p>
      </div>
    `
    gallery.push($item)
  }
  

  $gallery.innerHTML += gallery.join('')
  
  $gallery.addEventListener('mouseover',handleMouseover)
  $gallery.addEventListener('mouseout',handleMouseout)
  $gallery.addEventListener('click',handleItemClick)
  
  function handleItemClick(e) {
    if(e.target.classList.contains('gallery-item-img')){
      const id = e.target.dataset.id-1
      console.log(e.target.src,galleryData[id][0])
      const showroomContent = `
      <div class = 'showroom-image'>
        <picture>
          <source srcset="images/gallery${id+1}-320_x_240.jpg 320w"
                  media="(max-width: 320px)">
          <source srcset="images/gallery${id+1}-640_x_480.jpg 320w"
                  media="(max-width: 640px)">
          <source srcset="images/gallery${id+1}-1024_x_768.jpg 320w"
                  media="(max-width: 1024px)">
          <img src='${e.target.src}'/>
        </picture>
      </div>
      <div class='image-detail'>
        <p>Author: ${galleryData[id][0]}</p>
        <hr>
        <p>Pubilish Date: ${galleryData[id][1]}</p>
        <hr>
        <p>Camera: ${galleryData[id][2]}</p>
      </div>
      `
      $showroom.innerHTML = showroomContent
      

    }
  }
  
  function handleMouseover(e) {
    if(e.target.classList.contains('gallery-item-img')){
      document.body.style.cursor = 'pointer'
    }
  }
  
  function handleMouseout(e) {
    document.body.style.cursor = 'default'
  }
  
 