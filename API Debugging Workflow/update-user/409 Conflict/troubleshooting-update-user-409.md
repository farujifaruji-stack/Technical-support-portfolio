# Troubleshooting — Update User: 409 Conflict

## Issue

The `PUT /api/users/{{userId}}` request returned `409 Conflict`.

## Error response

```json
{
  "success": false,
  "message": "Email already exists"
}
```

## Cause

The request attempted to update the user with an email address that is already assigned to another user.

## Troubleshooting steps

1. Check the email address in the request body.
2. Confirm that the email is not assigned to another user.
3. Use a unique email address.
4. Resend the request.

## Resolution

Updated the request body with a unique email address.

## Verification

The request returned `200 OK` and updated the user record successfully.
