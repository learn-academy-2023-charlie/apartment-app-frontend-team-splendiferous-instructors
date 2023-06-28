import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"

const ApartmentEdit = ({ apartments, updateApt, currentUser }) => {

  const { id } = useParams()
  let currentApt = apartments?.find((apt) => apt.id === +id)

  const [editApt, setEditApt] = useState({
    street: currentApt?.street,
    unit: currentApt?.unit,
    city: currentApt?.city,
    state: currentApt?.state,
    square_footage: currentApt?.square_footage,
    price: currentApt?.price,
    bedrooms: currentApt?.bedrooms,
    bathrooms: currentApt?.bathrooms,
    pets: currentApt?.pets,
    image: currentApt?.image,
    user_id: ""
  })

  console.log("edit", editApt.user_id)

  const handleChange = (e) => {
    setEditApt({ ...editApt, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    updateApt(editApt, currentApt?.id)
    navigate(`/aptshow/${currentApt?.id}`)
  }

  return(
    <div 
      style={{ 
        backgroundImage: "url(back.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="street">
                Street
              </Label>
              <Input
                id="street"
                name="street"
                placeholder={currentApt?.street}
                type="text"
                onChange={handleChange}
                value={editApt.street}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="unit">
                Unit
              </Label>
              <Input
                id="unit"
                name="unit"
                placeholder={currentApt?.unit}
                type="text"
                onChange={handleChange}
                value={editApt.unit}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="city">
                City
              </Label>
              <Input
                id="city"
                name="city"
                placeholder={currentApt?.city}
                type="text"
                onChange={handleChange}
                value={editApt.city}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="state">
                State
              </Label>
              <Input
                id="state"
                name="state"
                placeholder={currentApt?.state}
                type="text"
                onChange={handleChange}
                value={editApt.state}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="square_footage">
                Square footage
              </Label>
              <Input
                id="square_footage"
                name="square_footage"
                placeholder={currentApt?.square_footage}
                type="number"
                onChange={handleChange}
                value={editApt.square_footage}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="price">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                placeholder={currentApt?.price}
                type="text"
                onChange={handleChange}
                value={editApt.price}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="bedrooms">
                Bedrooms
              </Label>
              <Input
                id="bedrooms"
                name="bedrooms"
                placeholder={currentApt?.bedrooms}
                type="number"
                onChange={handleChange}
                value={editApt.bedrooms}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="bathrooms">
                Bathrooms
              </Label>
              <Input
                id="bathrooms"
                name="bathrooms"
                placeholder={currentApt?.bathrooms}
                type="number"
                onChange={handleChange}
                value={editApt.bathrooms}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="pets">
                Pets
              </Label>
              <Input
                id="pets"
                name="pets"
                placeholder={currentApt?.pets}
                type="text"
                onChange={handleChange}
                value={editApt.pets}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            placeholder={currentApt?.image}
            onChange={handleChange}
            value={editApt.image}
          />
        </FormGroup>
        <FormGroup>
          <Label for="user_id" hidden>
            User Id
          </Label>
          <Input
            id="user_id"
            name="user_id"
            onChange={handleChange}
            value={editApt.user_id = currentUser?.id}
            type="hidden"
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Updated Apartment
        </Button>
      </Form>
    </div>
  )

}

export default ApartmentEdit