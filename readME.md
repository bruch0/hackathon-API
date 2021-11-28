# Help a Queer API

## Documentation 🧾

### Sign Up Lawyer

```
POST /sign-lawyer-up
```

#### Expected body

```jsx
{
  name: String, at least 3 characters,
  email: String, at least 5 characters, must be a valid email,
  password: String, at least 8 characters, does not differentiate lower and upper cases,
  cpf: String, exactly 11 characters, no dots or hyphen,
  phone: String, exactly 11 characters, no parentheses, spaces or hyphen,
  description: Strung, at least 8 characters, max 255 characters,
}
```

#### Expected headers

```bash
None, this is a public route
```

#### Possible response status

```bash
- 400: You have forgotten to send something, or sent invalid data, check your parameters
- 409: A account is already registered with this email, phone, or cpf
- 201: Account created
```

</br>

### Sign Up Company

```
POST /sign-company-up
```

#### Expected body

```jsx
{
  name: String, at least 3 characters,
  email: String, at least 5 characters, must be a valid email,
  password: String, at least 8 characters, does not differentiate lower and upper cases,
  cnpj: String, exactly 14 characters, no dots or hyphen,
}
```

#### Expected headers

```bash
None, this is a public route
```

#### Possible response status

```bash
- 400: You have forgotten to send something, or sent invalid data, check your parameters
- 409: A account is already registered with this email or cnpj
- 201: Account created
```

</br>

### Sign In

```
POST /sign-in
```

#### Expected body

```jsx
{
  email: String, at least 5 characters, must be a valid email,
  password: String, at least 8 characters, does not differentiate lower and upper cases,
}
```

#### Expected headers

```bash
None, this is a public route
```

#### Possible response status

```bash
- 400: You have forgotten to send something, or sent invalid data, check your parameters
- 404: This email is not registered
- 401: Incorrect password
- 200: Logged successfully
```

#### What you will receive from this route

```jsx
{
  token: JWT,
  name: username,
}
```

</br>
