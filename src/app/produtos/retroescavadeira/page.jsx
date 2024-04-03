import React from "react";
import Product from "@/components/produtos/product"; // Importando o componente ProductPage
import BHL75 from "@/data/produtos/retroescavadeira/bhl75"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={BHL75} />
  );
}
export default ProductPage;
