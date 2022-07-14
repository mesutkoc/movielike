const randomPoint = () => {
    const point = Math.floor((Math.random() * 10) + 1);
    const degree = (360 * point) / 100;
    return [point, degree]
}
export const scrollPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export const splitGenrePath = (item) => {
    const genrePathList = item.split(' ');
    const newList = genrePathList.join('%20');
    return newList;
}

export default randomPoint;