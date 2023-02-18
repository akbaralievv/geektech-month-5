import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <>
        <h2>404: page not found</h2>
        <Link to="/users">go to home</Link>
    </>
  )
}

export default NotFoundPage