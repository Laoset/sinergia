import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tabs from '../ui/tabs.ui';
import { TABS } from '../lib/constants';

describe('Tabs', () => {
  const onTabChangeMock = jest.fn();

  it('should render the Tabs component correctly', () => {
    render(<Tabs activeTab={TABS[0].label} onTabChange={onTabChangeMock} />);

    TABS.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });
  it('should highlight the active tab', () => {
    render(<Tabs activeTab={TABS[0].label} onTabChange={onTabChangeMock} />);

    expect(screen.getByText(TABS[0].label)).toHaveClass(
      'border-b-2 border-blue-500 text-blue-600'
    );
  });

  it('should disable tabs after the active tab', () => {
    render(<Tabs activeTab={TABS[1].label} onTabChange={onTabChangeMock} />);

    expect(screen.getByText(TABS[1].label)).not.toBeDisabled();

    expect(screen.getByText(TABS[2].label)).toBeDisabled();
  });

  it('should not call onTabChange when a disabled tab is clicked', () => {
    render(<Tabs activeTab={TABS[0].label} onTabChange={onTabChangeMock} />);

    fireEvent.click(screen.getByText(TABS[1].label));

    expect(onTabChangeMock).not.toHaveBeenCalled();
  });
});
