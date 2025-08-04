import React from 'react';

export const MailingAnimation = () => {
  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
      {/* Background with Network Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-2xl border border-border">
        {/* Network Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-primary animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-accent-green animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-primary animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-accent animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-accent-green animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        {/* Cloud Storage Icons */}
        <div className="absolute top-4 right-4 text-lg text-primary animate-float">☁️</div>
        <div className="absolute top-8 left-4 text-sm text-accent animate-float" style={{ animationDelay: '1s' }}>💾</div>
        <div className="absolute bottom-4 right-8 text-sm text-accent-green animate-float" style={{ animationDelay: '2s' }}>🔒</div>
      </div>
      
      {/* Main Email Flow Animation */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-8">
        
        {/* Left Side - Sender */}
        <div className="flex flex-col items-center space-y-4">
          {/* Person Avatar */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
              👨‍💼
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-green rounded-full border-2 border-card animate-ping"></div>
          </div>
          
          {/* Device */}
          <div className="relative">
            {/* Laptop */}
            <div className="w-20 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg relative">
              {/* Screen */}
              <div className="absolute -top-8 left-1 w-18 h-10 bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-lg border border-gray-600">
                {/* Email Compose Interface */}
                <div className="p-1 space-y-1">
                  <div className="w-full h-1 bg-primary rounded animate-pulse"></div>
                  <div className="w-3/4 h-0.5 bg-accent rounded"></div>
                  <div className="w-1/2 h-0.5 bg-accent-green rounded"></div>
                  <div className="w-full h-1 bg-orange-400 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              {/* Keyboard */}
              <div className="absolute top-2 left-2 grid grid-cols-8 gap-0.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1 h-0.5 bg-gray-700 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground font-medium">Sender</div>
        </div>
        
        {/* Center - Email Transfer Animation */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
          {/* Email Packets Flying */}
          <div className="relative w-full h-20">
            {/* Email 1 */}
            <div className="absolute left-0 top-2 animate-email-send">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg shadow-lg transform">
                <div className="text-white text-xs font-bold">📧 Email</div>
              </div>
            </div>
            
            {/* Email 2 */}
            <div className="absolute left-0 top-8 animate-email-send" style={{ animationDelay: '1s' }}>
              <div className="bg-gradient-to-r from-accent to-accent-green p-2 rounded-lg shadow-lg transform">
                <div className="text-white text-xs font-bold">✉️ Reply</div>
              </div>
            </div>
            
            {/* Email 3 */}
            <div className="absolute left-0 top-14 animate-email-send" style={{ animationDelay: '2s' }}>
              <div className="bg-gradient-to-r from-accent-green to-primary p-2 rounded-lg shadow-lg transform">
                <div className="text-white text-xs font-bold">📨 Auto</div>
              </div>
            </div>
            
            {/* Data Transfer Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-accent-green opacity-50 animate-pulse"></div>
            
            {/* Speed Lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent to-primary opacity-60 animate-road-lines"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* AI Processing Center */}
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-rainbow-glow">
              <div className="text-white font-bold text-lg">AI</div>
            </div>
            {/* Processing Rings */}
            <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping"></div>
            <div className="absolute inset-0 border-2 border-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="text-xs text-primary font-bold animate-pulse">Processing...</div>
        </div>
        
        {/* Right Side - Receiver */}
        <div className="flex flex-col items-center space-y-4">
          {/* Person Avatar */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl animate-pulse" style={{ animationDelay: '1s' }}>
              👩‍💻
            </div>
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold animate-bounce">3</div>
          </div>
          
          {/* Device */}
          <div className="relative">
            {/* Phone */}
            <div className="w-12 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-600 relative">
              {/* Screen */}
              <div className="absolute top-1 left-1 w-10 h-16 bg-gradient-to-b from-blue-900 to-blue-800 rounded">
                {/* Notification */}
                <div className="p-1 space-y-1">
                  <div className="w-full h-1 bg-green-400 rounded animate-pulse"></div>
                  <div className="text-[6px] text-green-300 font-bold">New Email!</div>
                  <div className="w-3/4 h-0.5 bg-blue-300 rounded"></div>
                  <div className="w-1/2 h-0.5 bg-purple-300 rounded"></div>
                </div>
              </div>
              {/* Home Button */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground font-medium">Receiver</div>
        </div>
      </div>
      
      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-float"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Success Checkmarks */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="text-green-400 animate-bounce">✓</div>
        <div className="text-green-400 animate-bounce" style={{ animationDelay: '0.2s' }}>✓</div>
        <div className="text-green-400 animate-bounce" style={{ animationDelay: '0.4s' }}>✓</div>
      </div>
    </div>
  );
};