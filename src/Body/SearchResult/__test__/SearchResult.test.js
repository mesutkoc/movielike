import React from "react";
import SearchResult from "../SearchResult";
import { mount, shallow } from "enzyme";

describe('Search result test', () => {
    const dummyData = { count: 100, genre: 'Comedy' }

    it('should render with category page', () => {
        const page = "category";

        const wrapper = mount(<SearchResult searchResult={dummyData.count} genre={dummyData.genre} page={page}></SearchResult>);
        expect(wrapper.containsMatchingElement(
            <div className="searchResult">
                <div>Found<span className="searchResSpan">{dummyData.count}</span>movies related to<span className="searchResSpan">{dummyData.genre}</span>category.</div>
            </div>)).toBe(true);
    })

    it('should render with search page', () => {
        const page = "search";

        const wrapper = mount(<SearchResult searchResult={dummyData.count} page={page}></SearchResult>);
        expect(wrapper.containsMatchingElement(
            <div className="searchResult">
                <div>Found<span className="searchResSpan">{dummyData.count}</span>related movies.</div>
            </div>)).toBe(true);
    })


    it('renders three search result components', () => {
        const wrapper = shallow(<SearchResult />);
        expect(wrapper).toMatchSnapshot();
    });
})