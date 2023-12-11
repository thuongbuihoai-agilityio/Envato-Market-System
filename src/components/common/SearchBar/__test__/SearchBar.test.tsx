import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { SearchBar } from '@app/components';

describe('SearchBar render', () => {
  it('Should render match with snapshot.', () => {
    const { container } = render(<SearchBar onSearch={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('Get SearchBar component', () => {
    const { getByTestId } = render(<SearchBar onSearch={() => {}} />);

    const searchBar = getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  });
});
