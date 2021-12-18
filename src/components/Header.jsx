import rocket from "../assets/astronaut.svg"

export default function Header() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <img src={rocket} alt="rocket" width="200px" />
            </div>
            <h1 className="gradient__text text-center mt-4">Space flight news</h1>
        </>
    )
}