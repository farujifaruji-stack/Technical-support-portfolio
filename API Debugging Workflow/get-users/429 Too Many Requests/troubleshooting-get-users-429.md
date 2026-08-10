# Troubleshooting — Get Users: 429 Too Many Requests

## Issue

The `GET /api/users` request returned `429 Too Many Requests`.

## Error response

```json
{
  "success": false,
  "message": "Too many requests"
}
```

## Cause

The API rate limit was exceeded because too many requests were sent within a short period.

## Troubleshooting steps

1. Stop sending repeated requests.
2. Check the response headers for a `Retry-After` value.
3. Wait for the rate-limit window to reset.
4. Reduce the number of requests sent in a short period.
5. Resend the request.

## Resolution

Waited for the rate limit to reset before sending the request again.

## Verification

The request returned `200 OK` and retrieved the list of users.
