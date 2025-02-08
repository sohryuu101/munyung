import React from "react";

export default function Video() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-white video">Wish From Friends🌠! </h1>
                <div className="max-w-3xl mx-auto peding-b"> {/* Add max-width container */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Rick Astley - Never Gonna Give You Up"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}