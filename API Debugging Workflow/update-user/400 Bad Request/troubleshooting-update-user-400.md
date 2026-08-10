# Troubleshooting — Update User: 400 Bad Request

## Issue

The `PUT /api/users/{{userId}}` request returned `400 Bad Request`.

## Error response

```json
{
  "success": false,
  "message": "Invalid request data"
}
```

## Cause

The request body contained missing, invalid, or incorrectly formatted user data.

## Troubleshooting steps

1. Check that all required user fields are included.
2. Confirm that the `name` field is not empty.
3. Confirm that the email address uses a valid format.
4. Verify that the `Content-Type` header is `application/json`.
5. Correct the request body and resend the request.

## Resolution

Updated the request body with valid user data.

## Verification

The request returned `200 OK` and updated the user record successfully.
