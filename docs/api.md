# API Documentation

## Authentication

### POST /api/auth/register

Creates a new user account.

**Request Body**
```json
{
  "fullName": "user name",
  "email": "user@example.com",
  "password": "Password123",
  "role": "admin"
}
```


## Response (201)
```json
{
  "success": true,
  "data": newUser
}
```

### Errors

- `400`: Validation error

- `409`: Email already exists
