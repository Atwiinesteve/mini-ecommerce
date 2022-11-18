import React from 'react';

import '../components/Main.css';

import Product from './Product';

function Main() {

  return (
    <div className="main__area">
      <div className="products__header">
        <p>my products</p>
      </div>
      <div className="products__area">
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519780/cld-sample-5.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519759/samples/ecommerce/shoes.png" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519755/samples/ecommerce/analog-classic.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519755/samples/animals/cat.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519756/samples/food/dessert.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519758/samples/food/pot-mussels.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519757/samples/food/fish-vegetables.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519761/samples/animals/three-dogs.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519763/samples/ecommerce/car-interior-design.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519760/samples/bike.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519766/samples/cloudinary-group.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519778/cld-sample.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519767/samples/animals/kitten-playing.gif" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519766/samples/landscapes/nature-mountains.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519765/samples/food/spices.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519764/samples/ecommerce/accessories-bag.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519764/samples/ecommerce/leather-bag-gray.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519762/samples/people/bicycle.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519760/samples/people/boy-snow-hoodie.jpg" />
        <Product name="Shoes" description="very nice and strong" price="4,500" image="https://res.cloudinary.com/dftrzn7xd/image/upload/v1668519763/samples/landscapes/beach-boat.jpg" />
      </div>
    </div>
  );

}

export default Main