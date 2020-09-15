# Demo Backend

## API

## User - Generation:

При каждом обращениии к API генерируется новый userId - при двух условиях:  
A: Был отправлен headers без userId или с пустым userId;  
B: Отправлен не валидный userId в headers;

Сгенерированый userId возвращается в headers, если был отправлен валидный userId, то возвращается тот же что и был отпрвавлен.

### Add community to community collection:

_POST_ `/api/community/`  
Example: in body

```
{
    "name" : "Example",
    "picture" : "http://example.com/example.png",
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
        "picture": "http://example.com/example.png",
        "category": "Fun",
        "sub_count": 123,
        "post_count": 321,
        "__v": 0
    }
}
```

### Get full list of community:

_GET_ `/api/community/`

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

Example: in params `:communityId = 5f58e6d0b0b463955d064538`

Response:

```
{
    "success": true,
    "data": {
        "_id": "5f58e6d0b0b463955d064538",
        "name": "Test Community 1",
        "image": "http://placekitten.com/256/256?image=1",
        "type": "News",
        "__v": 0
    }
}
```

### Follow :

_POST_ `/api/userapi/subscribe`

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

_GET_ `/api/community-users`

Example:
In headers `communityId: "5f4909a9bc2a9c626dbb285f`

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
