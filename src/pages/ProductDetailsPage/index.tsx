import Breadcrumb from '../../components/Breadcrumb'; 

const ProductDetailsPage = () => {
  
 
  const breadcrumbCrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Catalog', href: '/catalog' },
    { label: 'Smartphones', href: '/catalog/smartphones' },
    { label: 'Apple', href: '/catalog/smartphones/apple' },
    { label: 'iPhone 14 Pro Max' }, 
  ];

  return (
    
    <div className="container mx-auto p-4">
      
 
     
      <div className="mb-8">
        <Breadcrumb crumbs={breadcrumbCrumbs} />
      </div>

     
      <div className="text-center text-gray-400">
        <p>Teste - virá depois</p>
      </div>

    </div>
  );
};

export default ProductDetailsPage;