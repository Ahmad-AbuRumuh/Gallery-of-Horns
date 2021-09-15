import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfHornes: 0
        }
    }
    inceaseNumberOfHorns = () => {
        this.setState({
            numOfHornes: this.state.numOfHornes + 1
        })
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem'}}>
                    <Card.Img className='cartImg'  variant="top" src={this.props.image_url} alt={this.props.keyword}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text> {this.props.description}
                            <br />
                            Number Of Vote {this.state.numOfHornes} ❤
                        </Card.Text>
                        <Button onClick = {this.inceaseNumberOfHorns} variant = "primary">Vote</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeasts;
