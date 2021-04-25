import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
class MyTable extends React.Component{

  
  constructor(props) {
    super(props);
    this.state = {
      covid: null

    };
  }

  componentDidMount(){
      fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({ covid: data })
      });
    
  }
  getMuiTheme = () => createMuiTheme({
    overrides: {
      
      MUIDataTableBodyCell: {
        root: {
          
        }
      }
    }
  })
  
render(){

  const {covid} = this.state;

  // console.log({covid});
  const columns = ["Country Name","Total confirmed cases", "Total death cases", "Total recovered cases"];
  const data = covid ? covid.Countries.map( (row)=>([row.Country
  , row.TotalConfirmed===0 ? row.TotalConfirmed='Unreported':row.TotalConfirmed 
  , row.TotalDeaths===0 ? row.TotalDeaths='Unreported':row.TotalDeaths
  , row.TotalRecovered===0 ? row.TotalRecovered='Unreported':row.TotalRecovered])) : [];
// covid.Countries.map((row)=>(row.Country))



const options = {
  filterType: 'checkbox',
};
  
  return(
    
  <div style={{'backgroundColor':'#B9D9EB'}} >
  <center><div style={{'paddingBottom':'40px','paddingTop':'100px','width':'1000px'}}><MuiThemeProvider theme={this.getMuiTheme()}>
  <MUIDataTable
  title={"This is Covid-19 Report as of "+covid?.Date}
  data={data}
  columns={columns}
  options={options}
/> </MuiThemeProvider>


</div>
<Button style={{'marginBottom':'50px'}}variant="outlined" color="primary" href="https://www.codemonday.com/services/#contact">
Free Consulting
      </Button></center></div>


);}
  

  }
export default MyTable;