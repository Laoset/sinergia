import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.ui';

describe('Card UI Component', () => {
  it('should render Card component', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByText('Card content');
    expect(card).toBeInTheDocument();
  });

  it('should apply highlighted styles when isHighlighted is true', () => {
    render(<Card isHighlighted={true}>Highlighted Card</Card>);
    const card = screen.getByText('Highlighted Card');
    expect(card).toHaveClass('border-[#215a6c]');
    expect(card).toHaveClass('bg-[#215a6c]/5');
  });

  it('should apply default styles when isHighlighted is false', () => {
    render(<Card isHighlighted={false}>Default Card</Card>);
    const card = screen.getByText('Default Card');
    expect(card).toHaveClass('border-gray-200');
  });

  it('should render children inside the Card', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    );
    const title = screen.getByText('Title');
    const content = screen.getByText('Content');
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
describe('CardHeader UI Component', () => {
  it('should render CardHeader correctly', () => {
    render(<CardHeader>Header Content</CardHeader>);
    const header = screen.getByText('Header Content');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('p-3 pb-2');
  });
});

describe('CardTitle UI Component', () => {
  it('should render CardTitle correctly', () => {
    render(<CardTitle>Card Title</CardTitle>);
    const title = screen.getByText('Card Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-base font-medium text-black');
  });
});
