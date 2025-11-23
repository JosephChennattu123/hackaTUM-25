<b>To run the backend:</b>  
python -m venv venv # Creates venv  
./venv/Scripts/activate # Activates venv  
pip install -r "requirements.txt"  
gcloud auth application-default login # Login with hackatum gcp details, requires gcli. Sets ADC locally  
fastapi dev app/main.py  

<b>To run the frontend:</b>    
npm install  
npm run dev  

Go to /health in the browser or click system status to check whether both are working or not.

Attached below are cognitive models that you can use to understand the watermarking process and detectors.

Firstly, we have the Gemma model which we watermarked using SynthID and a cheeky static watermark.

Secondly, we have the StableDiffusion model which we watermarked using a Fourier transform.
 
Papers list:
[Scalable watermarking for identifying large language model outputs: SynthID Text Google](https://www.nature.com/articles/s41586-024-08025-4)  
[Gemma 2: Improving Open Language Models at a Practical Size](https://arxiv.org/abs/2408.00118)  
[High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2112.10752)  
[Secure Data Embedding using Fourier Transform-based Watermarking](https://ieeexplore.ieee.org/document/10726146)  