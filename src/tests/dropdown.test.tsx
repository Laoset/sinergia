import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown, Badge } from '../ui/dropdown.ui';

describe('Dropdown', () => {
  it('should render the Dropdown component', () => {
    render(<Dropdown title='Dropdown Title'>Dropdown Content</Dropdown>);
    const title = screen.getByText('Dropdown Title');
    expect(title).toBeInTheDocument();
  });

  it('should toggle the dropdown content when clicked', () => {
    render(<Dropdown title='Dropdown Title'>Dropdown Content</Dropdown>);
    const toggleButton = screen.getByText('Dropdown Title');
    expect(screen.queryByText('Dropdown Content')).toBeNull();

    fireEvent.click(toggleButton);

    expect(screen.getByText('Dropdown Content')).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.queryByText('Dropdown Content')).toBeNull();
  });

  it('should render the badge if provided', () => {
    render(
      <Dropdown title='Dropdown Title' badge={<Badge>New</Badge>}>
        Dropdown Content
      </Dropdown>
    );
    expect(screen.getByText('New')).toBeInTheDocument();
  });
});

describe('Badge', () => {
  it('should render Badge component correctly', () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText('New');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      'text-xs bg-[#215a6c] text-[#c6dbe1] px-2 py-0.5 rounded-full'
    );
  });
});
