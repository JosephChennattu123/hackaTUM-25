import requests
from fastapi import HTTPException
from app.core.config import settings
from app.schemas.watermark import WatermarkResponse, HealthResponse

class WatermarkService:
    def __init__(self):
        if not settings.GEMMA_COLAB_NOTE:
            raise ValueError("GEMMA_COLAB_NOTE is not configured")
        self.base_url = settings.GEMMA_COLAB_NOTE.rstrip("/")

    def compare_text(self, prompt: str) -> WatermarkResponse:
        url = f"{self.base_url}/predict"
        payload = {"instances": [prompt]}

        try:
            response = requests.post(url, json=payload)
            response.raise_for_status()
            data = response.json()

            if "predictions" not in data or not data["predictions"]:
                raise HTTPException(status_code=500, detail="Invalid response format from model service")

            prediction_pair = data["predictions"][0]

            if not isinstance(prediction_pair, list) or len(prediction_pair) < 2:
                raise HTTPException(status_code=500, detail=f"Unexpected prediction format: {prediction_pair}")

            return WatermarkResponse(
                watermarked=prediction_pair[0],
                clean=prediction_pair[1]
            )
        except requests.RequestException as e:
            raise HTTPException(status_code=502, detail=f"Error communicating with model service: {str(e)}")

    def check_health(self) -> HealthResponse:
        url = f"{self.base_url}/health"
        try:
            response = requests.get(url)
            response.raise_for_status()
            data = response.json()
            
            return HealthResponse(
                status=data.get("status", "unknown"),
                gpu=data.get("gpu", "unknown")
            )
        except requests.RequestException as e:
             raise HTTPException(status_code=502, detail=f"Error communicating with model service: {str(e)}")

watermark_service = WatermarkService()
