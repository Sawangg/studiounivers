import React from "react";
import type { NextPage } from "next";
import { apiEndpoint } from "@lib/constants";
import { Footer } from "@modules/Footer";
import { Features } from "@modules/landing/Features";
import { NewListings } from "@modules/landing/NewListings";
import { Navbar } from "@modules/Navbar";
import { ProductBlock } from "@modules/product/ProductBlock";
import { Product } from "@type/Product";
import { User } from "@type/User";

export interface ProductPageProps {
    user: User | null;
    product: Product;
    alsoLikeProducts: Array<Product> | null;
}

const getAlsoLikeProducts = async () => {
    const res = await fetch(`${apiEndpoint}/api/product/newest`);
    const data = await res.json();
    return data as Array<Product>;
};

export const getProduct = async (id: number) => {
    const res = await fetch(`${apiEndpoint}/api/product/${id}`);
    const data = await res.json();
    return data as Product;
};

// export const getServerSideProps = withAuthSsr(async (context: GetServerSidePropsContextUser) => {
//     try {
//         const product = await getProduct(+context.params!.id!);
//         const alsoLikeProducts = await getAlsoLikeProducts();
//         return {
//             props: {
//                 user: context.user,
//                 alsoLikeProducts,
//                 product,
//                 ...(await serverSideTranslations(context.locale!, ["common"])),
//             },
//         };
//     } catch {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: "/",
//             },
//         };
//     }
// });

const ProductPage: NextPage<ProductPageProps> = ({ user, product, alsoLikeProducts }) => (
    <>
        <div className="flex h-screen w-full flex-col tracking-normal">
            <Navbar user={user} />
            <ProductBlock
                productId={product.id}
                title={product.name}
                price={product.price}
                description={product.description}
                imagePath={product.photos[0]}
            />
            {/* Replace by AlsoLike when component is done */}
            <NewListings newestProducts={alsoLikeProducts!} />
            <Features />
            <Footer />
        </div>
    </>
);

export default ProductPage;