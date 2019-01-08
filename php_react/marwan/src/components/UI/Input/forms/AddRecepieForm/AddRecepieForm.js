import React, {Component} from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from 'reactstrap';

class AddRecepie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isShow: true
    };
  }

  render() {

    let inputElent = null;

    switch (this.props.inputtype) {
      case('input'):
        inputElent = <Input {...this.props} 
        onChange={this.props.changed}/>
        break;
      case('text-area'):
        inputElent = <Input {...this.props} 
        onChange={this.props.changed}/>
        break;
      case('select'):
        inputElent = <Input {...this.props} 
        onChange={this.props.changed}>
          <option>Soup</option>
          <option>Snack</option>
          <option>Main Course</option>
          <option>Dessert</option>
        </Input>
        break;

      default:
        inputElent = <input {...this.props} />
    }

    return (
      <div>
        <Container>
            <FormGroup>
              <Label for="exampleEmail">{this.props.label}</Label>
              {inputElent}
            </FormGroup>
        </Container>
      </div>
    );
  }
}

export default AddRecepie;