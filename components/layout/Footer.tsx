import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <Container>
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Skill Lab. Built with Next.js & React.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
