import React, {Component} from 'react'
import AddRecepieForm from '../../../../components/UI/Input/forms/AddRecepieForm/AddRecepieForm';
import {Container, Button} from 'reactstrap';
import axios from '../../../../axios-recep-conn';

class AddRecepies extends Component {

  state = {
    name: null,
    cagegory: null,
    instructions: null
  }


  addRecepiesHandler = (e) => {
    this.setState({name: e.target.value, cagegory: e.target.value, instructions: e.target.value});

    console.log(this.state);
    
    
    
    // axios.post('/recepies.json')
  }

  render() {
    return (
      <div>
        <Container className="mt-5">
          <h1>Add New Recepies:</h1>
          <AddRecepieForm
            label={'Recepie Name'}
            inputtype={'input'}
            type={'input'}
            id={'RecepieName'}
            placeholder={'Recepie Name'}
            name={'RecepieName'}
            onChange={this.addRecepiesHandler}/>
          <AddRecepieForm
            label={'Select Category'}
            inputtype={'select'}
            type={'select'}
            id={'SelectCategory'}
            placeholder={'Recepie Name'}
            name={'SelectCategory'}
            onChange={this.addRecepiesHandler}/>
          <AddRecepieForm
            label={'Instructions'}
            inputtype={'text-area'}
            type={'textarea'}
            id={'SelectCategory'}
            placeholder={'Recepie Name'}
            name={'Recepie Insctructions'}
            onChange={this.addRecepiesHandler}/>
          <Button onClick={this.addRecepiesHandler} color='primary'>Add Recepie</Button>
        </Container>
      </div>
    );
  }
}

export default AddRecepies;