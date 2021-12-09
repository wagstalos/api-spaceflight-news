import rocket from "../assets/rocket.svg"

export default function Header() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <img src={rocket} alt="rocket" width="150px" />
            </div>

            <h1 className="text-center mt-4">Space flight news</h1>
            <hr />
        </>
    )
}