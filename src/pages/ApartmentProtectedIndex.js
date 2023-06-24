// import
import React from "react"
import { Card, CardGroup, CardImg, CardBody, CardTitle, Button, NavLink } from "reactstrap"

// declare functional component
const ApartmentProtectedIndex = ({currentUser, apartments}) => {
  
  const userPayload = currentUser?.split(".")[1]
  // replace any characters with a / 
  const baseURL = userPayload.replace('-', '+').replace('_', '/')
  // atob() to decode the payload to a JSON string and JSON.parse() to parse the string into an object
  const authUser = JSON.parse(atob(baseURL))

  const myApartments = apartments?.filter(apartment => +authUser?.sub === apartment.user_id)

  return(
    <>
      <CardGroup>
        {myApartments?.map((apt, index) => {
          return(
            <Card key={index}>
              <CardImg
                alt="a space you need to experience"
                src={apt.image}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Located in {apt.state}
                </CardTitle>
                <Button>
                  <NavLink href={`/aptshow/${apt.id}`}>
                    More Details
                  </NavLink>
                </Button>
                <Button>
                  Edit
                </Button>
                <Button>
                  Delete
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </CardGroup>
    </>
  )
}
// export
export default ApartmentProtectedIndex