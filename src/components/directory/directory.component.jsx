import { DirectoryContainer } from "./directory.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
    {
        id: 1,
        title: "Toys",
        imageUrl:
            "https://www.target.com.au/medias/static_content/product/images/full/82/17/A1898217.jpg?impolicy=product_portrait_hero",
        route: "shop/toys",
    },
    {
        id: 2,
        title: "Jackets & Coats",
        imageUrl:
            "https://www.target.com.au/medias/static_content/product/images/full/02/49/A1880249.jpg?impolicy=product_portrait_hero",
        route: "shop/jackets & coats",
    },
    {
        id: 3,
        title: "Shoes",
        imageUrl:
            "https://www.target.com.au/medias/static_content/product/images/full/87/60/A1818760.jpg?impolicy=product_portrait_hero",
        route: "shop/shoes",
    },
    {
        id: 4,
        title: "Babyware",
        imageUrl:
            "https://www.target.com.au/medias/sys_master/root/h2d/h0f/h00/h00/26493850517534/040522-Babywear-Sets-Multipacks.jpg",
        route: "shop/babyware",
    },
    {
        id: 5,
        title: "Baby Feeding",
        imageUrl:
            "https://www.target.com.au/medias/static_content/product/images/full/92/46/A1709246.jpg?impolicy=product_portrait_hero",
        route: "shop/baby feeding",
    },
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
