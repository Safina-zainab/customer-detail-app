import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import './styles.css';

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  const handleSelectCustomer = (id: string) => {
    setSelectedCustomerId(id);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <CustomerList onSelectCustomer={handleSelectCustomer} selectedCustomerId={selectedCustomerId} />
      </div>
      <div className="main-content">
        {/* Details for the selected customer will be displayed here */}
      </div>
    </div>
  );
};

export default App;
