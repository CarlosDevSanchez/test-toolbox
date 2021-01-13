import React from 'react';
import Navbar from './Components/Navbar';
import Input from './Components/Input';
import Button from './Components/Button';
import Container from './Components/Container';
import Card from './Components/Card';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      request: '',
      responses: []
    }
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerChange(e){
    const { value } = e.target;
    this.setState({
      request: value
    })
  }

  handlerSubmit(){
    const { request } = this.state;
    fetch('http://localhost:9000/iecho?text=' + request)
    .then(res => {
      return res.json();
    })
    .then(res => {
      const { responses } = this.state;
      responses.push(res.text)
      this.setState({
        responses
      })
    })
    .catch(err => console.log(err));
  }

  render(){
    const { request, responses } = this.state;
    return(
    <Container>
      <Navbar>
        <Container stylesheet="nav navbar-nav mx-auto">
          <Container stylesheet="row">
            <Container stylesheet="col-auto">
              <Input type="text" stylesheet="form-control" placeholder="Insert Text" defaultValue={request} onChange={this.handlerChange} />
            </Container>
            <Container stylesheet="col-auto">
              <Button stylesheet="btn btn-primary" onClick={this.handlerSubmit} >Send</Button>
            </Container>
          </Container>
        </Container>
      </Navbar>
      <Container stylesheet="container-fluid">
        <Container stylesheet="row m-5 justify-content-center">
          <Container stylesheet="col-md-8">
            <Card>
              <h1>Result:</h1>
              <Container stylesheet="row m-5 justify-content-center">
                <Container stylesheet="col-md-5">
                  {responses &&
                    responses.map((text, key) => (
                      <Input type="text" defaultValue={text} stylesheet="form-control mb-1" key={key} readOnly={true} />
                    ))
                  }
                </Container>
              </Container>
            </Card>
          </Container>
        </Container>
      </Container>
    </Container>
    );
  }
}

export default Home;
