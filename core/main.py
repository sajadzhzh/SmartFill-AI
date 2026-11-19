from fastapi import FastAPI, status, Query
from fastapi.exceptions import HTTPException
from Schema.Predict import Predict, Response
from Services.Predict import Prediction

app = FastAPI()

@app.get("/", status_code=status.HTTP_200_OK)
def root():
    return {"detail": "Welcome to SmartFill AI. This AI gets three arguments (height, weight, shoe size) and tells that those info is for a male or female"}

@app.post("/predict", status_code=status.HTTP_200_OK, response_model=Response)
def get_names(data: Predict):
    answer= Prediction(data)
    
    return answer