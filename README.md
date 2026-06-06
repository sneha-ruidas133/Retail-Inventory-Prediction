# Smart Inventory Forecasting System

## Overview

Smart Inventory Forecasting System is an AI-powered inventory management solution that predicts future product demand and helps businesses avoid stock shortages and overstocking.

The system uses Machine Learning to analyze historical sales data and generate demand forecasts along with inventory recommendations.

---

## Features

* Demand Forecast Prediction
* Inventory Restocking Recommendation
* Low Stock Alerts
* Weather-Based Demand Analysis
* Festival-Based Demand Analysis
* Interactive Dashboard
* FastAPI Backend
* Machine Learning Forecasting Model

---

## Tech Stack

### Frontend

* Streamlit
* Plotly

### Backend

* FastAPI
* Uvicorn

### Machine Learning

* Scikit-Learn
* Random Forest Regressor

### Data Processing

* Pandas
* NumPy

---

## Project Structure

inventory_forecasting/

├── app.py

├── train_model.py

├── dashboard.py

├── sales_data.csv

├── model.pkl

├── requirements.txt

└── README.md

---

## Installation

### Clone the Project

```bash
git clone <repository-url>
cd inventory_forecasting
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

Or

```bash
pip install pandas numpy scikit-learn joblib fastapi uvicorn streamlit plotly requests
```

---

## Train the Model

Run the following command:

```bash
python train_model.py
```

After successful execution, a model.pkl file will be generated.

---

## Start Backend Server

```bash
uvicorn app:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

API Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Run Dashboard

Open a new terminal and execute:

```bash
streamlit run dashboard.py
```

Dashboard URL:

```text
http://localhost:8501
```

---

## API Endpoint

### Predict Demand

POST /predict

Request:

```json
{
  "temperature": 30,
  "festival": 1,
  "season": 2,
  "current_stock": 100
}
```

Response:

```json
{
  "predicted_demand": 245,
  "current_stock": 100,
  "recommended_order": 145,
  "stock_status": "Low Stock"
}
```

---

## Workflow

1. Collect sales and inventory data.
2. Train machine learning model.
3. Predict future demand.
4. Generate inventory recommendations.
5. Display results through dashboard.

---

## Future Enhancements

* Real-time weather integration
* Festival calendar integration
* Multi-store inventory support
* Database integration
* User authentication
* Advanced analytics dashboard

---

## Team Members

1. Team Lead & Business Analyst
2. Data Engineer
3. Machine Learning Engineer
4. Backend Developer
5. Frontend Developer

---

## Business Impact

* Reduce inventory costs
* Minimize stock shortages
* Improve inventory planning
* Increase operational efficiency
* Support data-driven decision making

---

## License

This project is developed for educational and hackathon purposes.
