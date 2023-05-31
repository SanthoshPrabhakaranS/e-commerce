import ProductService from "@/services/products.service";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import HeroImg from "../../assets/S1.jpg";
import ShopNav from "@/components/shop-nav";
import ShopItems from "@/components/shop-items";
import { useDispatch } from "react-redux";
import { addProduct } from "@/features/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Shop = ({ data }) => {
  const router = useRouter();
  const { categoryId } = router.query;
  const dispatch = useDispatch()
  
  const _addProductToCart = (productName, productImage, id, productPrice) => {
     dispatch(addProduct({
      id,
      productName,
      productImage,
      productPrice
    }))
    toast.success("Item added successfully!")
  }
  return (
    <div className="flex flex-col gap-5 h-full">
      <Toaster position="top-right" reverseOrder={false} />
        <div className="p-0 md:py-3 md:px-5 relative flex justify-center items-center">
          <div className="absolute text-center">
            <h1 className="text-[2rem] font-semibold">
              {categoryId.toUpperCase()}
            </h1>
            <p>Shop &gt; {categoryId}</p>
          </div>
          <Image
            src={HeroImg}
            alt="hero-img"
            className="h-full min-h-[500px] md:max-h-[500px] w-full object-cover"
          />
        </div>
        <ShopNav pathName={categoryId} />
        <div className="flex flex-row flex-wrap gap-x-3 gap-y-6 w-full max-w-[1000px] mx-auto">
          {data.map((item) => {
            return <ShopItems _addProductToCart={_addProductToCart} item={item} key={item._id} />;
          })}
        </div>
    </div>
  );
};

export default Shop;

export async function getStaticPaths() {
  const _ApiService = new ProductService();
  const response = await _ApiService.getAllProducts();
  const data = await response.data;
  const paths = data?.map((item) => {
    return {
      params: {
        categoryId: item.productCategory.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const categoryId = params.categoryId;
  const _ApiService = new ProductService();
  const response = await _ApiService.getProducts(categoryId);
  const data = await response.data;
  return {
    props: {
      data: data,
    },
  };
}
