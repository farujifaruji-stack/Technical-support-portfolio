# Create User

## Success — 200 OK

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
The API returns `200 Created` and creates a new user record.

### Postman location
Create User → 2xx - Success → 200 - Created - Create User

![Create User — request headers](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/200-OK/create%20user-200-headers.png)

![Create User — 200 OK response](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/200-OK/create%20user-200.png)

