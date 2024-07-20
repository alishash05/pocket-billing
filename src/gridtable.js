/*import React, { useState, useEffect } from 'react';
import Table from './Table';

function Gridtable() {
  const [data, setData] = useState([
    { srno: '1', item: 'pen', quantity: '5', amount: '50' },
    { srno: '2', item: 'pen', quantity: '20', amount: '200' },
    { srno: '3', item: 'pen', quantity: '10', amount: '100' },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalGstAmount, setTotalGstAmount] = useState(0);
  const [totalServiceTaxAmount, setTotalServiceTaxAmount] = useState(0);

  useEffect(() => {
    calculateTotals();
  }, [data]);

  const calculateTotals = () => {
    let total = 0;

    data.forEach((item) => {
      total += parseInt(item.amount);
    });

    const gstTotal = total * 0.18;
    const serviceTaxTotal = total * 0.2;

    setTotalAmount(total);
    setTotalGstAmount(gstTotal);
    setTotalServiceTaxAmount(serviceTaxTotal);
  };

  const addRow = () => {
    const newRow = { srno: '', item: '', quantity: '', amount: '' };
    setData([...data, newRow]);
  };

  const deleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div>
      <Table
        data={data}
        heading={['Sr No.', 'Item', 'Quantity', 'Amount']}
        totalAmount={totalAmount}
        totalGstAmount={totalGstAmount}
        totalServiceTaxAmount={totalServiceTaxAmount}
        setData={setData}
        addRow={addRow}
        deleteRow={deleteRow}
      />
    </div>
  );
}

export default Gridtable*/

import React, { useState, useEffect } from 'react';
import Table from './Table';

function Gridtable() {
  const [data, setData] = useState([
    { srno: '1', item: 'pen', quantity: '5', amount: '50' },
    { srno: '2', item: 'pen', quantity: '20', amount: '200' },
    { srno: '3', item: 'pen', quantity: '10', amount: '100' },
	{ srno: '4', item: 'pen', quantity: '20', amount: '200' },
    { srno: '5', item: 'pen', quantity: '10', amount: '100' },

  ]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalGstAmount, setTotalGstAmount] = useState(0);
  const [totalServiceTaxAmount, setTotalServiceTaxAmount] = useState(0);

useEffect(()=>{
	calculateTotals();
}, [data]);

const calculateTotals =()=>{
let total = 0;

data.forEach((item) =>{
    total += parseInt(item.amount);
});

const gstTotal = total * 0.18;
const serviceTaxTotal = total * 0.2;

setTotalAmount(total);
setTotalGstAmount(gstTotal);
setTotalServiceTaxAmount(serviceTaxTotal);
}

const addRow =()=>{
    const newRow ={ srno: '', item: '', quantity: '', amount: '' };
    setData([...data, newRow]);
}

const deleteRow =(index)=>{
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
}

return(
    <div>
      <Table
        data={data}
        heading={['Sr No.', 'Item', 'Quantity', 'Amount']}
        totalAmount={totalAmount}
        totalGstAmount={totalGstAmount}
        totalServiceTaxAmount={totalServiceTaxAmount}
        setData={setData}
        addRow={addRow}
        deleteRow={deleteRow}
      />
    </div>
  );
}

export default Gridtable