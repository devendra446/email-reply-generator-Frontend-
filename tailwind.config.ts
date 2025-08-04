import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					vibrant: 'hsl(var(--primary-vibrant))',
					electric: 'hsl(var(--primary-electric))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					orange: 'hsl(var(--accent-orange))',
					green: 'hsl(var(--accent-green))',
					purple: 'hsl(var(--accent-purple))',
					pink: 'hsl(var(--accent-pink))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'car-drive': {
					'0%': { transform: 'translateX(0px) rotate(0deg) scale(1)' },
					'25%': { transform: 'translateX(3px) rotate(2deg) scale(1.05)' },
					'50%': { transform: 'translateX(0px) rotate(0deg) scale(1.1)' },
					'75%': { transform: 'translateX(-3px) rotate(-2deg) scale(1.05)' },
					'100%': { transform: 'translateX(0px) rotate(0deg) scale(1)' }
				},
				'rainbow-glow': {
					'0%': { filter: 'hue-rotate(0deg) brightness(1)', boxShadow: '0 0 20px hsl(199 89% 48% / 0.5)' },
					'25%': { filter: 'hue-rotate(90deg) brightness(1.2)', boxShadow: '0 0 25px hsl(280 100% 70% / 0.6)' },
					'50%': { filter: 'hue-rotate(180deg) brightness(1.4)', boxShadow: '0 0 30px hsl(30 100% 60% / 0.7)' },
					'75%': { filter: 'hue-rotate(270deg) brightness(1.2)', boxShadow: '0 0 25px hsl(142 76% 50% / 0.6)' },
					'100%': { filter: 'hue-rotate(360deg) brightness(1)', boxShadow: '0 0 20px hsl(199 89% 48% / 0.5)' }
				},
				'bounce-hover': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'road-lines': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px theme(colors.primary / 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 20px theme(colors.primary / 0.8), 0 0 30px theme(colors.primary / 0.4)',
						transform: 'scale(1.05)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'typing': {
					'0%, 100%': { transform: 'rotate(45deg) scale(1)' },
					'50%': { transform: 'rotate(45deg) scale(1.1)' }
				},
				'email-send': {
					'0%': { transform: 'translate(0, 0) rotate(12deg) scale(1)', opacity: '1' },
					'100%': { transform: 'translate(100px, -50px) rotate(45deg) scale(0.5)', opacity: '0' }
				},
				'blink': {
					'0%, 90%, 100%': { transform: 'scaleY(1)' },
					'95%': { transform: 'scaleY(0.1)' }
				},
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'car-drive': 'car-drive 3s ease-in-out infinite',
				'road-lines': 'road-lines 1.5s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rainbow-glow': 'rainbow-glow 4s linear infinite',
				'bounce-hover': 'bounce-hover 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-up': 'slide-up 0.5s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'typing': 'typing 1s ease-in-out infinite',
				'email-send': 'email-send 4s ease-in-out infinite',
				'blink': 'blink 3s ease-in-out infinite',
				'typewriter': 'typewriter 2s steps(20) infinite',
				'road-lines': 'road-lines 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
