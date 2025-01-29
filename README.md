1 **Clone the project repository.**

git clone https://github.com/your-repo/project.git
cd project

3. **Install dependencies.**

npm install

4. **Start the local server.**

npm run dev

The server will be available at http://localhost:3000.
### Using MockAPI

To work with reviews in the project, [MockAPI](https://mockapi.io/) is used, which provides a test backend.

**Main endpoints:**

- GET /reviews
Gets a list of reviews.
Sample response:
[
  {
    "id": "1",
    "name": "Jane Doe",
    "reviews": "Awesome!",
    "rating": 4
  },
]

- POST /reviews
Adds a new review.
**Request body:**
{
"name": "Jane Doe",
"reviews": "Awesome!",
}