import React from "react";
import SearchResult from "../SearchResult";
import { mount, shallow } from "enzyme";

describe('Search result test', () => {
    const dummyData = { count: 100, genre: 'Comedy' }

    it('should render correctly', () => {
        const page = "category";
        const searchResult = 10;
        const wrapper = mount(<SearchResult searchResult={dummyData.count} genre={dummyData.genre} page="category"></SearchResult>);
        expect(wrapper.containsMatchingElement(<div className="searchResult">

            {page === 'category' ?
                <div>Found<span className="searchResSpan">{dummyData.count}</span>movies related to<span className="searchResSpan">{dummyData.genre}</span>category.</div>
                : <div>Found<span className="searchResSpan">{searchResult}</span>related movies.</div>}

        </div>)).toBe(true);
    })

    it('renders three search result components', () => {
        const wrapper = shallow(<SearchResult />);
        expect(wrapper).toMatchSnapshot();
    });
})