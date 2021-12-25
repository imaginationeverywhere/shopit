import jwt_decode from 'jwt-decode';

export const getValue = (options, checkValue) => {
  if (!options || !checkValue) {
    return [];
  }
  const obj = options.filter((option) => option.value === checkValue);
  return obj;
};


export const getSelectValues = (arr = []) => arr.map(({ value}) => value).join(', ');


export const getOptions = (arr) => {
  if (!arr) return [];

  const options = arr.map(({ name, id }) => ({ label: name, value: id }));
  return options;
};

export const sizes = [
  {
    label: 'XS',
    value: 'XS',
  },
  {
    label: 'S',
    value: 'S',
  },
  {
    label: 'M',
    value: 'M',
  },
  {
    label: 'L',
    value: 'L',
  },
  {
    label: 'XL',
    value: 'XL',
  }
]

export const categories = [
  {
    label: 'Furniture',
    value: 'furniture',
  },
  {
    label: 'sofas & sleeper sofas',
    value: 'sofas & sleeper sofas',
  },
  {
    label: 'beds',
    value: 'beds',
  },
  {
    label: 'electronics',
    value: 'electronics',
  },
  {
    label: 'arm chair & chaises',
    value: 'arm chair & chaises',
  },
  {
    label: 'decoration',
    value: 'decoration',
  },
  {
    label: 'lightning',
    value: 'lightning',
  },
  {
    label: 'coffee & tables',
    value: 'coffee & tables',
  },
  {
    label: 'Women',
    value: 'women',
  },
  {
    label: 'Men',
    value: 'men',
  },
  {
    label: "Storage Boxes & Baskets",
    value: "Storage Boxes & Baskets"
  },
  {
    label: "Clothing",
    value: "Clothing"
  }
]

export const brands = [
  {
    label: 'UGG',
    value: 'UGG'
  },
  {
    label: 'River Island',
    value: 'River Island'
  },
  {
    label: 'Nike',
    value: 'Nike'
  },
  {
    label: 'F&F',
    value: 'F&F'
  },
  {
    label: 'Geox',
    value: 'Geox'
  },
  {
    label: 'New Balance',
    value: 'New Balance'
  }
]

export const isTokenValid = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }
  return false;
}

export const getUpdateProductDetails = (product) => {
  console.log("{product}");
  if(!product) return product
  const {
    name,
    price,
    pictures,
    smPictures,
    variants,
    sizes,
    category,
    brands,
  } = product;

  const variantColor = [];

  variants && variants.forEach(variant => {
    const color = variant && variant.color;
    color && variantColor.push(color);
  });


  const productDetails = {
    ...product,
    name,
    price,
    pictures,
    smPictures,
    variants: variantColor,
    sizes: sizes && sizes.map((ele) => ({ label: ele, value: ele})),
    category: category && category.map((ele) => ({ label: ele, value: ele})),
    brands: brands && brands.map((ele) => ({ label: ele, value: ele})),
  };
  return productDetails;
}

export const getUpdateProductImages = (product) => {
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