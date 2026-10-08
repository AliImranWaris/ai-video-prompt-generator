'use client';

import { useState } from 'react';

export default function Home() {
  const [productName, setProductName] = useState('');
  const [cameraMotion, setCameraMotion] = useState('Slow Motion Specular Highlight');
  const [aiModel, setAiModel] = useState('Seedance 2.5');
  const [lighting, setLighting] = useState('Studio Specular');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!productName.trim()) return;

    const prompt = `Commercial product reel for ${productName}. Dynamic ${cameraMotion} shot with ${lighting} lighting. Ultra-realistic cinematic motion, 4k resolution, 9:16 aspect ratio, optimized for ${aiModel}. Specular highlights, hyper-detailed textures, smooth movement.`;

    setGeneratedPrompt(prompt);
    setCopied(false);
  };

  const handleCopy = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 text-center mb-2">
          AI Video Prompt Generator
        </h1>
        <p className="text-slate-400 text-sm text-center mb-6">
          Generate high-converting commercial video prompts for Seedance, Luma, Runway & Pika.
        </p>

        <div className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Product Name / Description
            </label>
            <input
              type="text"
              placeholder="e.g., Remington Hair Straightener, Wireless Earbuds"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-slate-100"
            />
          </div>

          {/* AI Model Target */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Target AI Video Model
            </label>
            <select
              value={aiModel}
              onChange={(e) => setAiModel(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-slate-100"
            >
              <option value="Seedance 2.5">Seedance 2.5</option>
              <option value="Luma Dream Machine">Luma Dream Machine</option>
              <option value="Runway Gen-3">Runway Gen-3</option>
              <option value="Pika Labs">Pika Labs</option>
            </select>
          </div>

          {/* Camera Motion */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Camera Motion / Style
            </label>
            <select
              value={cameraMotion}
              onChange={(e) => setCameraMotion(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-slate-100"
            >
              <option value="Slow Motion Specular Highlight">Slow Motion Specular Highlight</option>
              <option value="360 Dynamic Orbit">360 Dynamic Orbit</option>
              <option value="Macro Cinematic Zoom">Macro Cinematic Zoom</option>
              <option value="Fast Camera Pan">Fast Camera Pan</option>
              <option value="FPV Drone Flyover">FPV Drone Flyover</option>
            </select>
          </div>

          {/* Lighting */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Lighting Vibe
            </label>
            <select
              value={lighting}
              onChange={(e) => setLighting(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-slate-100"
            >
              <option value="Studio Specular">Studio Specular</option>
              <option value="Moody Cyberpunk Neon">Moody Cyberpunk Neon</option>
              <option value="Golden Hour Natural Light">Golden Hour Natural Light</option>
              <option value="Minimalist Softbox Elegance">Minimalist Softbox Elegance</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition duration-200 mt-2"
          >
            Generate Prompt
          </button>
        </div>

        {/* Output Area */}
        {generatedPrompt && (
          <div className="mt-6 p-4 bg-slate-800/80 border border-blue-500/30 rounded-xl">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              Generated AI Prompt:
            </h2>
            <p className="text-sm text-slate-200 bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono leading-relaxed">
              {generatedPrompt}
            </p>
            <button
              onClick={handleCopy}
              className="mt-3 text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 px-4 py-2 rounded-lg transition"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Prompt'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}