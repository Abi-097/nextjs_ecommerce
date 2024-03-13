import React from "react";
import Product from "@/lib/models/ProductModel";
import Link from "next/link";
import Image from "next/image";
const productItem = ({ product }) => {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.image}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
    </div>
  );
};

export default productItem;
