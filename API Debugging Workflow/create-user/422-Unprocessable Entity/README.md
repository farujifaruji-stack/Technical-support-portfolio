# Create User — 422 Unprocessable Entity

## Scenario

A `POST /api/users` request returns `422 Unprocessable Entity` because the request body contains an invalid email format.

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `201 Created`  
**Actual status:** `422 Unprocessable Entity`

## Purpose

Demonstrates investigation and resolution of an API validation error.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Failing request body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "id": "123456789",
  "phoneNumber": "0501234567",
  "emailAddress": "walaatest.com",
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

The API returns `422 Unprocessable Entity`.

```json
{
  "success": false,
  "message": "Validation failed"
}
```

## Root cause

The `emailAddress` value is not in a valid email format because it is missing the `@` symbol.

## Resolution

Use a valid email address in the request body.

```json
{
  "emailAddress": "walaa@test.com"
}
```

## Verification

After correcting the email format, the request completes successfully and returns `201 Created`.

## Postman location

`Create User → 4xx - Client Errors → 422 - Unprocessable Entity - Create User`

## Jira case study

A Jira bug was created to document the validation error, the investigation, and the successful resolution.

![Jira ticket — Create User 422 Unprocessable Entity](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/422-Unprocessable%20Entity/Jira%20API%20Project%20Create%20User%20422%20Unprocessable%20Entity.png)
