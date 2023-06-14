// import
import React from "react"
import { Card, CardGroup, CardImg, CardBody, CardTitle, Button } from "reactstrap"
// declare functional component
const ApartmentIndex = ({apartments}) => {
  return(
    <>
      <CardGroup>
        {apartments?.map((apt, index) => {
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
                  More Details
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
export default ApartmentIndex