import { shallow } from 'enzyme';
import React from 'react';
import PokemonFilter from '../../components/PokemonFilter';

describe('Fylter Type', () => {
  let wrapper;
  const mockOnChangeFn = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<PokemonFilter category="normal" onClick={mockOnChangeFn} />);
  });

  it('onChange calls onClick handler ', () => {
    wrapper.find('select').simulate('change');
    expect(mockOnChangeFn.mock.calls.length).toBe(1);
  });

  it('renders 18 filter types', () => {
    expect(wrapper.find('option')).toHaveLength(18);
  });

  it('Select category as default', () => {
    expect(wrapper.find('option').at(0).text()).toBe('Select category');
  });
});
