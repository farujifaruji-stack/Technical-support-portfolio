# Troubleshooting — Get User by ID: 404 Not Found

## Issue

The `GET /api/users/{{userId}}` request returned `404 Not Found`.

## Error response

```json
{
  "success": false,
  "message": "User not found"
}
```

## Cause

The provided user ID does not match an existing user record.

## Troubleshooting steps

1. Check that `{{userId}}` is correct.
2. Confirm that the user exists in the system.
3. Verify that the correct base URL and API environment are selected.
4. Use a valid existing user ID.
5. Resend the request.

## Resolution

Updated the request with a valid existing user ID.

## Verification

The request returned `200 OK` and retrieved the requested user record.
