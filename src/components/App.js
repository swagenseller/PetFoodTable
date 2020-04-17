import React from 'react';
import ReactDataGrid from 'react-data-grid';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';

// come up with a away to not be hard coding this
const columns = [
    { key: "edit", name: "", width: 100, editable: false, sortable: false  },
    { key: "name", name: "Name", editable: false, sortable: true, sortDescendingFirst: true },
    { key: "brand", name: "Brand Name", editable: false, sortable: true },
    { key: "pet", name: "Food For", editable: false, sortable: true },
    { key: "price", name: "Price", editable: false, sortable: true }
  ];
  
  const initRows =  [
    { name: "minichunks", brand: "Lambs", pet: "dogs", price: 3 },
    {
      name: "HE Thinks he is people",
      brand: "Archer",
      pet: "ocelots",
      price: 20
    },
    { name: "Wilderness", brand: "Blue Beef", pet: "dogs", price: 7 },
    { name: "carrots", brand: "N/A", pet: "rabbits", price: 2 },
    { name: "Shrimpy Shrimp", brand: "Venus", pet: "cats", price: 6 },
    { name: "sea flakes", brand: "Krill", pet: "fish", price: 3 }
  ];

  
  class App extends React.Component {
    state = {
      rows: initRows,
      initialRows : initRows,
      isOpen: false,
      rowToEdit: null,
      iRowToEdit: null,
    };
    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
      this.setState((state) => {
        const rows = state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
          rows[i] = { ...rows[i], ...updated };
        }
        return rows;
      });
    };
    // no longer used, immediately deletes rows when icon clicked
    getCellActions = (column, row) => {
      const cellActions = [
        {
          icon: <span className="delete controls"> Delete </span>,
          callback: () => {
            const rows = [...this.state.rows];
            rows.splice(row.index, 1); 
            this.setState({ rows: rows });
          }
        }
      ];
      return column.key === "edit" ? cellActions : null;
    };

		sortRows = (sortColumn, sortDirection) =>  {
			const initialRows = [...this.state.rows];
			const comparer = (a, b) => {
        if(typeof a[sortColumn] === "string"){
          if (sortDirection === "ASC") {
            return a[sortColumn].toUpperCase() > b[sortColumn].toUpperCase() ? 1 : -1;
          } else if (sortDirection === "DESC") {
            return a[sortColumn].toUpperCase() < b[sortColumn].toUpperCase() ? 1 : -1;
          }
        } else if (typeof a[sortColumn] === "number"){
          if (sortDirection === "ASC") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "DESC") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
        }
			};
			return sortDirection === "NONE" ? this.state.initialRows : [...initialRows].slice().sort(comparer);
    };
    
    // working on method to display numbers as money (string)
    parseRows = (i) =>{
      const temp = this.state.rows[i];
      console.log(temp)  // can't return properties :(
      //temp.price = "$" + temp.price; 
      return temp;
    }

    // working on the form part 
    onResponse = (childData) =>{
      this.setState({isOpen: childData});
    }

   
    onDelete = (rowIndex, iRowIndex) => {
      // removes from this.state.rows
      const rows = [...this.state.rows];
      rows.splice(rowIndex, 1); //
      // removes from initialRows
      const iRows = [...this.state.rows];
      iRows.splice(iRowIndex, 1)
      this.setState({ 
        isOpen: false, 
        rows: rows, 
        initialRows: iRows, 
        rowToEdit: null, 
        iRowToEdit: null 
      });
    }


    deleteRow = (column, row) => {
      const cellActions = [
        {
          icon: <span className="delete controls"> Delete </span>,
          callback: () => {
            const index = this.state.rows.indexOf(row)
            //console.log("index is: " + index)
            const iRowIndex = this.state.initialRows.indexOf(row)
            this.setState({
              isOpen: true, 
              rowToEdit: index, 
              iRowToEdit: iRowIndex
            });
          }
        }
      ];
      return column.key === "edit" ? cellActions : null;
    }


		
		
    
    // necessary
    render() {
      return (
        <div>
        <ReactDataGrid
          columns={columns}
          rowGetter= {(i) => this.state.rows[i]}
          rowsCount={this.state.rows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellsSelect={true}
					getCellActions={this.deleteRow}
					onGridSort= {(sortColumn, sortDirection) => this.setState({ rows: this.sortRows(sortColumn, sortDirection) }) }//{(sortColumn, sortDirection) => this.setState({ rows: this.test(sortColumn, sortDirection) }) }
        />

          
          <ApprovalCard 
            isOpen={this.state.isOpen} 
            onResponse={this.onResponse} 
            rowToEdit={this.state.rowToEdit}
            iRowToEdit={this.state.iRowToEdit}
            onDelete={this.onDelete}
          />
        </div>
      );
    }
  }
export default App;
