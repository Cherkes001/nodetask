# Demo Backend

## API

Add community to community collection:  
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

Get full list of community:  
GET /api/community/list
