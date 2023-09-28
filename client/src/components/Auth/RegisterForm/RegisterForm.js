import { Form } from "semantic-ui-react"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./RegisterForm.form"

export function RegisterForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log("Form sent")
            console.log(formValue);
        }
        
    })
  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
            <Form.Input 
                name = "email" 
                type="text" 
                placeholder="Email" 
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
            />
            <Form.Input 
                name = "username" 
                type="text" 
                placeholder="Username"
                value={formik.values.username}   
                onChange={formik.handleChange}
                error={formik.errors.username} 
            />
        </Form.Group>
        <Form.Group widths="equal">
            <Form.Input 
                name="name" 
                type="text" 
                placeholder="Name and Lastname" 
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name} 
            />
            <Form.Input 
                name="password" 
                type="password" 
                placeholder="Password" 
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password} 
            />
        </Form.Group>
        <Form.Button type="submit" fluid loading={formik.isSubmitting}>Sign Up</Form.Button>
    </Form>
  )
}

