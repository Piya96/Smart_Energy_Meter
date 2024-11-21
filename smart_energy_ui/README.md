Electricity Reading Viewer
A web application to fetch, display, and interact with electricity readings for smart meters. This application consists of a backend built with .NET Core and a frontend built with React. It allows users to fetch electricity readings, compare price plans, and recommend the cheapest plans based on consumption.

Features

Backend Features
Endpoints:
Store electricity readings for a smart meter.
Fetch electricity readings for a smart meter.
Compare all price plans for a smart meter.
Recommend the cheapest price plans for a smart meter.
Built with .NET Core and follows RESTful API principles.
Implements dependency injection using AddTransient and AddSingleton.
Frontend Features
Modern, responsive UI built with React and Material-UI.
Features:
Fetch and display electricity readings in an interactive table.
Allow users to input Smart Meter IDs dynamically.
Compare and recommend price plans.
Styled components with Material-UI for a modern, clean look.

Technologies Used
Backend
Framework: .NET Core
Libraries:
Newtonsoft.Json
xUnit (for testing)
Server: IIS Express (or Kestrel)
Design Patterns: Dependency Injection, Controller-Service Pattern
Testing: xUnit with Moq for mocking services.

Frontend
Framework: React
Libraries:
Axios: For API requests.
Material-UI: For styling and responsive UI components.
Tools:
Postman: For API testing.
React Developer Tools: For debugging React components.
Setup Instructions
Backend Setup

Requirements:
.NET 6.0 or later.
Visual Studio 2022.
Steps:
Clone the repository and open the solution in Visual Studio.
Build the project to restore NuGet packages.
Run the backend using IIS Express or Kestrel. The server will run at http://localhost:55556/ by default.
Endpoints:
POST /readings/store: Store electricity readings.
GET /readings/read/{smartMeterId}: Fetch electricity readings.
GET /price-plans/compare-all/{smartMeterId}: Compare price plans.
GET /price-plans/recommend/{smartMeterId}?limit=N: Recommend cheapest plans.
Frontend Setup
Requirements:
Node.js (v14 or later).
npm or Yarn.
Steps:
Navigate to the frontend directory.
Install dependencies:
bash
Copy code
npm install
Start the React development server:
bash
Copy code
npm start
Open the app in your browser at http://localhost:3000/.
API Endpoints
1. Store Readings
POST /readings/store

Request Body:

json
Copy code
{
  "smartMeterId": "smart-meter-1",
  "electricityReadings": [
    { "time": "2024-11-21T14:00:00Z", "reading": 15.5 },
    { "time": "2024-11-21T15:00:00Z", "reading": 20.1 }
  ]
}
Response: 200 OK

2. Fetch Readings
GET /readings/read/{smartMeterId}

Response:

json
Copy code
[
  { "time": "2024-11-21T14:00:00Z", "reading": 15.5 },
  { "time": "2024-11-21T15:15:00Z", "reading": 16.2 }
]
3. Compare Price Plans
GET /price-plans/compare-all/{smartMeterId}

Response:

json
Copy code
{
  "pricePlanId": "price-plan-1",
  "pricePlanComparisons": {
    "price-plan-0": 50.0,
    "price-plan-1": 40.0,
    "price-plan-2": 60.0
  }
}
4. Recommend Cheapest Price Plans
GET /price-plans/recommend/{smartMeterId}?limit=N

Response:

json
Copy code
[
  { "key": "price-plan-1", "value": 40.0 },
  { "key": "price-plan-0", "value": 50.0 }
]
File Structure
Backend
scss
Copy code
Smart Energy/
├── Controllers/
│   ├── MeterReadingController.cs
│   ├── PricePlanComparatorController.cs
├── Domain/
│   ├── ElectricityReading.cs
│   ├── MeterReadings.cs
│   ├── PricePlan.cs
├── Services/
│   ├── AccountService.cs
│   ├── MeterReadingService.cs
│   ├── PricePlanService.cs
│   ├── Interfaces (e.g., IAccountService.cs)
├── Startup.cs
├── Program.cs
Frontend
arduino
Copy code
frontend/
├── src/
│   ├── components/
│   │   ├── ViewReadings.js
│   │   ├── ComparePlans.js
│   ├── App.js
│   ├── index.js
├── public/
│   ├── index.html
Testing
Backend
Run the test suite using xUnit:

Navigate to the test project (JOIEnergy.Tests) in Visual Studio.
Run all tests to verify backend functionality.
Frontend
Verify API calls using the browser console and network tab.
Use React Developer Tools to ensure state updates correctly.
Future Enhancements
Add user authentication for secure access.
Implement filtering and sorting in the frontend.
Add more price plans and dynamic rate calculations.
Deploy the app to Azure or AWS for production.
Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

License
This project is licensed under the MIT License.