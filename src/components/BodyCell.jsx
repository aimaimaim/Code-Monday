import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class BodyCell extends React.Component {

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#FF0000"
        }
      }
    }
  })

  render() {

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options} />
      </MuiThemeProvider>
    );

  }
}
export default BodyCell;