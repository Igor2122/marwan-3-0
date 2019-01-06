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
        inputElent = <Input
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.placeholder}/>
        break;
      case('text-area'):
        inputElent = <FormText {...this.props}/>
        break;
      case('select'):
        inputElent = <Input 
        type={this.props.type}
        name={this.props.name}
        id={this.props.id}
        placeholder={this.props.placeholder}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        break;

      default:
        inputElent = <input {...this.props}/>
    }

    return (
      <div>
        <Container>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">{this.props.label}</Label>
               {inputElent}
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddRecepie;