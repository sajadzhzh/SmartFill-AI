from Schema.Predict import Predict
from Services.Learn import clf

def Prediction(data: Predict):
    predict = clf.predict([[data.height, data.weight, data.shoe_size]])
    gender = predict[0]
    return {"gender": gender}