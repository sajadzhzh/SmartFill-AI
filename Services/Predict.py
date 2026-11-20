from Schema.Predict import Predict
from Services.Learn import clf

def Prediction(data: Predict):
    predict = clf.predict([[data.height, data.weight, data.shoe_size]])
    gender = predict[0]
    
    probabilities = clf.predict_proba([
        [data.height, data.weight, data.shoe_size]
    ])
    
    confidence = max(probabilities[0]) * 100

    return {"gender": gender,
            "confidence": round(confidence, 2)
            }