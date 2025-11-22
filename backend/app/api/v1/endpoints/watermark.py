from fastapi import APIRouter
from app.schemas.watermark import WatermarkRequest, WatermarkResponse, HealthResponse
from app.services.watermark_service import watermark_service

router = APIRouter()

@router.post("/compare", response_model=WatermarkResponse)
def get_watermarked_comparison(request: WatermarkRequest):
    return watermark_service.compare_text(request.prompt)

@router.get("/health", response_model=HealthResponse)
def check_health():
    return watermark_service.check_health()
