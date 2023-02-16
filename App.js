import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingList() {
  const [item, setItem] = useState('');
  const [priority, setPriority] = useState('low');
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = () => {
    setShoppingList([...shoppingList, { item: item, priority: priority }]);
    setItem('');
  };

  const deleteItem = (index) => {
    const newShoppingList = [...shoppingList];
    newShoppingList.splice(index, 1);
    setShoppingList(newShoppingList);
  };

  const sortByPriority = (level) => {
    const sortedList = [...shoppingList].sort((a, b) => {
      if (a.priority === level) return -1;
      if (b.priority === level) return 1;
      return 0;
    });
    setShoppingList(sortedList);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Minha lista de compras</h1>
      <div className="row mb-4">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Adicionar item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Baixa</option>
            <option value="medium">Media </option>
            <option value="high">Alta</option>
          </select>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-primary w-100" onClick={addItem}>
            Adicionar
          </button>
        </div>
      <div className="col-sm-6">
      <h3>Organizar por Prioridade</h3>
        <div className="my-4 d-flex align-center">
        
          <div className="btn-group">
            <button className="btn btn-secondary" onClick={() => sortByPriority('low')}>
              Baixa
            </button>
            <button className="btn btn-secondary" onClick={() => sortByPriority('medium')}>
              Média
            </button>
            <button className="btn btn-secondary" onClick={() => sortByPriority('high')}>
              Alta
            </button>
          </div>
        </div>
        <ul className="list-group">
          {shoppingList.map((item, index) => (
            <li key={index} className="list-group-item m-2 d-flex justify-content-between align-items-center">
              {item.item}
              <button className="btn btn-danger m-2" onClick={() => deleteItem(index)}>
                Apagar
              </button>
            </li>
          ))}
        </ul>
       </div>
      </div>
    </div>
  );
}

export default ShoppingList;
