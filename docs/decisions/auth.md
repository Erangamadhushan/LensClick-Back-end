# Authentication Strategy

## Context
The application requires stateless authentication suitable for APIs.

## Decision
- Use JWT for authentication
- Use bcrypt for password hashing
- Store token on client side

## Implementation Details
- Tokens signed using `JWT_SECRET`
- Middleware verifies token on protected routes

## Consequences
### Pros
- Scales well
- No server-side session storage

### Cons
- Token revocation is harder