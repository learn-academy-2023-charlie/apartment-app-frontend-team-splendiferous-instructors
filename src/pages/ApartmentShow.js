// import
import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
// declare functional component
const ApartmentShow = ({apartments}) => {
  const { id } = useParams()
  let currentApt = apartments?.find((apt) => apt.id === +id)
  return(
    <main>
      {currentApt && (
        <>
          <Card>
            <CardImg
              alt="a space you need to experience"
              src={currentApt.image}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Located in {currentApt.state}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {currentApt.street} {currentApt.unit},{currentApt.city}, {currentApt.state}
              </CardSubtitle>
              <CardText>
                {currentApt.square_footage} that includes {currentApt.bedrooms} bedrooms and {currentApt.bathrooms} bathrooms going for {currentApt.price}
              </CardText>
            </CardBody>
          </Card>
        </>
      )}
    </main>
  )
}
// export
export default ApartmentShow