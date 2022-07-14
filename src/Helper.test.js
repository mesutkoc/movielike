import { splitGenrePath } from "./helpers";

describe('Return correct value',()=>{
    
    const genreNames = ['Action', "Science Fiction"];
    
    it('Get correct movie name for path',() => {
        expect(splitGenrePath(genreNames[0])).toEqual('Action');
    })

    it('Get correct movie name for path with "%20" if has blank',() => {
        expect(splitGenrePath(genreNames[1])).toEqual('Science%20Fiction');
    })
} )