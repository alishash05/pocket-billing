/*import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Tr from './Tr';
import Thead from './Thead';

const useStyles = createUseStyles({
tableContainer:{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
	maxHeight:'1px',
    background: 'white',
	border: '1px solid gray',
},
totalAmount:{
    color: 'none',
    alignItems:'center',
    fontSize: '15px',
    height: '34px',
    backgroundColor: 'white',
   // border: '1px solid gray',
    display: 'flex',
    justifyContent: 'center',
    padding: '0px',
    marginBottom: '10px',
    textAlign: 'right',
},
text_content:{
	border: '1px solid white',
	height: '32px',
	backgroundColor:'white',
	width: '100%',
	maxWidth: '350px',
	marginLeft: '240px',
	textAlign: 'center',
},
text_bar:{
	border: '1px solid white',
	height: '32px',
	backgroundColor: 'white',
	width: '100%',
	maxWidth: '56px',
},
input:{
	height: '26px',
	backgroundColor: 'white',
	width: '100%',
	maxWidth: '319px',
	border: '1px solid white',
}
});

function Table(props){
	const classes = useStyles();
	const [rowData, setRowData] = useState(props.data);
	const [newRowData, setNewRowData] = useState({
	srNo: '',
	item: '',
	quantity: '',
    amount: '',
  });

  useEffect(() => {
    setRowData(props.data);
  }, [props.data]);

  const evenOdd = (number) => {
    return number % 2 === 0;
  }

  const InputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...rowData];
    updatedData[index] = {
      ...updatedData[index],
      [name]: value,
    }
    updatedData[index].amount = parseInt(updatedData[index].quantity) * 10;
    props.setData(updatedData);
    setRowData(updatedData);
  }

  const addRow = () => {
    if (
      newRowData.item === '' ||
      newRowData.quantity === ''
    ) {
      alert('PLEASE FILL ALL INFORMATION');
      return;
    }

    const newAmount = parseInt(newRowData.quantity) * 10;

    const newRow = {
      srNo: rowData.length + 1, 
      item: newRowData.item,
      quantity: newRowData.quantity,
      amount: newAmount,
    }

    const newData = [...rowData, newRow];
    props.setData(newData);

    setNewRowData({
      srNo: '',
      item: '',
      quantity: '',
      amount: '',
    });

    setRowData(newData);
  };

  const deleteRow = (index) => {
    const newData = [...rowData];
    newData.splice(index, 1);
    props.setData(newData);
  };

  return (
    <div className={classes.tableContainer}>
      <Thead heading={props.heading} />

      {rowData.map((item, index) => {
        const alternate = evenOdd(index);

        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center',zIndex:1, backgroundColor:'none' }}>
            <Tr content={item} evenOdd={alternate} />
				{/*        	<button variant="contained" style={{backgroundColor:'#00bcd4d6' , height:'25px',border:'none'}} onClick={() => deleteRow(index)}>Delete</button>*//*}

         </div>
        );
      })}

      <div>
	  <input
          type="text"
          name="Sro."
          value={rowData.length + 1}
          readOnly
          placeholder="Amount"
		className={classes.input}
        />
        <input
          type="text"
          name="item"
          value={newRowData.item}
          onChange={(e) => setNewRowData({ ...newRowData, item: e.target.value })}
          placeholder="Item"
		  className={classes.input}
        />
        <input
          type="text"
          name="quantity"
          value={newRowData.quantity}
          onChange={(e) => setNewRowData({ ...newRowData, quantity: e.target.value })}
          placeholder="Quantity"
		  className={classes.input}
        />
        <input
          type="text"
          name="amount"
          value={parseInt(newRowData.quantity) * 10}
          readOnly
          placeholder="Amount"
		className={classes.input}
        />
        <button  style={{backgroundColor:'#00bcd4d6' ,width:'54px', height:'25px',variant:"contained",border:'none',borderRadius:'6px'}} onClick={addRow}>Add</button>
      </div>

      <div>
        <div className={classes.totalAmount}><p className={classes.text_content}>Total Amount:</p><p className={classes.text_bar}>{props.totalAmount}</p></div>
        <div className={classes.totalAmount}><p className={classes.text_content}>Total GST Amount (18%):</p><p className={classes.text_bar}>{props.totalGstAmount}</p></div>
        <div className={classes.totalAmount}><p className={classes.text_content}>Total Service Tax Amount (20%):</p><p className={classes.text_bar}>{props.totalServiceTaxAmount}</p></div>
      </div>
    </div>
  );
}

export default Table
*/
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Tr from './Tr';
import Thead from './Thead';

