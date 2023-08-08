# Database Structure

This project uses MongoDB and below is the database schema I used in this project.

### products

    {
    	_id: ObjectId
    	productLink: string
    	title: string
    	price: integer
    }

### videos

    {
        _id: ObjectId
        embedUrl: string, required
    	thumbnailUrl: string, required
    	productIds: string[], ref -> products
    	**comments**: Object[] {
    		username: string
    		comment: string
    		timestamp: Date
    	}
    }

# API Structure

![image](https://github.com/AnandaIlyasa/gigih/assets/71200519/96a6efa2-8f5b-4159-a6c7-171c09e42293)

# Endpoint

## Videos

- Video object

```
{
  videoId: ObjectId
  thumbnailUrl: string
}
```

**GET /api/videos**

---

Returns all videos.

- **URL Params**

- **Data Params**

  None

- **Headers**

  Content-Type: application/json

- **Success Response:**

- **Code:** 200

  **Content:**

```
{
	videos: [
		{<video_object>},
		{<video_object>},
		{<video_object>}
	]
}
```

## Products

- Product object

```
{
	productId: ObjectId
	productLink: string
	title: string
	price: integer
}
```

**GET /api/products/:videoId**

---

Returns products on the specified video.

- **URL Params**

  _Required:_ `videoId=[string]`

- **Data Params**

  None

- **Headers**

  Content-Type: application/json

- **Success Response:**

- **Code:** 200

**Content:**

```
{
	products: [
		<prduct_object>,
		<prduct_object>,
		<prduct_object>
	]
}
```

- **Error Response:**

- **Code:** 400

  **Content:**

```
{
	status: "fail",
	message: "can not get all products in video with id <videoId>"
}
```

## Comments

- Comment object

```
{
	username: string
	comment: string
	timestamp: Date
}
```

**GET /api/videos/:videoId/comments**

---

Returns comments on specified video.

- **URL Params**

  _Required:_ `videoId=[string]`

- **Data Params**

  None

- **Headers**

  Content-Type: application/json

- **Success Response:**

- **Code:** 200

**Content:**

```
{
	comments: [
		<comment_object>,
		<comment_object>,
		<comment_object>
	]
}
```

- **Error Response:**

- **Code:** 400

**Content:**

```
{
	status: "fail",
	message: "an not get all comments in video with id <videoId>"
}
```

**POST /api/videos/:videoId/comments**

---

Submit a comment on a video

- **URL Params**

  _Required:_ `videoId=[integer]`

- **Data Params**

```
{
	username: string
	comment: string
}
```

- **Headers**

  Content-Type: aplication/json

- **Success Response:**

- **Code:** 200

  **Content:**

```
{
	status: "success"
	comment: <comment_object>
}
```

- **Error Response:**

- **Code:** 400

  **Content:**

```
{
	status: "fail",
	message: "failed posting a new comment in video with id <videoId>"
}
```

OR

- **Code:** 400

  **Content:**

```
{
	status: "fail",
	message: "comment can not be empty"
}

```

OR

- **Code:** 400

  **Content:**

```
{
	status: "fail",
	message: "username can not be empty"
}
```

# How to run

1. Extract the .zip file of this project or clone the repository and go to the `midterm` folder

```
	https://github.com/AnandaIlyasa/gigih
```

2. Make sure your MongoDB server is up and running at port `27017`

3. Install all dependencies

```
	npm install
```

4. Run the aplication

```
	npm run start
```

or start in development mode

```
	npm run dev
```
