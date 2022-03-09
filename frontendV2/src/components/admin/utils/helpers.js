import jwt_decode from 'jwt-decode';
import ProductImages from '../ProductCreate/ProductImages';

export const getSelectValues = (arr = []) =>
  arr.map(({ value }) => value?.toLowerCase());

export const getOptions = (arr) => {
  if (!arr) return [];

  const options = arr.map(({ name, id }) => ({ label: name, value: id }));
  return options;
};

export const sizes = [
  {
    label: 'XS',
    value: 'xs',
  },
  {
    label: 'S',
    value: 's',
  },
  {
    label: 'M',
    value: 'm',
  },
  {
    label: 'L',
    value: 'l',
  },
  {
    label: 'XL',
    value: 'xl',
  },
];

export const colors = [
  '#b87145',
  '#f0c04a',
  '#333333',
  '#cc3333',
  '#3399cc',
  '#669933',
  '#f2719c',
  '#ebebeb',
];

export const categories = [
  {
    label: 'Furniture',
    value: 'furniture',
  },
  {
    label: 'Sofas & Sleeper Sofas',
    value: 'sofas & sleeper sofas',
  },
  {
    label: 'Beds',
    value: 'beds',
  },
  {
    label: 'Electronics',
    value: 'electronics',
  },
  {
    label: 'Arm Chair & Chaises',
    value: 'arm chair & chaises',
  },
  {
    label: 'Decoration',
    value: 'decoration',
  },
  {
    label: 'Lightning',
    value: 'lightning',
  },
  {
    label: 'Coffee & Tables',
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
    label: 'Storage Boxes & Baskets',
    value: 'Storage Boxes & Baskets',
  },
  {
    label: 'Clothing',
    value: 'clothing',
  },
];

export const massList = [
  {
    label: 'g',
    value: 'g',
  },
  {
    label: 'oz',
    value: 'oz',
  },
  {
    label: 'lb',
    value: 'lb',
  },
  {
    label: 'kg',
    value: 'kg',
  },
];

export const distanceList = [
  {
    label: 'in',
    value: 'in',
  },
  {
    label: 'ft',
    value: 'ft',
  },
  {
    label: 'm',
    value: 'm',
  },
  {
    label: 'yd',
    value: 'yd',
  },
];

export const brands = [
  {
    label: 'UGG',
    value: 'ugg',
  },
  {
    label: 'River Island',
    value: 'river island',
  },
  {
    label: 'Nike',
    value: 'nike',
  },
  {
    label: 'F&F',
    value: 'f&f',
  },
  {
    label: 'Geox',
    value: 'geox',
  },
  {
    label: 'New Balance',
    value: 'new balance',
  },
];

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
};

export const getUpdateProductDetails = (product) => {
  if (!product) return product;
  const {
    name,
    price,
    pictures,
    smPictures,
    variants,
    sizes,
    category,
    brands,
    parcel = {},
  } = product;

  const variantColor = [];

  variants &&
    variants.forEach((variant) => {
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
    sizes:
      sizes &&
      sizes.map((ele) => ({
        label: ele?.toUpperCase(),
        value: ele?.toLowerCase?.(),
      })),
    category: category && category.map((ele) => ({ label: ele, value: ele })),
    brands: brands && brands.map((ele) => ({ label: ele, value: ele })),
    ...parcel,
  };
  return productDetails;
};

export const getUpdateProductImages = (product) => {
  const obj = {};
  // eslint-disable-next-line no-unused-expressions
  product?.productImages?.forEach(({ name, ...rest }) => {
    obj[name] = {
      name,
      ...rest,
    };
  });

  return obj;
};

export const getValue = (options, checkValue) => {
  if (!options || !checkValue) {
    return null;
  }
  const obj = options.filter((option) => option.value === checkValue);
  return obj;
};
