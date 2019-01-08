import React, {Component} from 'react'
import AddRecepieForm from '../../../../components/UI/Input/forms/AddRecepieForm/AddRecepieForm';
import {Container, Form} from 'reactstrap';
import axios from '../../../../axios-recep-conn';

class AddRecepies extends Component {

  state = {
    name: null,
    cagegory: null,
    instructions: null
  }

  handleChange = (e) => {
    // this.setState({name: e.target.value, cagegory: e.target.value, instructions: e.target.value});
    console.log(e.target);
    
  }

  addRecepiesHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    
  }

  render() {
    return (
      <div>

        <Form onSubmit={this.addRecepiesHandler}>
          <Container className="mt-5">
            <h1>Add New Recepies:</h1>
            <AddRecepieForm
              label={'Recepie Name'}
              inputtype={'input'}
              type={'input'}
              id={'RecepieName'}
              placeholder={'Recepie Name'}
              name={'RecepieName'}
              changed={this.handleChange}/>
            <AddRecepieForm
              label={'Select Category'}
              inputtype={'select'}
              type={'select'}
              id={'SelectCategory'}
              placeholder={'Recepie Name'}
              name={'SelectCategory'}
              changed={this.handleChange}/>
            <AddRecepieForm
              label={'Instructions'}
              inputtype={'text-area'}
              type={'textarea'}
              id={'SelectCategory'}
              placeholder={'Recepie Name'}
              name={'Recepie Insctructions'}
              changed={this.handleChange}/>
            <input type="submit" value="Submit" />
          </Container>
        </Form>
      </div>
    );
  }
}

export default AddRecepies;