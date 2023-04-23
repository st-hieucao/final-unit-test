import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import UserList from './pages/user-list';
import UserDetail from './pages/user-detail';

test('renders App without errors', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});

test('renders user list', () => {
  render(<UserList />);
  const userListElement = screen.getByTestId('user-list');
  expect(userListElement).toBeInTheDocument();
});

test('renders loading message when loading is true', () => {
  render(<UserList />);
  const loadingMessage = screen.getByTestId('is-loading');
  expect(loadingMessage).toBeInTheDocument();
});

test('renders at least one user', async () => {
  render(<UserList />);
  const userElements = screen.getAllByTestId(/user-.*/);
  expect(userElements.length).toBeGreaterThan(0);
});

test('renders user detail', () => {
  render(<UserDetail />);
  const userListElement = screen.getByTestId('user-detail');
  expect(userListElement).toBeInTheDocument();
});

test('renders loading user detail', () => {
  render(<UserDetail />);
  const userLoadingElement = screen.getByTestId('is-loading');
  expect(userLoadingElement).toBeInTheDocument();
});

test('delete user', () => {
  render(<UserList />);
  setTimeout(() => {
    expect(screen.getByText('Clementina DuBuque')).toBeInTheDocument();
    expect(screen.getByTestId('delete-button')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Clementina DuBuque')).not.toBeInTheDocument();
  }, 1000);
});
