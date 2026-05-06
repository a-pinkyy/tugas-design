export default function LearnPage() {
    return (
        <div className="bg-white h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <div className="bg-blue-300 h-72 w-96 p-8 flex flex-col justify-between rounded-4xl">
                <div className="flex gap-4">
                    <img src={"/palette.svg"} className="w-6 h-6 invert" alt="Icon palette" />
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Adobe Photoshop</h1>
                    <p>In 3 days</p> 
                </div>
                </div>

                <div className="bg-green-300 h-72 w-106 p-8 flex flex-col justify-between rounded-4xl">
                <div className="flex gap-4">
                    <img src={"/AI.svg"} className="w-6 h-6 invert" alt="Icon AI" />
                    <p>AI</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">DALL.E 2, Midjourney, Stable Diffusion</h1>
                    <p>In 5 days</p> 
                </div>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="bg-purple-300 h-62 w-66 p-8 flex flex-col justify-between rounded-4xl">
                <div className="flex gap-4">
                    <img src={"/palette.svg"} className="w-6 h-6 invert" alt="Icon Palette" />
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Figma</h1>
                    <p>8 hours ago</p>
                </div>
                </div>

                <div className="bg-orange-300 h-62 w-66 p-8 flex flex-col justify-between rounded-4xl">
                <div className="flex gap-4">
                    <img src={"/codding.svg"} className="w-6 h-6 invert" alt="Icon Codding"/>
                    <p>Codding</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Pyhton</h1>
                    <p>2 days ago</p>
                </div>
                </div>
            
                <div className="bg-red-300 h-62 w-66 p-8 flex flex-col justify-between rounded-4xl">
                <div className="flex gap-4">
                    <img src={"/palette.svg"} className="w-6 h-6 invert" alt="Icon Palette" />
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Sketch</h1>
                    <p>4 days ago</p>
                </div>
                </div>
            </div>    
        </div>    
        </div>
    );
}

