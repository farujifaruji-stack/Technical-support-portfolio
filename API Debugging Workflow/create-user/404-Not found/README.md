# Create User — 404 Not Found

## Scenario

A `POST /api/users` request returns `404 Not Found` because the URL contains an incorrect endpoint path.

**Method:** `POST`  
**Expected endpoint:** `{{baseUrl}}/api/users`  
**Incorrect endpoint:** `{{baseUrl}}/api/userss`  
**Expected status:** `201 Created`  
**Actual status:** `404 Not Found`

## Purpose

Demonstrates investigation and resolution of an API endpoint or route error.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Request body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "id": "123456789",
  "phoneNumber": "0501234567",
  "emailAddress": "walaa@test.com",
  "dateOfBirth": "14/01/2000"
}
```

## Expected result

The API creates the user and returns `201 Created`.

```json
{
  "success": true,
  "message": "User created successfully"
}
```

## Actual result

The API returns `404 Not Found`.

```json
{
  "success": false,
  "message": "Endpoint not found"
}
```

## Root cause

The request URL uses an incorrect endpoint path: `/api/userss`.

The API cannot find a route that matches this URL.

## Resolution

Correct the endpoint URL and resend the request.

```text
{{baseUrl}}/api/users
```

## Verification

After correcting the URL, the request completes successfully and returns `201 Created`.

## Postman location

`Create User → 4xx - Client Errors → 404 - Not Found - Create User`

## Jira case study

A Jira bug was created to document the incorrect URL, the investigation, and the successful resolution.

![Jira ticket — Create User 404 Not Found](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/404-Not%20found/Jira%20API%20Project%20Create%20User%20404%20Not%20found.png)
