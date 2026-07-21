# Create User — 400 Bad Request
> **Note:** This Jira ticket is a simulated portfolio artifact demonstrating issue documentation, investigation updates, and resolution tracking.

## Scenario

A `POST /api/users` request returns `400 Bad Request` because the required `firstName` field is missing from the request body.

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `201 Created`  
**Actual status:** `400 Bad Request`

## Purpose

Demonstrates investigation and resolution of an invalid API request payload.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Failing request body

```json
{
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

The API returns `400 Bad Request`.

```json
{
  "success": false,
  "message": "Invalid request body"
}
```

## Root cause

The request body is missing the required `firstName` field.

## Resolution

Add `firstName` to the request body and resend the request.

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

## Verification

After adding `firstName`, the request completes successfully and returns `201 Created`.

## Postman location

`Create User → 4xx - Client Errors → 400 - Bad Request - Create User`

## Jira case study

A Jira bug was created to document the reproduction steps, expected and actual results, investigation, and resolution.

![Jira ticket — Create User 400 Bad Request](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/400-Bad%20request/Jira%20API%20Project%20Create%20User%20400%20Bad%20Request.png)
