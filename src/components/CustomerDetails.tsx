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
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=9');
        const data = await response.json();
        setPhotos(data.map((photo: any) => photo.url));
      } catch (error) {
        console.error('Error fetching photos', error);
      }
    };

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
