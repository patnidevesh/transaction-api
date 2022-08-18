# TransactionAPI

### Run `npm install`

### Run `node index.js`

### Product API
1. create the product with payload
API:  POST `/product` 
BODY: {
          "name":"Product-2",
          "description":"This is description-2",
          "price":100,
          "quantity":10,
          "category":"Category-2"
      }
      
2. get all the product details available
API: GET /product/all

3. get product by name
API: GET /product/name
BODY: {
          "name":"Product"
      }
      
### Transaction API
1. Make Transaction with payload
API:    POST /pay
BODY:   {
            "product":"Product-1",
            "payment_method":"card",
            "email":"user-2@gmail.com",
            "price":200
        }
         
2. Get All the Transaction History
API: GET /transaction/all

3. Get Transaction history of particular user
API:    GET /transaction/user
BODY:   {
            "email":"user-1@gmail.com"
        }
        
        
### User API

1. Create new user
API:    POST/user
BODY:   {
          name: "user-1",
          email: "user1@gmail.com",
        }
        
        
2. Get User by Email
API:  GET /user
BODY: {
          "email":"user-1@gmail.com"
      }



### Note - For making payments currently I have integrated with stripe services with the test stripe account.
### Note - For evaluation purpose I am posting the config file will remove it later.
