

export const getValue = (options, checkValue) => {
  console.log('====================================');
  console.log({ options, checkValue });
  console.log('====================================');
  if (!options || !checkValue) {
    return [];
  }
  const obj = options.filter((option) => option.value === checkValue);
  console.log('====================================');
  console.log({ obj });
  console.log('====================================');
  return obj;
};


export const getSelectValues = (arr = []) => {
  arr.map(({ value}) => value).join(', ')
}

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