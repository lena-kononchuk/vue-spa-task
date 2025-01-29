## Getting Started

1. **Clone the project repository.**

    Clone the project repository with the following command:

    ```bash
    git clone https://github.com/lena-kononchuk/vue-spa-task
    ```

2. **Install dependencies.**

    Install the necessary dependencies:

    ```bash
    npm install
    ```

3. **Start the local server.**

    Start the local server with the following command:

    ```bash
    npm run dev
    ```

4. **Visit the application.**

    You can view the project locally at localhost.

### Using MockAPI

To work with reviews in the project, [MockAPI](https://mockapi.io/) is used, which provides a test backend.



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