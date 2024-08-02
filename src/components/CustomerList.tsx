import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Customer {
  id: string;
  name: string;
  title: string;
  address: string;
}

const CustomerList: React.FC<{ onSelectCustomer: (id: string) => void; selectedCustomerId: string | null }> = ({ onSelectCustomer, selectedCustomerId }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/mockData.json');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers', error);
      }
    };

    fetchCustomers();
  }, []);

  const truncateAddress = (address: string, maxWords: number = 28): string => {
    const words = address.split(' ');
    if (words.length > maxWords) {
      return `${words.slice(0, maxWords).join(' ')}...`;
    }
    return address;
  };

    return (
      
    <div className="customer-list">
      {customers.map((customer) => (
        <div 
          key={customer.id} 
          className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer.id)}
        >
          <h3>{customer.name}</h3>
          <p>{customer.title}</p>
          <p>{truncateAddress(customer.address)}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
