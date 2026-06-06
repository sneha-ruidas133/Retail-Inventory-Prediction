import streamlit as st
import requests
import plotly.express as px
import pandas as pd

st.title("📦 Smart Inventory Forecasting")

temperature = st.slider(
    "Temperature",
    10,
    45,
    30
)

festival = st.selectbox(
    "Festival",
    [0, 1]
)

season = st.selectbox(
    "Season",
    [1, 2, 3]
)

current_stock = st.number_input(
    "Current Stock",
    min_value=0,
    value=100
)

if st.button("Predict Demand"):

    response = requests.post(
        "http://127.0.0.1:8000/predict",
        json={
            "temperature": temperature,
            "festival": festival,
            "season": season,
            "current_stock": current_stock
        }
    )

    result = response.json()

    st.success(
        f"Predicted Demand: {result['predicted_demand']}"
    )

    st.warning(
        f"Recommended Order: {result['recommended_order']}"
    )

    st.info(
        f"Status: {result['stock_status']}"
    )

    chart_data = pd.DataFrame({
        "Category": [
            "Current Stock",
            "Predicted Demand"
        ],
        "Units": [
            current_stock,
            result["predicted_demand"]
        ]
    })

    fig = px.bar(
        chart_data,
        x="Category",
        y="Units"
    )

    st.plotly_chart(fig)