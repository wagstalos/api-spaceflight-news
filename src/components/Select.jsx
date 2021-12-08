import { Col, Input } from "reactstrap";

export default function Select() {
    return (
        <Col md={2}>
            <Input
                id="exampleSelect"
                name="select"
                type="select"
            >
                <option>
                    Mais antigas
                </option>
                <option>
                    Mais novas
                </option>
            </Input>

        </Col>

    )
}