function Products() {
    const products = [
        {title: 'Cabbage', id: 1},
        {title: 'Mango', id: 2},
        {title: 'Garlic', id: 3},
        {title: 'Apple', id: 4}
    ];
    const listItems = products.map(product=>
        <li key={product.id}>
            {product.title} <input type="checkbox" name="" id="" />
        </li>
    );

    return <ul>{listItems}</ul>;
}

export default Products