const useStyles = createUseStyles({
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    maxHeight: '1px',
    background: 'white',
    border: '1px solid gray',
  },
  input: {
    height: '26px',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '319px',
    border: '1px solid white',
  },
  totalAmount: {
    color: 'none',
    alignItems: 'center',
    fontSize: '15px',
    height: '34px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '0px',
    marginBottom: '10px',
    textAlign: 'right',
	width:'100%',
  },
  text_content: {
    border: '1px solid white',
    height: '32px',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '599px',
   // marginRight: '280px',
    textAlign: '20px',
  },
  text_bar: {
    border: '1px solid white',
    height: '32px',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '45px',
	//marginRight:'200px'
  },
  button: {
    backgroundColor: '#00bcd4d6',
    width: '52px',
    height: '24px',
    border: '2px solid #058fa1',
    borderRadius: '6px',
	alignItems:'center',
	
  },
});

function Table(props) {
  const classes = useStyles();
  const [rowData, setRowData] = useState(props.data);
  const [newRowData, setNewRowData] = useState({
    srNo: '',
    item: '',
    quantity: '',
    amount: '',
  });

  useEffect(() => {
    setRowData(props.data);
  }, [props.data]);

  const evenOdd = (number) => {
    return number % 2 === 0;
  };

  const InputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...rowData];
    updatedData[index] = {
      ...updatedData[index],
      [name]: value,
    };
    updatedData[index].amount = parseInt(updatedData[index].quantity) * 10;
    props.setData(updatedData);
    setRowData(updatedData);
  };

  const addRow = () => {
    if (newRowData.item === '' || newRowData.quantity === '') {
      alert('PLEASE FILL ALL INFORMATION');
      return;
    }

    const newAmount = parseInt(newRowData.quantity) * 10;

    const newRow = {
      srNo: rowData.length + 1,
      item: newRowData.item,
      quantity: newRowData.quantity,
      amount: newAmount,
    };

    const newData = [...rowData, newRow];
    props.setData(newData);

    setNewRowData({
      srNo: '',
      item: '',
      quantity: '',
      amount: '',
    });

    setRowData(newData);
  };
  const AmountRupee=props.totalAmount+props.totalGstAmount+props.totalServiceTaxAmount;
  console.log(AmountRupee,'AmountRupee');

  const deleteRow = (index) => {
    const newData = [...rowData];
    newData.splice(index, 1);
    props.setData(newData);
  };

  return (
    <div className={classes.tableContainer}>
      <Thead heading={props.heading} />

      {rowData.map((item, index) => {
        const alternate = evenOdd(index);

        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center', zIndex: 1, backgroundColor: 'none' }}>
            <Tr content={item} evenOdd={alternate} deleteRow={deleteRow} index={index} />
          </div>
        );
      })}

      <div>
        <input
          type="text"
          name="Sro."
          value={rowData.length + 1}
          placeholder="Amount"
          className={classes.input}
        />
        <input
          type="text"
          name="item"
          value={newRowData.item}
          onChange={(e) => setNewRowData({ ...newRowData, item: e.target.value })}
          placeholder="Item"
          className={classes.input}
        />
        <input
          type="text"
          name="quantity"
          value={newRowData.quantity}
          onChange={(e) => setNewRowData({ ...newRowData, quantity: e.target.value })}
          placeholder="Quantity"
          className={classes.input}
        />
        <input
          type="text"
          name="amount"
          value={~~parseInt(newRowData.quantity) * 10}
          placeholder="Amount"
          className={classes.input}
        />
        <button className={classes.button} onClick={addRow}>
          Add
        </button>
      </div>

      <div>
        <div className={classes.totalAmount}>
         <p className={classes.text_content}>Total Amount:</p>
          <p className={classes.text_bar}>{props.totalAmount}</p>
        </div>
        <div className={classes.totalAmount}>
          <p className={classes.text_content}>Total GST Amount (18%):</p>
          <p className={classes.text_bar}>{props.totalGstAmount}</p>
        </div>
        <div className={classes.totalAmount}>
          <p className={classes.text_content}>Total Service Tax Amount (20%):</p>
          <p className={classes.text_bar}>{props.totalServiceTaxAmount}</p>
        </div>
		<div className={classes.totalAmount}>
          <p className={classes.text_content}>AmountRupee:</p>
          <p className={classes.text_bar}>{AmountRupee}</p>
        </div>
      </div>
    </div>
  );
}

export default Table
