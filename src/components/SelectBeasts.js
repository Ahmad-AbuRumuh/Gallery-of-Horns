import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class SelectBeasts extends React.Component {
  render (){
    return(
             
      <Modal show={this.props.show} onHide={this.props.closeHandle} className="Modal">
      <Modal.Header closeButton>
        <Modal.Title>{this.props.dataClicked.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Card.Img variant="top"
          src={this.props.dataClicked.image_url}
          alt={this.props.dataClicked.title}
          className='img'
        />
        <Card.Text >
          {this.props.dataClicked.description}
        </Card.Text>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.closeHandle}>
            Close 
        </Button>
      </Modal.Footer>
      </Modal>

    )
        
  }
}

export default SelectBeasts;