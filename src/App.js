import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './components/data.json';
import SelectBeasts from './components/SelectBeasts';
import Form from 'react-bootstrap/Form';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      data: data,
      show: false,
      dataClicked: {},
      numumberhoners : 0,
      sendBeast: data
    }
  }
  
  showHandle =(title)=>{
    let dataClicked = data.find(value => {
      if (value.title === title) {
        return value;
      }
    })
    this.setState({
      show : true,
      dataClicked: dataClicked
    })
  }

  closeHandle = ()=>{
    this.setState({
      show : false
    })
  }

  filterArray = (num)=>{
    let filterarr = data.filter(element=>{
      if(num===0){
        return element;
      }else{
        if(element.horns ===num){
          return true;
        }
        else{
          return false;
        }
      }
    });
    return filterarr;
  }
  
  eventhandler = async (event) =>{
    event.preventDefault();
    await this.setState({
      numumberhoners: event.target.value,
      sendBeast : this.filterArray(Number(event.target.value))
    });
    console.log(this.state.sendBeast);
  };

  render() {
    return (
      <>
        <Header/>
        <Form.Select name="hor" aria-label="Default select example" onChange={this.eventhandler}>
          <option>Open this select menu</option>
          <option value="0">all</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">wow...</option>
        </Form.Select>

        <Main data = {this.state.data} showHandle = {this.showHandle} data = {this.state.sendBeast} />
        <SelectBeasts dataClicked = {this.state.dataClicked} show = {this.state.show} closeHandle = {this.closeHandle} />
        <Footer/>
      </>
    )
  }
}
export default App;
