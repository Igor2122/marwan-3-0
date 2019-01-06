import React, {Component} from 'react'
import AddRecepieForm from '../../../../components/UI/Input/forms/AddRecepieForm/AddRecepieForm';

class AddRecepies extends Component {

  render() {
    return (
      <div>
        <h1>Add New Recepies:</h1>
        <AddRecepieForm
          label={'Recepie Name'}
          inputtype={'input'}
          type={'input'}
          id={'RecepieName'}
          placeholder={'Recepie Name'}
          name={'RecepieName'}/>
        <AddRecepieForm
          label={'Select Category'}
          inputtype={'select'}
          type={'select'}
          id={'RecepieName'}
          placeholder={'Recepie Name'}
          name={'RecepieName'}/>
      </div>
    );
  }
}

export default AddRecepies;