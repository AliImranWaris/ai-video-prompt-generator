"use client";
import { useState } from "react";

export default function Home() {
  const [productName, setProductName] = useState("");
  const [motionStyle, setMotionStyle] = useState("Macro Zoom");
  const [generatedPrompt, setGeneratedPrompt] = useState("");

  const handleGenerate = () => {
    if (!productName) return;
    const prompt = `Commercial product reel for ${productName}. Dynamic ${motionStyle} shot, specular lighting, ultra-realistic cinematic motion, 4k resolution, optimized for Luma, Runway & Seedance.`;
    setGeneratedPrompt(prompt);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
          AI Video Prompt Generator
        </h1>
        <p className="text-slate-400 text-center mb-6 text-sm">
          Generate high-converting commercial video prompts for Seedance, Luma & Runway.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">
              Product Name / Description
            </label>
            <input
              type="text"
              placeholder="e.g. Remington Hair Straightener, Wireless Earbuds..."
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">
              Camera Motion / Style
            </label>
            <select
              value={motionStyle}
              onChange={(e) => setMotionStyle(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Macro Zoom">Macro Zoom</option>
              <option value="360 Dynamic Orbit">360 Dynamic Orbit</option>
              <option value="Fast Camera Pan">Fast Camera Pan</option>
              <option value="Slow Motion Specular Highlight">Slow Motion Specular Highlight</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 transition font-semibold rounded-lg shadow-lg text-white"
          >
            Generate Prompt
          </button>

          {generatedPrompt && (
            <div className="mt-6 p-4 bg-slate-800 border border-blue-500/30 rounded-lg">
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                Generated AI Prompt:
              </h2>
              <p className="text-sm text-slate-200 bg-slate-900 p-3 rounded border border-slate-700 font-mono">
                {generatedPrompt}
              </p>
              <button
                onClick={() => navigator.clipboard.writeText(generatedPrompt)}
                className="mt-3 text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1.5 rounded"
              >
                Copy Prompt
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}