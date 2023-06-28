import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"

const ApartmentNew = ({ createApt, currentUser }) => {
  console.log("new page", currentUser)
  const [newApt, setNewApt] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: ""
  })

  const handleChange = (e) => {
    setNewApt({ ...newApt, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    createApt(newApt)
    navigate("/aptindex")
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
                placeholder="Enter your street info"
                type="text"
                onChange={handleChange}
                value={newApt.street}
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
                placeholder="Enter your unit"
                type="text"
                onChange={handleChange}
                value={newApt.unit}
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
                placeholder="Enter your city"
                type="text"
                onChange={handleChange}
                value={newApt.city}
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
                placeholder="Enter your state"
                type="text"
                onChange={handleChange}
                value={newApt.state}
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
                placeholder="Enter your square footage"
                type="number"
                onChange={handleChange}
                value={newApt.square_footage}
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
                placeholder="Enter your price"
                type="text"
                onChange={handleChange}
                value={newApt.price}
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
                placeholder="Enter your bedrooms"
                type="number"
                onChange={handleChange}
                value={newApt.bedrooms}
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
                placeholder="Enter your bathrooms"
                type="number"
                onChange={handleChange}
                value={newApt.bathrooms}
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
                placeholder="Enter yes or no"
                type="text"
                onChange={handleChange}
                value={newApt.pets}
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
            placeholder="Provide link to a photo of your unit"
            onChange={handleChange}
            value={newApt.image}
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
            value={newApt.user_id = currentUser?.id}
            type="hidden"
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ApartmentNew