# Customer Details Portal

This project is a single-page application built with React and TypeScript. It provides a customer details portal where you can view a list of customers and detailed information about a selected customer, including a photo grid that updates every 10 seconds.

## Features

1. **Customer List**: Displays a list of customers on the left side. Clicking on a customer card shows the details on the right.
2. **Customer Details**: Shows the customer's name, title, address, and a 3x3 grid of photos.
3. **Highlighted Selection**: The selected customer card is highlighted.
4. **Photo Grid**: The photo grid updates every 10 seconds with new images fetched from a public API.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Axios**: A promise-based HTTP client for making requests.
- **Pixabay API**: Used to fetch photos for the grid.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/customer-details-portal.git
    ```

2. **Navigate into the project directory**:

    ```bash
    cd customer-details-portal
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Usage

1. **Run the development server**:

    ```bash
    npm start
    ```

2. **Open the application in your browser**:

    Go to `http://localhost:3000` to view the application.

## API Endpoints

- **Customer Data**: The customer data is fetched from a local file named `mockData.json` (mock data for development).
- **Photos**: The photos are fetched from the [Pixabay API](https://pixabay.com/api/). Replace the API key in the source code if needed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Pixabay API](https://pixabay.com/api/) for providing the photo service.
- [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) for the technologies used in the development of this project.
