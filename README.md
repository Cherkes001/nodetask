# Demo Backend

## API

### Add community to community collection:

_POST_ `/api/community/create`  
Query body params:

```
{
    "name" : "Example",
    "picture" : "http://exmpale.com/example.png",
    "category" : "Fun",
    "sub_count" : "123",
    "post_count" : "321"
}
```

Response:

```
{
    "success": true,
    "data": {
        "_id": "5f4cd0a39bdace5298c550db",
        "name": "Example",
        "picture": "http://exmpale.com/example.png",
        "category": "Fun",
        "sub_count": 123,
        "post_count": 321,
        "__v": 0
    }
}
```

### Get full list of community:

_GET_ `/api/community/list`

Response:

```
{
    "success": true,
    "data": [
        {
            "_id": "5f49094d078db461918e2fb5",
            "name": "Demo Record 1",
            "picture": "/url/pic",
            "category": "Test",
            "sub_count": 666,
            "post_count": 13,
            "__v": 0
        },
        {
            "_id": "5f49096f89301861e7da677c",
            "name": "Demo Record 2",
            "picture": "/url/pic",
            "category": "Test",
            "sub_count": 666,
            "post_count": 13,
            "__v": 0
        },
        {
            "_id": "5f4909a9bc2a9c626dbb285f",
            "name": "Demo Record 3",
            "picture": "/url/pic",
            "category": "Test",
            "sub_count": 666,
            "post_count": 13,
            "__v": 0
        }
}
```

### Get community from id:

_GET_ `/api/community`

Example: in headers `communityId = 5f49094d078db461918e2fb5`

Response:

```
{
    "success": true,
    "data": {
        "_id": "5f49094d078db461918e2fb5",
        "name": "Demo Record 1",
        "picture": "/url/pic",
        "category": "Test",
        "sub_count": 666,
        "post_count": 13,
        "__v": 0
    }
}
```

### Subscribe:  

_POST_ `/api/users/userapi/subscribe`

Example:  
In headers `userid = 5f51dff3305e992100ff1177`
In body 
```
{
    "communityId": "5f4909a9bc2a9c626dbb285f"
}
```
Response:  
```
{
    "success": true
}
```

### Get followers of community:  

_GET_ `api/collections/community-users`  

Example: 
In body 
```
{
    "communityId": "5f4909a9bc2a9c626dbb285f"
}
```
Response:  
```
{
    "success": true,
    "data": [
        {
            "_id": "5f4e3cf72df96ec1eff5fbbb",
            "__v": 0
        },
        {
            "_id": "5f4fa735a3977a8f32f578c7",
            "__v": 0
        }
    ]
}
```