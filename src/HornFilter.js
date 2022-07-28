import React from 'react';
import Form from 'react-bootstrap/Form';


class HornFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornsDisplay: null
        }
    }

    filterHorns = event => {
        this.props.numHorns(event.target.value);
    }

    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Filter by Number of Horns</Form.Label>
                    <Form.Select onChange={this.filterHorns}>
                        <option value="all">All</option>
                        <option value="1">1 Horn</option>
                        <option value="2">2 Horns</option>
                        <option value="3">3 Horns</option>
                        <option value="100">100 Horns</option>
                    </Form.Select>
                </Form.Group>
            </Form>

        );
    }
}

export default HornFilter;



