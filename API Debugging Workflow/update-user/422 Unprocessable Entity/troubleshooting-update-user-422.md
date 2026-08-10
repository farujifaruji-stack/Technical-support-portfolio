# Troubleshooting — Update User: 422 Unprocessable Entity

## Issue

The `PUT /api/users/{{userId}}` request returned `422 Unprocessable Entity`.

## Error response

```json
{
  "success": false,
  "message": "Validation failed"
}
```

## Cause

The request body contained data that did not meet the API validation requirements.

## Troubleshooting steps

1. Check the request body for invalid field values.
2. Confirm that the email address uses a valid format.
3. Confirm that required fields are not empty.
4. Review the API validation requirements.
5. Correct the request body and resend the request.

## Resolution

Updated the request body with valid user data.

## Verification

The request returned `200 OK` and updated the user record successfully.
