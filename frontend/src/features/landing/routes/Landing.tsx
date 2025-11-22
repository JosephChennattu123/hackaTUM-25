import { Head } from '@/components/Head';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';

export const Landing = () => {
    return (
        <>
            <Head title="AI Watermarking" description="Secure your AI generated content" />
            <div className="flex flex-col min-h-screen">
                <Hero />
                <Features />
                <HowItWorks />
            </div>
        </>
    );
};
