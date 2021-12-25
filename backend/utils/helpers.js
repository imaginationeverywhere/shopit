const arrayPad = (arr, len, val) => {
   const newArr = [...arr];
    if(!val) return newArr;
    while (newArr.length < len) {
        newArr.push(val);
    }
    return newArr;
};

const getOldImagesFromProduct = (product) => {
    const {
      pictures,
      smPictures,
    } = product;
    const obj = {};
    pictures.forEach((picture, index) => {
      obj[`picture${index + 1}`] = picture;
    });
    smPictures.forEach((picture, index) => {
        obj[`smPicture${index + 1}`] = picture;
    });
    return obj;
  }

const getPublicId = (url) => {
    // regex test for a valid url
    if(!url) return '';
    if(!url.match(/^(http:\/\/|https:\/\/).+/)) return ''; 
    // get public_id from cloudinary url;
    const splitArr = url.split('/');
    const fileNameWithExtension = splitArr[splitArr.length - 1];
    const fileName = fileNameWithExtension.split('.')[0];
    const id = `${splitArr[splitArr.length - 2]}/${fileName}`;
    return id;
}

module.exports = {
    arrayPad,
    getOldImagesFromProduct,
    getPublicId
};