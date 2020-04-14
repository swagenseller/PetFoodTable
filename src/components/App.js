import React from 'react';
import ReactDataGrid from 'react-data-grid';
import ReactDOM from 'react-dom';

const columns = [
    { key: "edit", name: "", width: 100  },
    { key: "name", name: "Name", editable: false },
    { key: "brand", name: "Brand Name", editable: false },
    { key: "pet", name: "Food For", editable: false },
    { key: "price", name: "Price", editable: false }
  ];
  
  
  class App extends React.Component {
    state = {
      rows: [
        { name: "minichunks", brand: "Lambs", pet: "dogs", price: "$3" },
        {
          name: "HE Thinks he is people",
          brand: "Archer",
          pet: "ocelots",
          price: "$20"
        },
        { name: "Wilderness", brand: "Blue Beef", pet: "dogs", price: "$7" },
        { name: "carrots", brand: "N/A", pet: "rabbits", price: "$2" },
        { name: "Shrimpy Shrimp", brand: "Venus", pet: "cats", price: "$6" },
        { name: "sea flakes", brand: "Krill", pet: "fish", price: "$3" }
      ]
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
    getCellActions = (column, row) => {
      const cellActions = [
        {
          icon: <span className="delete controls"> Delete </span>,
          callback: () => {
            const rows = [...this.state.rows];
            rows.splice(row.index, 1); //
            this.setState({ rows: rows });
          }
        }
      ];
      return column.key === "edit" ? cellActions : null;
    };

    sonGridSort = (column, order, roe) =>{
        
    }
    
    // necessary
    render() {
      return (
        <ReactDataGrid
          columns={columns}
          rowGetter={(i) => this.state.rows[i]}
          rowsCount={this.state.rows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellsSelect={true}
          getCellActions={this.getCellActions}
         // onGridSort={} 
        />
      );
    }
  }
export default App;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);