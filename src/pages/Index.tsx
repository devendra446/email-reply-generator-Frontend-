import { useState } from 'react';
import { CarLogo } from '@/components/CarLogo';
import { EmailForm } from '@/components/EmailForm';
import { ResultDisplay } from '@/components/ResultDisplay';
import { MailingAnimation } from '@/components/MailingAnimation';
import { Toaster } from '@/components/ui/toaster';
import axios from 'axios';

const Index = () => {
  const [generatedText, setGeneratedText] = useState('');
  const [currentTone, setCurrentTone] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (emailContent: string, tone: string) => {
    try {
      setIsGenerating(true);
      setCurrentTone(tone);
      setShowResult(false);

      // Simulate AI processing time for UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Make API call to backend
      const response = await axios.post('https://email-reply-generator-backend-production-48ff.up.railway.app/api/email/generate', {
        emailContent,
        tone,
      });

      if (response.data) {
        setGeneratedText(response.data); // Use backend response
      } else {
        // Fallback to frontend-generated reply
        const reply = generateReply(emailContent, tone);
        setGeneratedText(reply);
      }

      setShowResult(true);
    } catch (error) {
      console.error('Error generating email:', error);
      alert('Failed to connect to backend. Is Spring Boot running on port 8080?');

      // Fallback to template
      const reply = generateReply(emailContent, tone);
      setGeneratedText(reply);
      setShowResult(true);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateReply = (content: string, selectedTone: string) => {
    const greetings = {
      professional: "Dear [Name],\n\nThank you for your email.",
      friendly: "Hi there!\n\nThanks for reaching out!",
      apologetic: "Dear [Name],\n\nI sincerely apologize for any inconvenience.",
      confident: "Hello,\n\nI'm confident we can resolve this.",
      enthusiastic: "Hi!\n\nI'm excited to help you with this!"
    };

    const closings = {
      professional: "\n\nBest regards,\n[Your Name]",
      friendly: "\n\nCheers,\n[Your Name]",
      apologetic: "\n\nSincerely,\n[Your Name]",
      confident: "\n\nLooking forward to your response,\n[Your Name]",
      enthusiastic: "\n\nCan't wait to hear back from you!\n[Your Name]"
    };

    const greeting = greetings[selectedTone as keyof typeof greetings] || greetings.professional;
    const closing = closings[selectedTone as keyof typeof closings] || closings.professional;

    return `${greeting}\n\nI have reviewed your message regarding: "${content.substring(0, 100)}${content.length > 100 ? '...' : ''}"\n\nI understand your concerns and would like to provide the following response:\n\n[Your detailed response would go here, tailored to the ${selectedTone} tone you selected. This AI-generated template provides a starting point that you can customize based on the specific content and context of the original email.]\n\n${closing}`;
  };

  const handleClear = () => {
    setGeneratedText('');
    setCurrentTone('');
    setShowResult(false);
  };

  const handleRegenerate = () => {
    if (generatedText) {
      const variations = [
        "Here's an alternative approach to your reply:",
        "Consider this refined version:",
        "Here's another way to phrase your response:",
      ];
      const randomVariation = variations[Math.floor(Math.random() * variations.length)];
      setGeneratedText(`${randomVariation}\n\n${generatedText}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <CarLogo />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform any email into a professional, perfectly-toned reply with the power of AI. 
            Save time and communicate better.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <EmailForm 
              onGenerate={handleGenerate}
              onClear={handleClear}
              isGenerating={isGenerating}
            />

            {/* Features List */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary">⚡</span>
                Why Use AI Email Generator?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Save 5-10 minutes per email response
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Maintain consistent professional tone
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Never miss important details in replies
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Reduce email anxiety and writer's block
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Animation & Results */}
          <div className="space-y-6">
            <div className="glass-card">
              <MailingAnimation />
            </div>

            <ResultDisplay
              generatedText={generatedText}
              tone={currentTone}
              onRegenerate={handleRegenerate}
              isVisible={showResult}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-border/50">
          <p className="text-muted-foreground">
            Powered by advanced AI • Always review generated content before sending
          </p>
        </footer>
      </div>

      <Toaster />
    </div>
  );
};

export default Index;
