from fastapi import APIRouter
from app.api.v1.endpoints import watermark

api_router = APIRouter()
api_router.include_router(watermark.router, prefix="/watermark", tags=["watermark"])
