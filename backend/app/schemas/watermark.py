from pydantic import BaseModel

class WatermarkRequest(BaseModel):
    prompt: str

class WatermarkResponse(BaseModel):
    watermarked: str
    clean: str

class HealthResponse(BaseModel):
    status: str
    gpu: str
