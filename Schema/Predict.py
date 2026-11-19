from pydantic import BaseModel, Field

class Predict(BaseModel):
    height: int = Field(..., gt=0)
    weight: int = Field(..., gt=0)
    shoe_size: int = Field(..., gt=0)
    
class Response(BaseModel):
    gender: str