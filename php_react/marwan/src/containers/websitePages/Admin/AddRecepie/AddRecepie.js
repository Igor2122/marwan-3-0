import React, {Component} from 'react'
import AddRecepieForm from '../../../../components/UI/Input/forms/AddRecepieForm/AddRecepieForm';

class AddRecepies extends Component {

  render() {
    return (
      <div>
        <h1>Add New Recepies:</h1>
        <AddRecepieForm
          label={'Recepie Name'}
          inputtype={'text-area'}
          type={'text'}
          id={'RecepieName'}
          placeholder={'Recepie Name'}
          name={'RecepieName'}/>
        <AddRecepieForm label={'Directions'} inputtype={'text-area'}/>
      </div>
    );
  }
}

export default AddRecepies;