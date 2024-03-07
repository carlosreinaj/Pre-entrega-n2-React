

const products = [
    {
      id: "1",
      name: "Cortador de Verduras",
      price: 61000,
      category: "cocina",
      img: "https://m.media-amazon.com/images/I/510EryDPc8L._AC_SL1000_.jpg",
      stock: 25,
      description: "Descripcion de Cortador",
    },
    {
      id: "2",
      name: "Elevadores para muebles",
      price: 8500,
      category: "herramientas",
      img: 'https://m.media-amazon.com/images/I/512IKHkDFuL.jpg',
      stock: 16,
      description: "Descripcion de Elevadores",
    },
    {
      id: "3",
      name: "Mini aire acondicionado",
      price: 12500,
      category: "aires",
      img: "https://http2.mlstatic.com/D_NQ_NP_940539-MCO53736038503_022023-O.webp",
      stock: 0,
      description: "Descripcion de Ipad",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productoId));
      }, 1000);
    });
  };