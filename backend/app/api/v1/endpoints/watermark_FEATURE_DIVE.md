# Feature Dive: Watermarking

**Location**: `app/api/v1/endpoints/watermark.py`

## Overview
This module handles the interaction with a custom Gemma Colab instance to generate watermarked and clean text comparisons. It follows the MVC pattern, delegating logic to `WatermarkService`.

## API Endpoints
*   `POST /api/v1/watermark/compare`: Accepts a prompt and returns a pair of texts (watermarked and clean).
*   `GET /api/v1/watermark/health`: Checks the health of the Colab instance and returns GPU status.

## Data Structures (Schemas)
**Location**: `app/schemas/watermark.py`
*   **Request Model**: `WatermarkRequest`
    *   `prompt`: `str`
*   **Response Models**:
    *   `WatermarkResponse`: `watermarked` (str), `clean` (str)
    *   `HealthResponse`: `status` (str), `gpu` (str)

## Business Logic (Services)
**Location**: `app/services/watermark_service.py`
*   **Service**: `WatermarkService`
*   **Key Operations**:
    *   `compare_text(prompt)`: Proxies to `{GEMMA_COLAB_NOTE}/predict`.
    *   `check_health()`: Proxies to `{GEMMA_COLAB_NOTE}/health`.

## Dependencies & Security
*   **External Service**: Custom Colab instance (via ngrok).
*   **Configuration**: `GEMMA_COLAB_NOTE` in `app/core/config.py`.

## Tricky Details
*   **Service Initialization**: The service raises an error on init if `GEMMA_COLAB_NOTE` is missing.
