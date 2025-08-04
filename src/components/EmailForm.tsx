import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Wand2, Trash2, FileText, Palette } from 'lucide-react';

interface EmailFormProps {
  onGenerate: (content: string, tone: string) => void;
  onClear: () => void;
  isGenerating?: boolean;
}

export const EmailForm = ({ onGenerate, onClear, isGenerating = false }: EmailFormProps) => {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailContent.trim() && tone) {
      onGenerate(emailContent, tone);
    }
  };

  const handleClear = () => {
    setEmailContent('');
    setTone('');
    setCharCount(0);
    onClear();
  };

  const handleContentChange = (value: string) => {
    setEmailContent(value);
    setCharCount(value.length);
  };

  const toneOptions = [
    { value: 'professional', label: 'Professional - Formal and respectful', icon: '💼' },
    { value: 'friendly', label: 'Friendly - Warm and approachable', icon: '😊' },
    { value: 'apologetic', label: 'Apologetic - Sorry and understanding', icon: '🙏' },
    { value: 'confident', label: 'Confident - Assertive and sure', icon: '💪' },
    { value: 'enthusiastic', label: 'Enthusiastic - Excited and positive', icon: '🚀' },
  ];

  return (
    <form onSubmit={handleSubmit} className="glass-card animate-fade-in space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email-content" className="text-lg font-semibold flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Original Email Content
        </Label>
        <Textarea
          id="email-content"
          placeholder="Paste the email you want to reply to here..."
          value={emailContent}
          onChange={(e) => handleContentChange(e.target.value)}
          className="glow-input min-h-[150px] text-base"
          maxLength={2000}
        />
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">
            Enter the original email content to generate a perfect reply
          </span>
          <span className={`font-medium ${charCount > 1800 ? 'text-warning' : 'text-primary'}`}>
            {charCount}/2000
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tone-select" className="text-lg font-semibold flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary" />
          Reply Tone
        </Label>
        <Select value={tone} onValueChange={setTone}>
          <SelectTrigger className="glow-input text-base">
            <SelectValue placeholder="Choose the tone for your reply..." />
          </SelectTrigger>
          <SelectContent>
            {toneOptions.map((option) => (
              <SelectItem key={option.value} value={option.value} className="text-base">
                <span className="flex items-center gap-2">
                  <span>{option.icon}</span>
                  {option.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button
          type="submit"
          disabled={!emailContent.trim() || !tone || isGenerating}
          className="btn-primary flex-1 text-base py-6 flex items-center gap-2"
        >
          <Wand2 className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
          {isGenerating ? 'Generating...' : 'Generate Reply'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleClear}
          className="btn-secondary flex items-center gap-2 py-6"
        >
          <Trash2 className="w-5 h-5" />
          Clear All
        </Button>
      </div>
    </form>
  );
};