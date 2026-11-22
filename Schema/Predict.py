from pydantic import BaseModel, Field, field_validator

class Predict(BaseModel):
    height: int = Field(..., gt=0)
    weight: int = Field(..., gt=0)
    shoe_size: int = Field(..., gt=0)

    @field_validator("height", "weight", "shoe_size", mode="before")
    @classmethod
    def normalize_numbers(cls, value):
        persian = "۰۱۲۳۴۵۶۷۸۹"
        arabic = "٠١٢٣٤٥٦٧٨٩"

        translation = str.maketrans(
            persian + arabic,
            "0123456789" * 2
        )

        return str(value).translate(translation)


class Response(BaseModel):
    gender: str
    confidence: int
