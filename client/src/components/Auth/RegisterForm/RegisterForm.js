import { Form } from "semantic-ui-react"

export function RegisterForm() {
  return (
    <Form>
        <Form.Group widths="equal">
            <Form.Input name = "email" type="text" placeholder="Email"/>
            <Form.Input name = "username" type="text" placeholder="Username"/>
        </Form.Group>
        <Form.Group widths="equal">
            <Form.Input name="name" type="text" placeholder="Name and Lastname" />
            <Form.Input name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Button type="submit" fluid>Sign Up</Form.Button>
    </Form>
  )
}

