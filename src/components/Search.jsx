import { Col, Input } from "reactstrap";

export default function Search(handleChange) {
    return (
        <Col md={4}>
            <form>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-search icon-search"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#0edf6c"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <Input
                    className="nput"
                    type="text"
                    onChange={handleChange}
                    placeholder="Pesquisar"
                />
            </form>
        </Col>
    )
}