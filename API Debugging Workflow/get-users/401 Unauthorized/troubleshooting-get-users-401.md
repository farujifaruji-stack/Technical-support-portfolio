# Troubleshooting — Get Users: 401 Unauthorized

## Issue

The `GET /api/users` request returned `401 Unauthorized`.

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

1. Check that the `Authorization` header uses `Bearer {{apiToken}}`.
2. Confirm that `{{apiToken}}` is valid and has not expired.
3. Confirm that the `x-api-key` value is correct.
4. Verify that the correct Postman environment is selected.
5. Generate a new token if needed.
6. Resend the request.

## Resolution

Updated the bearer token and API key with valid credentials.

## Verification

The request returned `200 OK` and retrieved the list of users.
