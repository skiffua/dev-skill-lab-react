import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-background">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Skill Lab</h1>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          </div>
        </Container>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <Container size="md">
          <div className="text-center animate-fade-in">
            <Badge variant="primary" className="mb-6">
              Interview Pet Project
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to Skill Lab
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              A modern React and Next.js showcase featuring algorithms, JavaScript
              concepts, CSS techniques, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View on GitHub
                </Button>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card hover className="text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  3 Themes
                </h3>
                <p className="text-secondary">
                  Switch between Light, Dark, and Ocean themes powered by CSS
                  custom properties.
                </p>
              </Card>

              <Card hover className="text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Modern Stack
                </h3>
                <p className="text-secondary">
                  Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.
                </p>
              </Card>

              <Card hover className="text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  6 Sections
                </h3>
                <p className="text-secondary">
                  Algorithms, JavaScript, CSS, Components, Animations, and Data Viz.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </main>

      <footer className="border-t border-border bg-background">
        <Container>
          <div className="py-6 text-center">
            <p className="text-sm text-secondary">
              Built with Next.js & React © {new Date().getFullYear()}
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
