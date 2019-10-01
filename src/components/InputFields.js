import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';


const InputUsername = ({ }) => (
    <InputGroup className="mb-4">
   
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
     <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>

)

const InputPassword = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Password"
      aria-label="password"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)

const InputEmail = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Email"
      aria-label="Email"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)

const InputFirstName = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="First Name"
      aria-label="FirstName"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)

const InputLastName = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Last Name"
      aria-label="Last Name"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)

const SubmitButtonRegister = ({ }) => (
   <Button as="input" type="submit" value="Register" size="lg"/>

)

const SubmitButtonLogin = ({ }) => (
    <Button as="input" type="submit" value="Login" size="lg"/>
 
 )