import { useState } from 'react'
import {
  Box,
  Container,
  TextField,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material'
import { PaperPlaneRight } from '@phosphor-icons/react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [alert, setAlert] = useState(false)

  const handleChange = (e: any) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = () => {
    const isValid = validateForm()

    if (isValid) {
      setAlert(true)
    }
  }

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isEmailValid = emailRegex.test(formData.email)
    const areOtherFieldsValid =
      formData.name.trim() !== '' && formData.message.trim() !== ''

    setErrors({
      name: formData.name.trim() === '' ? 'Campo obrigatório' : '',
      email: isEmailValid ? '' : 'Email inválido',
      message: formData.message.trim() === '' ? 'Campo obrigatório' : '',
    })

    return isEmailValid && areOtherFieldsValid
  }

  return (
    <>
      {alert && (
        <Alert severity="success">
          <AlertTitle>Successo!</AlertTitle>
          Mensagem enviada com sucesso!.
        </Alert>
      )}
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{ padding: '50px' }}
      >
        <Container maxWidth="sm">
          <h1>Fale Conosco</h1>
          <TextField
            id="name"
            label="Nome"
            placeholder="Digite seu nome"
            required
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="Digite seu email"
            required
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </Container>
        <Container maxWidth="sm">
          <TextField
            id="message"
            label="Mensagem"
            multiline
            rows={4}
            style={{ width: '84%' }}
            placeholder="Escreva sua mensagem!"
            required
            value={formData.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
            helperText={errors.message}
          />
        </Container>
        <Container maxWidth="sm">
          <Button
            onClick={handleSubmit}
            variant="contained"
            endIcon={<PaperPlaneRight />}
            style={{
              backgroundColor: '#2F65F4',
              width: '86%',
              padding: '0 0 0 10px',
            }}
          >
            Enviar Mensagem
          </Button>
        </Container>
      </Box>
    </>
  )
}

export default Contact
