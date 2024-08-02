import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import axios from 'axios';
import './styles.css';

interface Customer {
  id: string;
  name: string;
  title: string;
  address: string;
}

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/mockData.json'); // Adjust the URL as needed
        const fetchedCustomers: Customer[] = response.data;
        setCustomers(fetchedCustomers);

        if (fetchedCustomers.length > 0) {
          // Set the ID of the first customer as selected by default
          setSelectedCustomerId(fetchedCustomers[0].id);
        }
      } catch (error) {
        console.error('Error fetching customers', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleSelectCustomer = (id: string) => {
    setSelectedCustomerId(id);
  };

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId) || null;

  return (
    <div className="app">
      <div className="sidebar">
        <CustomerList onSelectCustomer={handleSelectCustomer} selectedCustomerId={selectedCustomerId} />
      </div>
      <div className="main-content">
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
