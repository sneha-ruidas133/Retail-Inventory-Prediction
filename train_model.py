import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

df = pd.read_csv("sales_data.csv")

X = df[[
    "temperature",
    "festival",
    "season",
    "current_stock"
]]

y = df["sales"]

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

joblib.dump(model, "model.pkl")

print("Model trained successfully")