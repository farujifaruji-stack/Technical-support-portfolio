# Troubleshooting — Get User by ID: 401 Unauthorized

## Issue

The `GET /api/users/{{userId}}` request returned `401 Unauthorized`.

## Error response

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

## Cause

The request used missing, invalid, or expired authentication credentials.

## Troubleshooting steps

1. Check that the `Authorization` header is set correctly: `Bearer {{apiToken}}`.
2. Check that `{{apiToken}}` is valid and has not expired.
3. Check that the `x-api-key` value is correct.
4. Confirm that the correct Postman environment is selected.
5. Generate a new token if needed.
6. Resend the request.

## Resolution

Updated the bearer token and API key with valid credentials.

## Verification

The request returned `200 OK` and retrieved the requested user record.
