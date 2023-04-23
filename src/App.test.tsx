import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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

describe('list user info', () => {
  test('renders at least one user', async () => {
    render(<UserList />);
    const userElements = screen.getAllByTestId(/user-.*/);
    expect(userElements.length).toBeGreaterThan(0);
  });
});

// user detail
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
