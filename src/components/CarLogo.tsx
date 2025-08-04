import carLogoImage from '@/assets/car-logo.png';

export const CarLogo = () => {
  return (
    <div className="flex items-center gap-3 group">
      <div className="car-logo transform transition-all duration-300 hover:animate-bounce-hover">
        <img 
          src={carLogoImage} 
          alt="AI Email Generator" 
          className="w-12 h-12 object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-purple to-accent-orange opacity-0 hover:opacity-20 rounded-full blur-md transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent-purple to-accent-orange bg-clip-text text-transparent hover:animate-pulse transition-all duration-300">
          AI Email Generator
        </h1>
        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
          Powered by Advanced AI ✨
        </p>
      </div>
    </div>
  );
};