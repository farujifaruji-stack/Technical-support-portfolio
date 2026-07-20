# Create User

## Success — 201 Created

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`

baseurl = https://444c91f9-98ec-494b-9459-2363cd2e78f0.mock.pstmn.io

### Purpose
Creates a new user record.

### Required headers
| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

### Request body
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


### Expected result
The API returns `201 Created` and creates a new user record.

### Postman location
Create User → 2xx - Success → 201 - Created - Create User

![Create User — request headers](./create-user-201-headers.png)

![Create User — 201 response](./create-user-201.png)

