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
        inputElent = <Input {...this.props}/>
        break;
      case('text-area'):
        inputElent = <FormText {...this.props}/>
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
              <Input
                type={this.props.type}
                name={this.props.name}
                id={this.props.id}
                placeholder={this.props.placeholder}/>
                {inputElent}
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddRecepie;