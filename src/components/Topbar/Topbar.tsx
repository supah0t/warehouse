import { useState, FC } from 'react';

import { InputGroup, Form } from 'react-bootstrap';

import './style.css';

type TopbarProps = {
  currentItem: string;
};

export const Topbar: FC<TopbarProps> = ({ currentItem }) => {
  //do something with the search result
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="topbar-layout">
      <h4>{currentItem}</h4>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Αναζήτηση υλικού, έλεγχος αποθεμάτων"
          aria-label="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </InputGroup>
    </div>
  );
};
