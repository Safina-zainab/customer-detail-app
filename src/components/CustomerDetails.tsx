import React, { useEffect, useState } from 'react';

interface Customer {
  id: string;
  name: string;
  title: string;
  address: string;
}

const CustomerDetails: React.FC<{ customer: Customer | null }> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const randomQuery = Math.random().toString(36).substring(7); 
        const randomPage = Math.floor(Math.random() * 100) + 1; 
        const response = await fetch(`https://pixabay.com/api/?key=45257888-c99e557ed01d129c4677b624f&q=plants+trees&image_type=photo&pretty=true&per_page=9&page=${randomPage}&randomQuery=${randomQuery}`);
        const data = await response.json();
        setPhotos(data.hits.map((photo: any) => photo.webformatURL));
      } catch (error) {
        console.error('Error fetching photos', error);
      }
    }

    fetchPhotos();

    const intervalId = setInterval(fetchPhotos, 10000);

    return () => clearInterval(intervalId);
  }, []);

  if (!customer) {
    return <div>Select a customer to view details</div>;
  }

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <h3>{customer.title}</h3>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
