import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResultDisplayProps {
  generatedText: string;
  tone: string;
  onRegenerate?: () => void;
  isVisible: boolean;
}

export const ResultDisplay = ({ generatedText, tone, onRegenerate, isVisible }: ResultDisplayProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      toast({
        title: "✅ Copied to clipboard!",
        description: "Your generated reply is ready to use.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "❌ Copy failed",
        description: "Please try selecting and copying manually.",
        variant: "destructive",
      });
    }
  };

  const getToneEmoji = (tone: string) => {
    const emojiMap: Record<string, string> = {
      professional: '💼',
      friendly: '😊',
      apologetic: '🙏',
      confident: '💪',
      enthusiastic: '🚀',
    };
    return emojiMap[tone] || '💬';
  };

  if (!isVisible) {
    return (
      <div className="glass-card text-center py-12 animate-fade-in">
        <div className="float-animation">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Generate</h3>
        <p className="text-muted-foreground">
          Fill in the email content and select a tone to get your AI-generated reply
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card animate-slide-up space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Generated Reply</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="status-indicator bg-primary/20 text-primary border border-primary/30">
            <span className="mr-2">{getToneEmoji(tone)}</span>
            {tone.charAt(0).toUpperCase() + tone.slice(1)} Tone
          </div>
          <div className="flex gap-2">
            {onRegenerate && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onRegenerate}
                className="hover:bg-secondary"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCopy}
              className={`transition-all duration-300 ${copied ? 'bg-success text-white' : 'hover:bg-secondary'}`}
            >
              {copied ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-background/50 border border-border/50 rounded-lg p-6">
        <pre className="text-foreground whitespace-pre-wrap text-base leading-relaxed font-sans">
          {generatedText}
        </pre>
      </div>
      
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>AI-generated content • Review before sending</span>
        <span>{generatedText.split(' ').length} words</span>
      </div>
    </div>
  );
};