async function data() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const products = data.products[0];
    console.log(products);
  } catch (error) {
    console.log("cannot fetch", error);
  }
}

data();
