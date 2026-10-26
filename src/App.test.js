import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import { setupIntersectionMocking, resetIntersectionMocking } from 'react-intersection-observer/test-utils';
import turkish from '../public/res_primaryLanguage.json';
import english from '../public/res_secondaryLanguage.json';

beforeEach(() => setupIntersectionMocking(jest.fn));
afterEach(() => resetIntersectionMocking());

test.each([['Turkish', turkish], ['English', english]])('%s project section includes current work without linking private repositories', (_, data) => {
  render(<SelectedWork content={data.selected_work} />);
  expect(screen.getByRole('heading', { name: 'StillMD' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Everking' })).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(4);
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
  links.forEach(link => {
    expect(['www.athletrackai.com', 'www.callidus.digital', 'apps.apple.com']).toContain(new URL(link.href).hostname);
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

test('keeps unfinished projects visible without invented live links', () => {
  render(<SelectedWork content={english.selected_work} />);
  expect(screen.getAllByText('In development')).toHaveLength(2);
  expect(screen.queryByRole('link', { name: /StillMD|Everking/ })).not.toBeInTheDocument();
});

test('handles content loading before the localized JSON is ready', () => {
  const { container } = render(<SelectedWork />);
  expect(container).toBeEmptyDOMElement();
});

test('about section renders while the profile data is still loading', () => {
  const { container } = render(<About />);
  expect(container.querySelector('#about')).toBeInTheDocument();
});
