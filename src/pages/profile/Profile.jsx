import { memo } from "react"

const Profile = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <h1>page profile</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Profile)