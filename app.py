from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

model = joblib.load("model.pkl")


class PredictionRequest(BaseModel):
    temperature: float
    festival: int
    season: int
    current_stock: int


@app.get("/")
def home():
    return {
        "message": "Inventory Forecast API Running"
    }


@app.post("/predict")
def predict(data: PredictionRequest):

    features = np.array([
        [
            data.temperature,
            data.festival,
            data.season,
            data.current_stock
        ]
    ])

    demand = int(model.predict(features)[0])

    recommended_order = max(
        demand - data.current_stock,
        0
    )

    stock_status = (
        "Low Stock"
        if data.current_stock < demand
        else "Sufficient"
    )

    return {
        "predicted_demand": demand,
        "current_stock": data.current_stock,
        "recommended_order": recommended_order,
        "stock_status": stock_status
    }