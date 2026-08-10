# Get Users — 429 Too Many Requests

## Scenario

A `GET /api/users` request returns `429 Too Many Requests` because the API rate limit was exceeded.

**Method:** `GET`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `200 OK`  
**Actual status:** `429 Too Many Requests`

## Purpose

Demonstrates investigation and resolution of a Get Users request that exceeds the API rate limit.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Expected result

The API returns a list of user records with `200 OK`.

## Actual result

The API returns `429 Too Many Requests`.

```json
{
  "success": false,
  "message": "Too many requests"
}
```

## Root cause

Too many requests were sent to the API within a limited time period.

## Resolution

Wait for the rate-limit window to reset, then resend the request. Reduce the request frequency if needed.

## Verification

After waiting for the rate limit to reset, resend the request and verify that the API returns `200 OK`.

## Postman location

`Get Users → 4xx - Client Errors → 429 - Too Many Requests - Get Users`

![Get Users — 429 Too Many Requests](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/get-users/429%20Too%20Many%20Requests/API%20Project%20-%20Get%20Users%20-%20429%20Too%20Many%20Requests.png)
