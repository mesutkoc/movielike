import React from "react";
import SearchResult from "../SearchResult";
import { mount, shallow } from "enzyme";

describe('Search result test', () => {
    const dummyData = {count: 100, genre: 'Comedy'}

    it('should render correctly', () => {
        const wrapper = mount(<SearchResult searchResult={dummyData.count} genre={dummyData.genre}></SearchResult>);
        expect(wrapper.containsMatchingElement(<div className="searchResult">Found<span className="searchResSpan">{dummyData.count}</span>movies related to<span className="searchResSpan">{dummyData.genre}</span>category.</div>)).toBe(true);
    })

    it('renders three search result components', () => {
        const wrapper = shallow(<SearchResult />);
        expect(wrapper).toMatchSnapshot();
      });
})